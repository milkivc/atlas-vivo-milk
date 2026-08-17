from __future__ import annotations

import base64
import ftplib
import hashlib
import io
import json
import pathlib
import secrets
import time

import requests
from nacl.public import PrivateKey, SealedBox
from selenium import webdriver
from selenium.webdriver.common.by import By

HOST = "associacaomilk.pt"
USER = "migration@associacaomilk.pt"
REMOTE_FOLDER = "takeout_2026-05-31"
FILES = [
    ("1dtNB8IVLyxjHgtk8oNONSATnZecBh-xD", "takeout-20260531T022747Z-001.zip", 472837),
    ("1IRi0m1D7b6l2-hnithFwYTMNQLmBzZSn", "takeout-20260531T022748Z-17-003.zip", 203847569),
    ("107eiuj7UYGrE2S3rFl0tN5UllnvPB4V_", "takeout-20260531T022748Z-17-002.zip", 1956142674),
    ("1eZfqI8qEFrTQfYGnY-MJo3HMePmuTZFA", "takeout-20260531T022748Z-17-001.zip", 2053143205),
    ("1FgXD-5-2ZUxbhbvwQv4vOlv03TJKEIiI", "takeout-20260531T022748Z-9-001.zip", 158758423),
    ("1Vs2cZk5gkSpH5Ae76Vy9fL8ZYIZT98V-", "takeout-20260531T022748Z-15-001.zip", 70132736),
    ("1Yl06Do-dLamuDO5dUbM0J8IYDunPTzaj", "takeout-20260531T022748Z-14-001.zip", 22558),
]


def mask(value: str) -> None:
    if value:
        print("::add-mask::" + value)


def consume_privatebin(url: str) -> str:
    options = webdriver.ChromeOptions()
    options.add_argument("--headless=new")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--window-size=1280,900")
    driver = webdriver.Chrome(options=options)
    password = ""
    try:
        driver.get(url)
        deadline = time.time() + 45
        while time.time() < deadline and not password:
            try:
                btn = driver.find_element(By.ID, "loadconfirm-open-now")
                if btn.is_displayed() and btn.is_enabled():
                    btn.click()
                    time.sleep(1)
            except Exception:
                pass
            for selector, attr in [
                ("#plaintext", "textContent"),
                ("#prettyprint", "textContent"),
                ("#message", "value"),
            ]:
                try:
                    text = (driver.find_element(By.CSS_SELECTOR, selector).get_attribute(attr) or "").strip()
                    if len(text) >= 4:
                        password = text
                        break
                except Exception:
                    pass
            if not password:
                time.sleep(0.5)
    finally:
        driver.quit()
    if not password:
        raise RuntimeError("PRIVATEBIN_DECRYPTION_NO_CONTENT")
    lines = [x.strip() for x in password.replace("\r", "\n").split("\n") if x.strip()]
    if len(lines) != 1:
        raise RuntimeError("PRIVATEBIN_CREDENTIAL_FORMAT_UNEXPECTED")
    return lines[0]


def connect(password: str) -> ftplib.FTP_TLS:
    ftp = ftplib.FTP_TLS(timeout=300)
    ftp.connect(HOST, 21)
    ftp.login(USER, password)
    ftp.prot_p()
    ftp.set_pasv(True)
    return ftp


def verify_canary(password: str) -> None:
    ftp = connect(password)
    try:
        data = secrets.token_bytes(4096)
        expected_sha = hashlib.sha256(data).hexdigest()
        name = f"ia-milk-canary-{int(time.time())}.bin"
        ftp.storbinary("STOR " + name, io.BytesIO(data), blocksize=1024 * 1024)
        hasher = hashlib.sha256()
        count = 0

        def receive(chunk: bytes) -> None:
            nonlocal count
            hasher.update(chunk)
            count += len(chunk)

        ftp.retrbinary("RETR " + name, receive, blocksize=1024 * 1024)
        if count != 4096 or hasher.hexdigest() != expected_sha:
            raise RuntimeError("FTPS_CANARY_FIXITY_FAILED")
        try:
            ftp.delete(name)
        except Exception:
            pass
        try:
            ftp.mkd(REMOTE_FOLDER)
        except ftplib.error_perm as exc:
            if not str(exc).startswith("550"):
                raise
        ftp.cwd(REMOTE_FOLDER)
        print("FTPS_CANARY_OK bytes=4096 sha256_match=true")
        print("FTPS_DESTINATION_READY")
    finally:
        try:
            ftp.quit()
        except Exception:
            pass


def main() -> int:
    key_path = pathlib.Path("/tmp/ia_milk_takeout_v2.key")
    sealed_path = pathlib.Path("/tmp/ftps_migration_payload_v2.sealed.b64")
    private_key = PrivateKey(key_path.read_bytes())
    ciphertext = base64.urlsafe_b64decode(sealed_path.read_text().strip().encode())
    plain = SealedBox(private_key).decrypt(ciphertext)
    cfg = json.loads(plain.decode("utf-8"))
    paste_url = cfg["ptservidor_paste_url"]
    mask(paste_url)
    password = consume_privatebin(paste_url)
    mask(password)
    print("PRIVATEBIN_CREDENTIAL_CONSUMED_AND_MASKED")

    receipt = {
        "state": "TAKEOUT_FTPS_MIGRATION",
        "source": "Google Drive Takeout folder",
        "source_read_only": True,
        "destination": "PTServidor private FTPS",
        "expected_files": len(FILES),
        "expected_bytes": sum(item[2] for item in FILES),
        "verified_files": 0,
        "verified_bytes": 0,
        "failed_files": 0,
        "files": [],
        "secrets_exposed": False,
        "mistral_received_secrets": False,
    }
    receipt_path = pathlib.Path("ia-milk-takeout-ftps-receipt.json")
    verify_canary(password)
    work = pathlib.Path("/tmp/ia_milk_takeout")
    work.mkdir(mode=0o700, exist_ok=True)

    for file_id, name, expected_bytes in FILES:
        rec = {
            "drive_id": file_id,
            "name": name,
            "expected_bytes": expected_bytes,
            "transferred": False,
            "verified": False,
        }
        local_path = work / name
        try:
            url = f"https://drive.usercontent.google.com/download?id={file_id}&export=download&confirm=t"
            local_hasher = hashlib.sha256()
            local_bytes = 0
            with requests.get(url, stream=True, timeout=(30, 300)) as response:
                response.raise_for_status()
                with local_path.open("wb") as handle:
                    for chunk in response.iter_content(chunk_size=8 * 1024 * 1024):
                        if not chunk:
                            continue
                        handle.write(chunk)
                        local_hasher.update(chunk)
                        local_bytes += len(chunk)
            if local_bytes != expected_bytes:
                raise RuntimeError(f"DRIVE_SIZE_MISMATCH:{local_bytes}")
            local_sha = local_hasher.hexdigest()
            rec["local_bytes"] = local_bytes
            rec["local_sha256"] = local_sha
            print(f"DRIVE_DOWNLOAD_OK name={name} bytes={local_bytes}")

            ftp = connect(password)
            try:
                ftp.cwd(REMOTE_FOLDER)
                with local_path.open("rb") as handle:
                    ftp.storbinary("STOR " + name, handle, blocksize=1024 * 1024)
                rec["transferred"] = True
                remote_hasher = hashlib.sha256()
                remote_bytes = 0

                def receive(chunk: bytes) -> None:
                    nonlocal remote_bytes
                    remote_hasher.update(chunk)
                    remote_bytes += len(chunk)

                ftp.retrbinary("RETR " + name, receive, blocksize=1024 * 1024)
                remote_sha = remote_hasher.hexdigest()
                rec["remote_bytes"] = remote_bytes
                rec["remote_sha256"] = remote_sha
                rec["verified"] = remote_bytes == local_bytes and remote_sha == local_sha
                if not rec["verified"]:
                    raise RuntimeError("REMOTE_FIXITY_MISMATCH")
            finally:
                try:
                    ftp.quit()
                except Exception:
                    pass

            receipt["verified_files"] += 1
            receipt["verified_bytes"] += local_bytes
            receipt["files"].append(rec)
            receipt_path.write_text(json.dumps(receipt, ensure_ascii=False, indent=2))
            print(f"MIGRATED_VERIFIED name={name} bytes={local_bytes} sha256_match=true")
            local_path.unlink(missing_ok=True)
        except Exception as exc:
            rec["error"] = type(exc).__name__ + ":" + str(exc)[:160]
            receipt["failed_files"] += 1
            if rec not in receipt["files"]:
                receipt["files"].append(rec)
            receipt_path.write_text(json.dumps(receipt, ensure_ascii=False, indent=2))
            print(f"::error::MIGRATION_FILE_FAILED name={name} error={type(exc).__name__}")
            local_path.unlink(missing_ok=True)
            break

    receipt["complete_subset"] = (
        receipt["verified_files"] == len(FILES)
        and receipt["failed_files"] == 0
        and receipt["verified_bytes"] == receipt["expected_bytes"]
    )
    receipt_path.write_text(json.dumps(receipt, ensure_ascii=False, indent=2))
    print(
        "MIGRATION_SUBSET_RESULT "
        + json.dumps(
            {
                "verified_files": receipt["verified_files"],
                "failed_files": receipt["failed_files"],
                "verified_bytes": receipt["verified_bytes"],
                "expected_bytes": receipt["expected_bytes"],
                "complete_subset": receipt["complete_subset"],
            }
        )
    )

    password = "0" * len(password)
    paste_url = ""
    plain = b"0" * len(plain)
    key_path.unlink(missing_ok=True)
    sealed_path.unlink(missing_ok=True)
    return 0 if receipt["complete_subset"] else 3


if __name__ == "__main__":
    raise SystemExit(main())
