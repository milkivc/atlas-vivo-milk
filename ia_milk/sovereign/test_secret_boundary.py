#!/usr/bin/env python3
from __future__ import annotations

import contextlib
import io
import json
import os
import pathlib
import tempfile

from connector_runtime import agent_catalog, emit, receipt, resolve_secret_file

SENTINEL = "MILK_SENTINEL_DO_NOT_LEAK_8af18e22"


def test_agent_catalog_has_no_secret_refs():
    raw = json.dumps(agent_catalog())
    assert "secret_refs" not in raw
    assert SENTINEL not in raw
    assert all(v["secret_access"] is False for v in agent_catalog().values())


def test_receipt_redacts_secret_fields():
    r = receipt("connector://ptservidor-ftps", "AUTH_OK", "probe", password=SENTINEL, sha256="abc")
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        emit(r)
    out = buf.getvalue()
    assert SENTINEL not in out
    assert "[REDACTED]" in out
    assert "AUTH_OK" in out


def test_secret_file_requires_owner_only():
    with tempfile.TemporaryDirectory() as td:
        p = pathlib.Path(td) / "runtime.env"
        p.write_text("PTSERVIDOR_FTP_PASSWORD=" + SENTINEL + "\n", encoding="utf-8")
        os.chmod(p, 0o600)
        data = resolve_secret_file(str(p))
        assert data["PTSERVIDOR_FTP_PASSWORD"] == SENTINEL
        os.chmod(p, 0o644)
        try:
            resolve_secret_file(str(p))
        except PermissionError:
            pass
        else:
            raise AssertionError("world-readable secret file was accepted")


def main():
    test_agent_catalog_has_no_secret_refs()
    test_receipt_redacts_secret_fields()
    test_secret_file_requires_owner_only()
    print("SECRET_BOUNDARY_TESTS_OK")


if __name__ == "__main__":
    main()
