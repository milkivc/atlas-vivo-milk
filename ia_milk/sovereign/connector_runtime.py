#!/usr/bin/env python3
"""Secret-blind connector façade for IA MILK / Mistral trainers.

Agents receive only connector IDs and redacted receipts. Authentication material is
resolved locally at execution time and never serialized into trainer prompts.
"""
from __future__ import annotations

import json
import os
import pathlib
import re
import subprocess
import sys
from dataclasses import dataclass, asdict
from typing import Iterable, Mapping

CONNECTORS = {
    "connector://google-drive": {
        "mode": "read_only_source",
        "secret_refs": ["GOOGLE_APPLICATION_CREDENTIALS", "GOOGLE_OAUTH_JSON"],
    },
    "connector://ptservidor-ftps": {
        "mode": "write_private_preservative",
        "secret_refs": ["PTSERVIDOR_FTP_PASSWORD"],
    },
    "connector://cpanel": {
        "mode": "atlas_target_only",
        "secret_refs": ["CPANEL_API_TOKEN", "CPANEL_PASSWORD"],
    },
    "connector://nextcloud": {
        "mode": "private_document_store",
        "secret_refs": ["NEXTCLOUD_APP_PASSWORD", "NEXTCLOUD_PASSWORD"],
    },
}

SECRETISH = re.compile(r"(?i)(password|passwd|secret|token|api[_-]?key|authorization|cookie|credential)")

@dataclass(frozen=True)
class Receipt:
    connector: str
    state: str
    operation: str
    evidence: Mapping[str, object]


def agent_catalog() -> dict:
    """Safe material that may be supplied to Mistral/other trainers."""
    return {
        cid: {"mode": cfg["mode"], "secret_access": False}
        for cid, cfg in CONNECTORS.items()
    }


def _redact_mapping(data: Mapping[str, object]) -> dict:
    out = {}
    for k, v in data.items():
        if SECRETISH.search(str(k)):
            out[k] = "[REDACTED]"
        elif isinstance(v, Mapping):
            out[k] = _redact_mapping(v)
        else:
            out[k] = v
    return out


def receipt(connector: str, state: str, operation: str, **evidence: object) -> Receipt:
    if connector not in CONNECTORS:
        raise ValueError("unknown connector")
    safe = _redact_mapping(evidence)
    # Reject suspicious values too: receipts are status/evidence, never transport for secrets.
    for value in safe.values():
        if isinstance(value, str) and any(x in value.lower() for x in ("bearer ", "basic ", "sk-", "mistral_api_key=")):
            raise ValueError("secret-like value rejected from receipt")
    return Receipt(connector, state, operation, safe)


def emit(r: Receipt) -> None:
    print(json.dumps(asdict(r), ensure_ascii=False, sort_keys=True))


def resolve_secret_file(path: str) -> dict[str, str]:
    """Read KEY=VALUE runtime file. Never log return value."""
    p = pathlib.Path(path)
    mode = p.stat().st_mode & 0o777
    if mode & 0o077:
        raise PermissionError("secret file permissions must be 0600/owner-only")
    values: dict[str, str] = {}
    for raw in p.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        values[k.strip()] = v.strip()
    return values


def child_env(base: Mapping[str, str], secret_values: Mapping[str, str], allowed: Iterable[str]) -> dict[str, str]:
    env = dict(base)
    for name in allowed:
        if name in secret_values:
            env[name] = secret_values[name]
    return env


def run_connector_child(command: list[str], connector: str, runtime_secret_file: str) -> int:
    cfg = CONNECTORS[connector]
    secret_values = resolve_secret_file(runtime_secret_file)
    env = child_env(os.environ, secret_values, cfg["secret_refs"])
    proc = subprocess.run(command, env=env, text=True, capture_output=True)
    # Never forward child stdout/stderr wholesale. Emit only exit state.
    emit(receipt(connector, "EXEC_OK" if proc.returncode == 0 else "EXEC_FAIL", "child_process", exit_code=proc.returncode))
    return proc.returncode


def main() -> int:
    if len(sys.argv) == 2 and sys.argv[1] == "catalog":
        print(json.dumps(agent_catalog(), ensure_ascii=False, sort_keys=True))
        return 0
    print("usage: connector_runtime.py catalog", file=sys.stderr)
    return 2

if __name__ == "__main__":
    raise SystemExit(main())
