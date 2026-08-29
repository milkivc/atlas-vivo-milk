#!/usr/bin/env python3
# SPDX-License-Identifier: EUPL-1.2

from __future__ import annotations

import fnmatch
import glob
import hashlib
import json
import os
import shutil
import sys
from pathlib import Path, PurePosixPath

ROOT = Path(__file__).resolve().parents[2]
CONFIG = ROOT / "config" / "codeberg-public-export.json"
OUT = ROOT / "build" / "codeberg-public-export"


def load_config() -> dict:
    return json.loads(CONFIG.read_text(encoding="utf-8"))


def matches(path: str, patterns: list[str]) -> bool:
    p = PurePosixPath(path)
    return any(fnmatch.fnmatch(path, pattern) or p.match(pattern) for pattern in patterns)


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as fh:
        for chunk in iter(lambda: fh.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def iter_included(config: dict) -> list[Path]:
    files: dict[str, Path] = {}
    excludes = config["exclude"]
    for pattern in config["include"]:
        for candidate in glob.glob(str(ROOT / pattern), recursive=True):
            p = Path(candidate)
            if not p.is_file():
                continue
            rel = p.relative_to(ROOT).as_posix()
            if matches(rel, excludes):
                continue
            files[rel] = p
    return [files[k] for k in sorted(files)]


def scan_forbidden(path: Path, patterns: list[str]) -> list[str]:
    try:
        text = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return []
    return [pattern for pattern in patterns if pattern in text]


def main() -> int:
    config = load_config()
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True, exist_ok=True)

    files = iter_included(config)
    if not files:
        raise SystemExit("PUBLIC_EXPORT_EMPTY")

    inventory = []
    forbidden_hits = []
    for source in files:
        rel = source.relative_to(ROOT).as_posix()
        hits = scan_forbidden(source, config.get("forbiddenContentPatterns", []))
        if hits:
            forbidden_hits.append({"path": rel, "patterns": hits})
            continue
        target = OUT / rel
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)
        inventory.append(
            {
                "path": rel,
                "bytes": target.stat().st_size,
                "sha256": sha256(target),
            }
        )

    if forbidden_hits:
        print(json.dumps({"status": "blocked", "forbiddenHits": forbidden_hits}, ensure_ascii=False, indent=2))
        return 7

    receipt = {
        "schema": "milk_codeberg_public_export_receipt_v1",
        "canonicalForge": config["canonicalForge"],
        "source": config["source"],
        "publicationPolicy": config["publicationPolicy"],
        "fileCount": len(inventory),
        "files": inventory,
        "sourceCommit": os.environ.get("GITHUB_SHA"),
        "generatedBy": "scripts/codeberg/build_public_export.py",
        "conceptualContentAdded": False,
        "forcePushAllowed": False,
    }
    (OUT / "PUBLIC_EXPORT_MANIFEST.json").write_text(
        json.dumps(receipt, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    print(json.dumps({"status": "ready", "fileCount": len(inventory), "output": str(OUT)}, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    sys.exit(main())
