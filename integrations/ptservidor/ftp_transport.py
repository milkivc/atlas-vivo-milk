from __future__ import annotations

import ftplib
import hashlib
import io
import posixpath
from dataclasses import dataclass
from typing import Callable


class TransportError(RuntimeError):
    pass


@dataclass(frozen=True)
class FTPTransportConfig:
    host: str = "associacaomilk.pt"
    port: int = 21
    username: str = ""
    password: str = ""
    remote_root: str = "/atlas-private"
    timeout: int = 60
    require_tls: bool = True

    def __post_init__(self) -> None:
        if not self.username or not self.password:
            raise ValueError("Dedicated restricted FTP credentials are required")
        if self.port != 21:
            raise ValueError("PTServidor support confirmed FTP port 21 for this path")
        root = "/" + self.remote_root.strip("/")
        if root in ("/public_html", "/") or "public_html" in root.split("/"):
            raise ValueError("Remote root must stay outside public_html")


def safe_remote_path(root: str, relative: str) -> str:
    pieces = [p for p in relative.replace("\\", "/").split("/") if p not in ("", ".")]
    if any(p == ".." for p in pieces):
        raise ValueError("Path traversal denied")
    return posixpath.normpath("/" + root.strip("/") + "/" + "/".join(pieces))


def sha256_bytes(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


class PTServidorFTPTransport:
    """Narrow transport for preservative migration staging.

    It uses explicit FTPS when available and refuses a webroot destination. It does not
    delete source data and does not publish Atlas content.
    """

    def __init__(self, cfg: FTPTransportConfig, ftp_factory: Callable[..., ftplib.FTP] | None = None):
        self.cfg = cfg
        self.ftp_factory = ftp_factory

    def connect(self) -> ftplib.FTP:
        if self.ftp_factory:
            ftp = self.ftp_factory()
            ftp.connect(self.cfg.host, self.cfg.port, timeout=self.cfg.timeout)
        else:
            cls = ftplib.FTP_TLS if self.cfg.require_tls else ftplib.FTP
            ftp = cls()
            ftp.connect(self.cfg.host, self.cfg.port, timeout=self.cfg.timeout)
        ftp.login(self.cfg.username, self.cfg.password)
        if self.cfg.require_tls:
            if not isinstance(ftp, ftplib.FTP_TLS):
                raise TransportError("TLS required but transport is not FTP_TLS")
            ftp.prot_p()
        return ftp

    def _mkdirs(self, ftp: ftplib.FTP, remote_dir: str) -> None:
        current = ""
        for part in remote_dir.strip("/").split("/"):
            current += "/" + part
            try:
                ftp.mkd(current)
            except ftplib.error_perm as exc:
                if not str(exc).startswith("550"):
                    raise

    def upload_bytes(self, relative_path: str, data: bytes) -> dict[str, object]:
        remote = safe_remote_path(self.cfg.remote_root, relative_path)
        if "/public_html/" in remote + "/" or remote.endswith("/public_html"):
            raise PermissionError("Webroot write denied")
        digest = sha256_bytes(data)
        with self.connect() as ftp:
            self._mkdirs(ftp, posixpath.dirname(remote))
            ftp.storbinary(f"STOR {remote}", io.BytesIO(data), blocksize=1024 * 1024)
            size = ftp.size(remote)
            if size is not None and size != len(data):
                raise TransportError(f"Remote size mismatch: expected {len(data)}, got {size}")
        return {"remote_path": remote, "bytes": len(data), "sha256_local": digest, "size_verified": True}

    def download_bytes(self, relative_path: str) -> bytes:
        remote = safe_remote_path(self.cfg.remote_root, relative_path)
        buf = io.BytesIO()
        with self.connect() as ftp:
            ftp.retrbinary(f"RETR {remote}", buf.write, blocksize=1024 * 1024)
        return buf.getvalue()

    def upload_verified(self, relative_path: str, data: bytes) -> dict[str, object]:
        receipt = self.upload_bytes(relative_path, data)
        downloaded = self.download_bytes(relative_path)
        remote_digest = sha256_bytes(downloaded)
        if remote_digest != receipt["sha256_local"]:
            raise TransportError("Download-back SHA-256 mismatch")
        return {**receipt, "sha256_download_back": remote_digest, "verified": True}
