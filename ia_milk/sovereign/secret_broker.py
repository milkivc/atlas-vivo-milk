#!/usr/bin/env python3
"""IA MILK runtime secret broker.

Security boundary:
- trainer/agent code never receives plaintext credentials;
- git may contain sealed ciphertext, never plaintext;
- plaintext exists only in a 0600 runtime file or child-process environment;
- stdout contains only public material / redacted receipts.
"""
from __future__ import annotations

import argparse
import base64
import hashlib
import json
import os
import pathlib
import stat
import sys
from typing import Mapping

DOMAIN = b"ATLAS-VIVO-MILK/secret-broker/x25519/v1\0"


def _nacl():
    try:
        from nacl.public import PrivateKey, PublicKey, SealedBox
    except ImportError as exc:
        raise SystemExit("PyNaCl is required") from exc
    return PrivateKey, PublicKey, SealedBox


def _seed(root_secret: str) -> bytes:
    if not root_secret or len(root_secret) < 24:
        raise SystemExit("runtime root secret unavailable/too short")
    return hashlib.sha256(DOMAIN + root_secret.encode("utf-8")).digest()


def private_key_from_env(env_name: str = "MISTRAL_API_KEY"):
    PrivateKey, _, _ = _nacl()
    value = os.environ.get(env_name, "")
    return PrivateKey(_seed(value))


def public_record(env_name: str = "MISTRAL_API_KEY") -> Mapping[str, str]:
    key = private_key_from_env(env_name).public_key
    raw = bytes(key)
    return {
        "scheme": "sealedbox-x25519-v1",
        "public_key_b64": base64.urlsafe_b64encode(raw).decode("ascii"),
        "fingerprint_sha256": hashlib.sha256(raw).hexdigest(),
    }


def seal(public_key_b64: str, payload: bytes) -> bytes:
    _, PublicKey, SealedBox = _nacl()
    raw = base64.urlsafe_b64decode(public_key_b64.encode("ascii"))
    return SealedBox(PublicKey(raw)).encrypt(payload)


def unseal(ciphertext: bytes, env_name: str = "MISTRAL_API_KEY") -> bytes:
    _, _, SealedBox = _nacl()
    return SealedBox(private_key_from_env(env_name)).decrypt(ciphertext)


def write_private(path: pathlib.Path, payload: bytes) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    flags = os.O_WRONLY | os.O_CREAT | os.O_TRUNC
    fd = os.open(path, flags, stat.S_IRUSR | stat.S_IWUSR)
    try:
        os.write(fd, payload)
    finally:
        os.close(fd)


def mask_for_actions(payload: bytes) -> None:
    # Mask each non-empty line before any child process can accidentally echo it.
    text = payload.decode("utf-8", errors="ignore")
    for value in text.splitlines():
        value = value.strip()
        if value:
            print(f"::add-mask::{value}")


def main() -> int:
    p = argparse.ArgumentParser()
    sub = p.add_subparsers(dest="cmd", required=True)
    pub = sub.add_parser("public")
    pub.add_argument("--env", default="MISTRAL_API_KEY")
    se = sub.add_parser("seal")
    se.add_argument("--public-key", required=True)
    se.add_argument("--input", required=True)
    se.add_argument("--output", required=True)
    un = sub.add_parser("unseal")
    un.add_argument("--env", default="MISTRAL_API_KEY")
    un.add_argument("--input", required=True)
    un.add_argument("--output", required=True)
    args = p.parse_args()

    if args.cmd == "public":
        print(json.dumps(public_record(args.env), sort_keys=True))
        return 0
    if args.cmd == "seal":
        data = pathlib.Path(args.input).read_bytes()
        pathlib.Path(args.output).write_bytes(seal(args.public_key, data))
        print("SEALED_OK")
        return 0
    if args.cmd == "unseal":
        plain = unseal(pathlib.Path(args.input).read_bytes(), args.env)
        mask_for_actions(plain)
        write_private(pathlib.Path(args.output), plain)
        print("UNSEALED_TO_RUNTIME_FILE_OK")
        return 0
    return 2


if __name__ == "__main__":
    raise SystemExit(main())
