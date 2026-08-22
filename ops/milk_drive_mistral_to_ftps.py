import base64
import ftplib
import hashlib
import io
import json
import os
import pathlib
import re
import ssl
import time
import urllib.error
import urllib.request

MKEY = os.environ.get("MISTRAL_API_KEY", "").strip()
PWD_FILE = os.environ.get("MILK_FTPS_PASSWORD_FILE", "").strip()
GH = os.environ.get("GH_TOKEN", "").strip()
REPO = os.environ.get("REPO", "milkivc/atlas-vivo-milk")
RUN_ID = os.environ.get("RUN_ID", "unknown")
OUT = "atlas-drive-integral-v1"
RECEIPTS = ".milk-drive-receipts"
START = time.time()
STOP = 5 * 60 * 60 + 25 * 60

SEARCH_URL = "https://api.mistral.ai/v1/connectors/google_drive_mcp/tools/search_files/call"
DOWNLOAD_URL = "https://api.mistral.ai/v1/connectors/google_drive_mcp/tools/download_file_content/call"

EXPORTS = {
    "application/vnd.google-apps.document": (
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document", ".docx"
    ),
    "application/vnd.google-apps.spreadsheet": (
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", ".xlsx"
    ),
    "application/vnd.google-apps.presentation": (
        "application/vnd.openxmlformats-officedocument.presentationml.presentation", ".pptx"
    ),
    "application/vnd.google-apps.drawing": ("application/pdf", ".pdf"),
    "application/vnd.google-apps.script": ("application/vnd.google-apps.script+json", ".json"),
    "application/vnd.google-apps.vid": ("video/mp4", ".mp4"),
}
SPECIAL_METADATA_ONLY = {
    "application/vnd.google-apps.shortcut",
    "application/vnd.google-apps.form",
    "application/vnd.google-apps.map",
    "application/vnd.google-apps.project",
}


def http_json(url, payload=None, headers=None, timeout=180, retries=7):
    body = None if payload is None else json.dumps(payload).encode()
    method = "GET" if payload is None else "POST"
    last = None
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, data=body, method=method, headers=headers or {})
            with urllib.request.urlopen(req, timeout=timeout) as res:
                return res.status, json.loads(res.read().decode())
        except urllib.error.HTTPError as exc:
            last = exc
            if exc.code not in (408, 409, 429, 500, 502, 503, 504):
                raise
        except (TimeoutError, urllib.error.URLError) as exc:
            last = exc
        time.sleep(min(60, 2 ** attempt))
    raise RuntimeError(f"HTTP_RETRIES_EXHAUSTED:{type(last).__name__}")


def comment(msg):
    print(msg, flush=True)
    if not GH:
        return
    try:
        http_json(
            f"https://api.github.com/repos/{REPO}/issues/35/comments",
            {"body": msg},
            {
                "Authorization": "Bearer " + GH,
                "Content-Type": "application/json",
                "Accept": "application/vnd.github+json",
            },
            60,
            3,
        )
    except Exception:
        pass


def connect(password):
    last = None
    for attempt in range(8):
        try:
            ftp = ftplib.FTP_TLS(context=ssl.create_default_context(), timeout=300)
            ftp.connect("troi.ptservidor.net", 21, timeout=300)
            ftp.login("migration@associacaomilk.pt", password)
            ftp.prot_p()
            ftp.voidcmd("TYPE I")
            return ftp
        except Exception as exc:
            last = exc
            time.sleep(min(60, 2 ** attempt))
    raise RuntimeError(f"FTPS_CONNECT_FAILED:{type(last).__name__}")


def safe_segment(value, fallback="sem-nome"):
    value = str(value or "").replace("/", "∕").replace("\x00", "")
    value = re.sub(r"[\x00-\x1f]", "_", value).strip()
    if not value:
        value = fallback
    if len(value.encode("utf-8")) > 220:
        digest = hashlib.sha256(value.encode("utf-8", "surrogatepass")).hexdigest()[:12]
        raw = value.encode("utf-8")[:180]
        value = raw.decode("utf-8", "ignore") + "__" + digest
    return value


def split_ext(name):
    p = pathlib.PurePosixPath(name)
    if p.suffix and len(p.suffix) <= 20:
        return name[: -len(p.suffix)], p.suffix
    return name, ""


def ensure(ftp, path):
    ftp.cwd("/")
    for part in [p for p in path.split("/") if p]:
        try:
            ftp.mkd(part)
        except ftplib.all_errors:
            pass
        ftp.cwd(part)


def retr_bytes(ftp, path):
    data = bytearray()
    ftp.retrbinary("RETR " + path, data.extend, blocksize=1048576)
    return bytes(data)


def retr_json(ftp, path):
    return json.loads(retr_bytes(ftp, path))


def parse_mcp_json(res):
    for item in res.get("content", []) if isinstance(res, dict) else []:
        if not isinstance(item, dict) or not isinstance(item.get("text"), str):
            continue
        try:
            value = json.loads(item["text"])
            if isinstance(value, (dict, list)):
                return value
        except Exception:
            pass
    raise RuntimeError("MCP_JSON_UNPARSEABLE")


def search_all():
    headers = {
        "Authorization": "Bearer " + MKEY,
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
    token = None
    items = []
    seen = set()
    pages = 0
    while True:
        _, res = http_json(
            SEARCH_URL,
            {"arguments": {"query": None, "page_size": 1000, "page_token": token}},
            headers,
            180,
        )
        page = parse_mcp_json(res)
        if not isinstance(page, dict) or not isinstance(page.get("files"), list):
            raise RuntimeError("SEARCH_PAGE_INVALID")
        pages += 1
        for f in page["files"]:
            if not isinstance(f, dict):
                continue
            fid = str(f.get("id") or "")
            if fid and fid not in seen:
                seen.add(fid)
                items.append(f)
        token = page.get("next_page_token")
        if not token:
            break
        if pages >= 200:
            raise RuntimeError("SEARCH_PAGINATION_GUARD")
    return items, pages


def decode_download_response(res):
    candidates = []
    for item in res.get("content", []) if isinstance(res, dict) else []:
        if not isinstance(item, dict) or not isinstance(item.get("text"), str):
            continue
        text = item["text"].strip()
        candidates.append(text)
        try:
            obj = json.loads(text)
            if isinstance(obj, dict):
                for key in ("base64_content", "content", "data"):
                    if isinstance(obj.get(key), str):
                        candidates.append(obj[key])
        except Exception:
            pass
    for candidate in candidates:
        try:
            data = base64.b64decode(candidate, validate=True)
            if data or candidate == "":
                return data
        except Exception:
            continue
    raise RuntimeError("DOWNLOAD_BASE64_UNPARSEABLE")


def download_file(f):
    fid = str(f["id"])
    mt = str(f.get("mime_type") or "")
    args = {"file_id": fid}
    export_mime = None
    export_ext = ""
    if mt in EXPORTS:
        export_mime, export_ext = EXPORTS[mt]
        args["export_mime_type"] = export_mime
    headers = {
        "Authorization": "Bearer " + MKEY,
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
    _, res = http_json(DOWNLOAD_URL, {"arguments": args}, headers, 600, 7)
    data = decode_download_response(res)
    if not mt.startswith("application/vnd.google-apps."):
        try:
            expected = int(f.get("file_size") or 0)
        except Exception:
            expected = 0
        if expected and len(data) != expected:
            raise RuntimeError("SOURCE_SIZE_MISMATCH")
    return data, export_mime, export_ext


def build_paths(items):
    by_id = {str(f.get("id")): f for f in items if f.get("id")}
    folder_mime = "application/vnd.google-apps.folder"
    sibling_groups = {}
    base_names = {}
    for fid, f in by_id.items():
        mt = str(f.get("mime_type") or "")
        title = safe_segment(f.get("title"), "sem-nome")
        ext = EXPORTS.get(mt, (None, ""))[1] if mt in EXPORTS else ""
        if ext and not title.lower().endswith(ext.lower()):
            title = title + ext
        base_names[fid] = title
        key = (str(f.get("parent_id") or "root"), title.casefold())
        sibling_groups.setdefault(key, []).append(fid)
    resolved = {}
    for fid, title in base_names.items():
        f = by_id[fid]
        key = (str(f.get("parent_id") or "root"), title.casefold())
        if len(sibling_groups[key]) > 1:
            stem, ext = split_ext(title)
            title = f"{stem}__gdrive_{fid[:10]}{ext}"
        resolved[fid] = title

    cache = {}
    def folder_parts(fid, trail=None):
        if fid in cache:
            return cache[fid]
        trail = set() if trail is None else set(trail)
        if fid in trail:
            return ["_CICLO_" + hashlib.sha256(fid.encode()).hexdigest()[:10]]
        trail.add(fid)
        f = by_id.get(fid)
        if not f:
            return ["_ORFAO_" + hashlib.sha256(fid.encode()).hexdigest()[:10]]
        parent = str(f.get("parent_id") or "root")
        prefix = [] if parent in ("", "root") else folder_parts(parent, trail)
        result = prefix + [resolved[fid]]
        cache[fid] = result
        return result

    paths = {}
    orphans = 0
    for fid, f in by_id.items():
        parent = str(f.get("parent_id") or "root")
        if parent in ("", "root"):
            prefix = []
        elif parent in by_id:
            prefix = folder_parts(parent)
        else:
            prefix = ["_ORFAOS_PARTILHADOS", hashlib.sha256(parent.encode()).hexdigest()[:12]]
            orphans += 1
        paths[fid] = prefix + [resolved[fid]]
    return paths, orphans


def write_receipt(ftp, rid, receipt):
    ensure(ftp, f"{OUT}/{RECEIPTS}")
    payload = json.dumps(receipt, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
    ftp.storbinary("STOR " + rid + ".json", io.BytesIO(payload), blocksize=1048576)


def main():
    if not MKEY:
        raise RuntimeError("MISTRAL_API_KEY_MISSING")
    if not PWD_FILE or not pathlib.Path(PWD_FILE).is_file():
        raise RuntimeError("EPHEMERAL_FTPS_PASSWORD_FILE_MISSING")
    password = pathlib.Path(PWD_FILE).read_text(encoding="utf-8").strip()
    if not password:
        raise RuntimeError("EPHEMERAL_FTPS_PASSWORD_EMPTY")

    items, pages = search_all()
    folders = [f for f in items if f.get("mime_type") == "application/vnd.google-apps.folder"]
    files = [f for f in items if f.get("mime_type") != "application/vnd.google-apps.folder"]
    paths, orphan_count = build_paths(items)
    comment(
        f"MILK_DRIVE_INTEGRAL_STARTED run={RUN_ID} pages={pages} objects={len(items)} files={len(files)} "
        f"folders={len(folders)} orphaned_paths={orphan_count} source_writes=0 secret_persisted=0"
    )

    ftp = connect(password)
    comment(f"MILK_DRIVE_INTEGRAL_FTPS_AUTH_OK run={RUN_ID} secret_persisted=0")
    canary_name = f".milk-drive-canary-{RUN_ID}.bin"
    canary = os.urandom(64)
    ftp.storbinary("STOR " + canary_name, io.BytesIO(canary))
    rb = bytearray()
    ftp.retrbinary("RETR " + canary_name, rb.extend)
    if hashlib.sha256(canary).digest() != hashlib.sha256(rb).digest():
        raise RuntimeError("FTPS_CANARY_MISMATCH")
    ftp.delete(canary_name)
    comment(f"MILK_DRIVE_INTEGRAL_CANARY_VERIFIED run={RUN_ID} bytes=64 deleted=yes")

    # Materialize folder tree before files.
    for folder in sorted(folders, key=lambda x: len(paths[str(x["id"]) ])):
        fid = str(folder["id"])
        ensure(ftp, OUT + "/" + "/".join(paths[fid]))

    # Smallest first gives rapid durable progress; native objects have no reliable source byte size.
    def size_key(f):
        mt = str(f.get("mime_type") or "")
        if mt.startswith("application/vnd.google-apps."):
            return 0
        try:
            return int(f.get("file_size") or 0)
        except Exception:
            return 0
    files.sort(key=size_key)

    transferred = verified = existing = failed = bytes_done = special = processed = 0
    for f in files:
        if time.time() - START > STOP:
            break
        processed += 1
        fid = str(f["id"])
        mt = str(f.get("mime_type") or "")
        rid = hashlib.sha256(fid.encode()).hexdigest()
        receipt_path = f"/{OUT}/{RECEIPTS}/{rid}.json"
        try:
            prior = retr_json(ftp, receipt_path)
            if (
                prior.get("verified")
                and prior.get("drive_id") == fid
                and prior.get("modified_time") == f.get("modified_time")
                and int(ftp.size(prior["remote_path"])) == int(prior["bytes"])
            ):
                existing += 1
                verified += 1
                bytes_done += int(prior["bytes"])
                continue
        except Exception:
            pass

        try:
            if mt in SPECIAL_METADATA_ONLY:
                # These Drive objects are metadata/reference objects, not byte-downloadable via Drive export.
                special += 1
                remote_dir = OUT + "/" + "/".join(paths[fid][:-1])
                original_name = paths[fid][-1]
                stem, _ = split_ext(original_name)
                filename = stem + ".gdrive-metadata.json"
                ensure(ftp, remote_dir)
                private_meta = {
                    "drive_id": fid,
                    "parent_id": f.get("parent_id"),
                    "title": f.get("title"),
                    "mime_type": mt,
                    "created_time": f.get("created_time"),
                    "modified_time": f.get("modified_time"),
                    "view_url": f.get("view_url"),
                    "metadata_only_source_object": True,
                    "source_writes": 0,
                }
                data = json.dumps(private_meta, ensure_ascii=False, separators=(",", ":")).encode()
                remote_path = "/" + remote_dir + "/" + filename
                ftp.storbinary("STOR " + filename, io.BytesIO(data), blocksize=1048576)
                rb_hash = hashlib.sha256(); rb_bytes = [0]
                def consume(c): rb_hash.update(c); rb_bytes[0] += len(c)
                ftp.retrbinary("RETR " + remote_path, consume, blocksize=1048576)
                src_hash = hashlib.sha256(data).hexdigest()
                if rb_bytes[0] != len(data) or rb_hash.hexdigest() != src_hash:
                    raise RuntimeError("SPECIAL_METADATA_READBACK_MISMATCH")
                receipt = {
                    "drive_id": fid,
                    "modified_time": f.get("modified_time"),
                    "mime_type": mt,
                    "remote_path": remote_path,
                    "bytes": len(data),
                    "sha256": src_hash,
                    "verified": True,
                    "representation": "drive_metadata_reference",
                    "source_writes": 0,
                }
            else:
                data, export_mime, export_ext = download_file(f)
                dest_parts = paths[fid]
                remote_dir = OUT + "/" + "/".join(dest_parts[:-1])
                filename = dest_parts[-1]
                ensure(ftp, remote_dir)
                src_hash = hashlib.sha256(data).hexdigest()
                remote_path = "/" + remote_dir + "/" + filename
                ftp.storbinary("STOR " + filename, io.BytesIO(data), blocksize=1048576)
                rb_hash = hashlib.sha256(); rb_bytes = [0]
                def consume(c): rb_hash.update(c); rb_bytes[0] += len(c)
                ftp.retrbinary("RETR " + remote_path, consume, blocksize=1048576)
                if rb_bytes[0] != len(data) or rb_hash.hexdigest() != src_hash:
                    raise RuntimeError("DESTINATION_READBACK_MISMATCH")
                receipt = {
                    "drive_id": fid,
                    "parent_id": f.get("parent_id"),
                    "title": f.get("title"),
                    "mime_type": mt,
                    "modified_time": f.get("modified_time"),
                    "created_time": f.get("created_time"),
                    "remote_path": remote_path,
                    "bytes": len(data),
                    "sha256": src_hash,
                    "verified": True,
                    "export_mime_type": export_mime,
                    "export_extension": export_ext,
                    "source_writes": 0,
                }
            write_receipt(ftp, rid, receipt)
            transferred += 1
            verified += 1
            bytes_done += int(receipt["bytes"])
        except Exception as exc:
            failed += 1
            id_hash = hashlib.sha256(fid.encode()).hexdigest()[:16]
            print(f"DRIVE_FILE_FAILED index={processed} id_hash={id_hash} cause={type(exc).__name__}", flush=True)

        if processed % 25 == 0:
            comment(
                f"MILK_DRIVE_INTEGRAL_PROGRESS run={RUN_ID} processed={processed} transferred={transferred} "
                f"verified={verified} existing={existing} failed={failed} bytes={bytes_done} special={special} source_writes=0"
            )

    try:
        ftp.quit()
    except Exception:
        pass
    timed_out = time.time() - START > STOP
    state = "CHECKPOINT" if timed_out else ("COMPLETE" if failed == 0 and processed == len(files) else "PARTIAL")
    comment(
        f"MILK_DRIVE_INTEGRAL_{state} run={RUN_ID} inventory_files={len(files)} inventory_folders={len(folders)} "
        f"processed={processed} transferred={transferred} verified={verified} existing={existing} failed={failed} "
        f"bytes={bytes_done} special={special} source_writes=0"
    )
    if failed and not timed_out:
        raise RuntimeError(f"DRIVE_FILE_FAILURES={failed}")


if __name__ == "__main__":
    main()
