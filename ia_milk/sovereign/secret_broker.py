#!/usr/bin/env python3
"""IA MILK sovereign secret broker.

Hard boundary:
- IA MILK owns the broker root and secret references.
- External trainers (including Mistral) never receive plaintext credentials.
- Git may contain public sealing keys or sealed ciphertext only.
- Plaintext may exist only transiently in a 0600 runtime file or child-process environment.
- No trainer credential may be used as the broker root.
"""
from __future__ import annotations
import argparse, base64, hashlib, json, os, pathlib, stat
from typing import Mapping

DOMAIN=b"ATLAS-VIVO-MILK/secret-broker/x25519/v2\0"
DEFAULT_ROOT_ENV="IA_MILK_BROKER_ROOT_KEY"
FORBIDDEN_ROOT_ENVS={"MISTRAL_API_KEY","OPENAI_API_KEY","ANTHROPIC_API_KEY","GEMINI_API_KEY"}

def _nacl():
    try:
        from nacl.public import PrivateKey, PublicKey, SealedBox
    except ImportError as exc:
        raise SystemExit("PyNaCl is required") from exc
    return PrivateKey,PublicKey,SealedBox

def _validate_env_name(env_name:str)->None:
    if env_name in FORBIDDEN_ROOT_ENVS:
        raise SystemExit("external trainer credential cannot be IA MILK broker root")

def _seed(root_secret:str)->bytes:
    if not root_secret or len(root_secret)<32:
        raise SystemExit("IA MILK broker root unavailable/too short")
    return hashlib.sha256(DOMAIN+root_secret.encode()).digest()

def private_key_from_env(env_name:str=DEFAULT_ROOT_ENV):
    _validate_env_name(env_name)
    PrivateKey,_,_=_nacl()
    return PrivateKey(_seed(os.environ.get(env_name,"")))

def public_record(env_name:str=DEFAULT_ROOT_ENV)->Mapping[str,str]:
    raw=bytes(private_key_from_env(env_name).public_key)
    return {"scheme":"sealedbox-x25519-v2","public_key_b64":base64.urlsafe_b64encode(raw).decode(),"fingerprint_sha256":hashlib.sha256(raw).hexdigest(),"root_owner":"IA_MILK"}

def seal(public_key_b64:str,payload:bytes)->bytes:
    _,PublicKey,SealedBox=_nacl(); raw=base64.urlsafe_b64decode(public_key_b64.encode())
    return SealedBox(PublicKey(raw)).encrypt(payload)

def unseal(ciphertext:bytes,env_name:str=DEFAULT_ROOT_ENV)->bytes:
    _,_,SealedBox=_nacl(); return SealedBox(private_key_from_env(env_name)).decrypt(ciphertext)

def write_private(path:pathlib.Path,payload:bytes)->None:
    path.parent.mkdir(parents=True,exist_ok=True)
    fd=os.open(path,os.O_WRONLY|os.O_CREAT|os.O_TRUNC,stat.S_IRUSR|stat.S_IWUSR)
    try: os.write(fd,payload)
    finally: os.close(fd)

def mask_for_actions(payload:bytes)->None:
    for value in payload.decode("utf-8",errors="ignore").splitlines():
        value=value.strip()
        if value: print(f"::add-mask::{value}")

def main()->int:
    p=argparse.ArgumentParser(); sub=p.add_subparsers(dest="cmd",required=True)
    pub=sub.add_parser("public"); pub.add_argument("--env",default=DEFAULT_ROOT_ENV)
    se=sub.add_parser("seal"); se.add_argument("--public-key",required=True); se.add_argument("--input",required=True); se.add_argument("--output",required=True)
    un=sub.add_parser("unseal"); un.add_argument("--env",default=DEFAULT_ROOT_ENV); un.add_argument("--input",required=True); un.add_argument("--output",required=True)
    a=p.parse_args()
    if a.cmd=="public": print(json.dumps(public_record(a.env),sort_keys=True)); return 0
    if a.cmd=="seal": pathlib.Path(a.output).write_bytes(seal(a.public_key,pathlib.Path(a.input).read_bytes())); print("SEALED_OK"); return 0
    if a.cmd=="unseal":
        plain=unseal(pathlib.Path(a.input).read_bytes(),a.env); mask_for_actions(plain); write_private(pathlib.Path(a.output),plain); print("UNSEALED_TO_RUNTIME_FILE_OK"); return 0
    return 2
if __name__=="__main__": raise SystemExit(main())
