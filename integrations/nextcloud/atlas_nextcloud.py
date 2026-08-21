from __future__ import annotations

import base64
import hashlib
import json
import posixpath
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from typing import Any, Iterable


class NextcloudError(RuntimeError):
    pass


@dataclass(frozen=True)
class NextcloudConfig:
    base_url: str
    username: str
    app_password: str
    remote_root: str = "/Atlas-Vivo-MILK"
    timeout: int = 60

    def __post_init__(self) -> None:
        if not self.base_url.startswith("https://"):
            raise ValueError("Nextcloud must use HTTPS")
        if not self.username or not self.app_password:
            raise ValueError("Dedicated Nextcloud credentials are required")


def sha256_bytes(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def safe_remote_path(root: str, path: str) -> str:
    raw = path.replace("\\", "/")
    pieces = [p for p in raw.split("/") if p not in ("", ".")]
    if any(p == ".." for p in pieces):
        raise ValueError("Path traversal denied")
    clean = "/" + "/".join(pieces)
    root_clean = "/" + root.strip("/")
    return posixpath.normpath(root_clean + clean)


class NextcloudAtlasClient:
    """Sovereign private-storage adapter for Atlas Vivo MILK.

    This adapter deliberately exposes controlled capabilities rather than unrestricted shell access.
    It never auto-publishes content and never writes to the Atlas public webroot.
    """

    def __init__(self, config: NextcloudConfig):
        self.cfg = config
        self.base = config.base_url.rstrip("/")
        token = base64.b64encode(f"{config.username}:{config.app_password}".encode()).decode()
        self.auth = f"Basic {token}"

    def _request(self, method: str, url: str, *, data: bytes | None = None,
                 headers: dict[str, str] | None = None) -> tuple[int, dict[str, str], bytes]:
        h = {"Authorization": self.auth, "User-Agent": "Atlas-Vivo-MILK/NextcloudAdapter"}
        if headers:
            h.update(headers)
        req = urllib.request.Request(url, method=method, headers=h, data=data)
        try:
            with urllib.request.urlopen(req, timeout=self.cfg.timeout) as response:
                return response.status, dict(response.headers.items()), response.read()
        except Exception as exc:
            raise NextcloudError(f"{method} {url}: {exc}") from exc

    def webdav_url(self, remote_path: str = "") -> str:
        target = safe_remote_path(self.cfg.remote_root, remote_path)
        encoded = "/".join(urllib.parse.quote(part, safe="") for part in target.strip("/").split("/"))
        user = urllib.parse.quote(self.cfg.username, safe="")
        return f"{self.base}/remote.php/dav/files/{user}/{encoded}"

    def capability_probe(self) -> dict[str, Any]:
        url = f"{self.base}/ocs/v1.php/cloud/capabilities?format=json"
        status, _, body = self._request("GET", url, headers={"OCS-APIRequest": "true", "Accept": "application/json"})
        payload = json.loads(body.decode("utf-8"))
        return {"http": status, "capabilities": payload.get("ocs", {}).get("data", {}).get("capabilities", {})}

    def propfind(self, remote_path: str = "", depth: int = 0) -> bytes:
        body = b'''<?xml version="1.0"?><d:propfind xmlns:d="DAV:"><d:prop><d:getcontentlength/><d:getetag/><d:getlastmodified/><d:resourcetype/></d:prop></d:propfind>'''
        _, _, result = self._request("PROPFIND", self.webdav_url(remote_path), data=body,
                                     headers={"Depth": str(depth), "Content-Type": "application/xml"})
        return result

    def exists(self, remote_path: str) -> bool:
        try:
            self.propfind(remote_path, 0)
            return True
        except NextcloudError:
            return False

    def mkdir(self, remote_path: str) -> None:
        self._request("MKCOL", self.webdav_url(remote_path))

    def ensure_tree(self, paths: Iterable[str]) -> None:
        for path in paths:
            pieces = [p for p in path.strip("/").split("/") if p]
            acc = ""
            for piece in pieces:
                acc = f"{acc}/{piece}"
                if not self.exists(acc):
                    self.mkdir(acc)

    def put(self, remote_path: str, data: bytes, *, expected_sha256: str | None = None) -> dict[str, Any]:
        digest = sha256_bytes(data)
        if expected_sha256 and digest != expected_sha256:
            raise ValueError("Local SHA-256 mismatch before upload")
        status, headers, _ = self._request("PUT", self.webdav_url(remote_path), data=data,
                                           headers={"Content-Type": "application/octet-stream"})
        return {"status": status, "bytes": len(data), "sha256": digest, "etag": headers.get("ETag")}

    def get(self, remote_path: str) -> bytes:
        _, _, body = self._request("GET", self.webdav_url(remote_path))
        return body

    def put_verified(self, remote_path: str, data: bytes) -> dict[str, Any]:
        local = sha256_bytes(data)
        upload = self.put(remote_path, data, expected_sha256=local)
        downloaded = self.get(remote_path)
        remote = sha256_bytes(downloaded)
        if local != remote:
            raise NextcloudError("Download-back checksum mismatch")
        return {**upload, "download_back_sha256": remote, "verified": True}

    def delete_staging_only(self, remote_path: str) -> None:
        path = safe_remote_path(self.cfg.remote_root, remote_path)
        if "/Staging/" not in path + "/" and not path.endswith("/Staging"):
            raise PermissionError("Delete is restricted to Staging")
        self._request("DELETE", self.webdav_url(remote_path))

    def search_files(self, phrase: str, limit: int = 100) -> bytes:
        # Nextcloud WebDAV SEARCH endpoint (DASL). Returned XML is kept intact for provenance.
        query = f'''<?xml version="1.0"?><d:searchrequest xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns"><d:basicsearch><d:select><d:prop><d:displayname/><d:getcontentlength/><oc:fileid/></d:prop></d:select><d:from><d:scope><d:href>{self.webdav_url("")}</d:href><d:depth>infinity</d:depth></d:scope></d:from><d:where><d:like><d:prop><d:displayname/></d:prop><d:literal>%{phrase}%</d:literal></d:like></d:where><d:limit><d:nresults>{limit}</d:nresults></d:limit></d:basicsearch></d:searchrequest>'''.encode()
        _, _, body = self._request("SEARCH", f"{self.base}/remote.php/dav", data=query,
                                   headers={"Content-Type": "application/xml"})
        return body

    def list_versions(self, file_id: str) -> bytes:
        url = f"{self.base}/remote.php/dav/versions/{urllib.parse.quote(self.cfg.username, safe='')}/versions/{urllib.parse.quote(str(file_id), safe='')}"
        _, _, body = self._request("PROPFIND", url, headers={"Depth": "1"})
        return body

    def list_trashbin(self) -> bytes:
        url = f"{self.base}/remote.php/dav/trashbin/{urllib.parse.quote(self.cfg.username, safe='')}/trash"
        _, _, body = self._request("PROPFIND", url, headers={"Depth": "1"})
        return body

    def create_share(self, path: str, *, share_type: int, share_with: str | None = None,
                     permissions: int = 1, expire_date: str | None = None) -> dict[str, Any]:
        # Never used automatically for public publication. Caller must pass through a human gate.
        form = {"path": path, "shareType": str(share_type), "permissions": str(permissions)}
        if share_with:
            form["shareWith"] = share_with
        if expire_date:
            form["expireDate"] = expire_date
        data = urllib.parse.urlencode(form).encode()
        url = f"{self.base}/ocs/v2.php/apps/files_sharing/api/v1/shares?format=json"
        _, _, body = self._request("POST", url, data=data,
                                   headers={"OCS-APIRequest": "true", "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json"})
        return json.loads(body.decode("utf-8"))

    def direct_download(self, file_id: int) -> dict[str, Any]:
        data = urllib.parse.urlencode({"fileId": str(file_id)}).encode()
        url = f"{self.base}/ocs/v2.php/apps/dav/api/v1/direct?format=json"
        _, _, body = self._request("POST", url, data=data,
                                   headers={"OCS-APIRequest": "true", "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json"})
        return json.loads(body.decode("utf-8"))

    def receipt(self, operation: str, **detail: Any) -> dict[str, Any]:
        sanitized = {k: v for k, v in detail.items() if "password" not in k.lower() and "token" not in k.lower()}
        raw = json.dumps({"operation": operation, **sanitized}, sort_keys=True, ensure_ascii=False).encode()
        return {"operation": operation, "detail": sanitized, "receipt_sha256": sha256_bytes(raw)}


ATLAS_NEXTCLOUD_TREE = [
    "/00_CONTROLO_E_INDICE",
    "/01_CORPUS_SOBERANO/Originais",
    "/01_CORPUS_SOBERANO/Exports_Google_Nativos",
    "/02_IA_MILK/Source_Registry",
    "/02_IA_MILK/Annotations",
    "/02_IA_MILK/Episodic_Memory",
    "/02_IA_MILK/Procedural_Memory",
    "/02_IA_MILK/Execution_Receipts",
    "/03_CURADORIA_PRIVADA/Candidatos",
    "/03_CURADORIA_PRIVADA/Validacao_Humana",
    "/04_MIGRACAO/Staging",
    "/04_MIGRACAO/Checkpoints",
    "/04_MIGRACAO/Verified",
    "/05_PRESERVACAO/Software_Heritage",
    "/05_PRESERVACAO/DataCite_Zenodo_IGAC",
    "/06_WEBAPP/Staging_Artifacts",
    "/06_WEBAPP/Rollback",
    "/07_AUDITORIA/Logs_Sanitizados",
]
