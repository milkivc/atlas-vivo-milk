import hashlib
import json
import os
import pathlib
import subprocess
import urllib.parse
import urllib.request
from datetime import datetime, timezone

API = "https://archive.softwareheritage.org/api/1"
ORIGIN = os.environ.get("ATLAS_SOURCE_ORIGIN", "https://github.com/milkivc/atlas-vivo-milk")
OUT = pathlib.Path("artifacts/software-heritage")
OUT.mkdir(parents=True, exist_ok=True)


def http(method, url, payload=None, token=None):
    headers = {"Accept": "application/json", "User-Agent": "Atlas-Vivo-MILK-Preservation/1.0"}
    if token:
        headers["Authorization"] = "Bearer " + token
    data = None
    if payload is not None:
        headers["Content-Type"] = "application/json"
        data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, method=method, headers=headers, data=data)
    with urllib.request.urlopen(req, timeout=120) as r:
        raw = r.read()
    return json.loads(raw.decode("utf-8")) if raw else {}


def local_swhid(path="."):
    try:
        p = subprocess.run(["swh", "identify", "--no-filename", path], capture_output=True, text=True, check=True)
        return p.stdout.strip().splitlines()[-1].strip()
    except Exception as exc:
        return {"state": "NOT_COMPUTED", "reason": repr(exc)}


def save_code_now(origin):
    q = urllib.parse.urlencode({"visit_type": "git", "origin_url": origin})
    return http("POST", f"{API}/origin/save/?{q}")


def check_save(request_id):
    return http("GET", f"{API}/origin/save/{request_id}/")


def resolve_swhid(swhid):
    return http("GET", f"{API}/resolve/{urllib.parse.quote(swhid, safe=':;=/')}/")


def sha256_file(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for block in iter(lambda: f.read(1024 * 1024), b""):
            h.update(block)
    return h.hexdigest()


def main():
    now = datetime.now(timezone.utc).isoformat()
    git_sha = subprocess.check_output(["git", "rev-parse", "HEAD"], text=True).strip()
    branch = subprocess.check_output(["git", "rev-parse", "--abbrev-ref", "HEAD"], text=True).strip()
    computed = local_swhid(".")
    receipt = {
        "state": "SOFTWARE_HERITAGE_PRESERVATION_EXECUTED",
        "timestamp": now,
        "origin": ORIGIN,
        "git_sha": git_sha,
        "branch": branch,
        "local_swhid": computed,
        "known_snapshot_swhid": "swh:1:snp:a347d3000d5369dc5ea04fc229085252952833cd",
        "drive_writes": 0,
        "nextcloud_written": False,
    }
    try:
        save = save_code_now(ORIGIN)
        receipt["save_code_now"] = save
        rid = save.get("id")
        if rid:
            receipt["save_status"] = check_save(rid)
    except Exception as exc:
        receipt["save_code_now"] = {"state": "ERROR", "reason": repr(exc)}
    try:
        receipt["known_snapshot_resolve"] = resolve_swhid(receipt["known_snapshot_swhid"])
    except Exception as exc:
        receipt["known_snapshot_resolve"] = {"state": "ERROR", "reason": repr(exc)}

    path = OUT / "execution-receipt.json"
    path.write_text(json.dumps(receipt, ensure_ascii=False, indent=2), encoding="utf-8")
    manifest = {
        "files": [{"path": str(path), "sha256": sha256_file(path)}],
        "nextcloud_required": True,
        "nextcloud_state": "AWAITING_VERIFIED_WEBDAV_WRITE",
    }
    (OUT / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(receipt, ensure_ascii=False, sort_keys=True))


if __name__ == "__main__":
    main()
