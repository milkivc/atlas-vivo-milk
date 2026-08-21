#!/usr/bin/env python3
"""Executor restrito cPanel/UAPI para a migração Atlas Vivo MILK.

Nunca contém credenciais. Recebe autenticação apenas por variáveis de ambiente
ou secret manager do executor. Por defeito só executa leituras. Escritas exigem
ATLAS_ALLOW_REMOTE_WRITE=1.
"""
from __future__ import annotations
import base64
import json
import os
import secrets
import string
import urllib.parse
import urllib.request

HOST = os.getenv('CPANEL_HOST', 'troi.ptservidor.net')
PORT = int(os.getenv('CPANEL_PORT', '2083'))
USER = os.getenv('CPANEL_USER', 'associ16')
TOKEN = os.getenv('CPANEL_API_TOKEN', '')
PASSWORD = os.getenv('CPANEL_PASSWORD', '')
ALLOW_WRITE = os.getenv('ATLAS_ALLOW_REMOTE_WRITE') == '1'


def _auth_header() -> str:
    if TOKEN:
        return f'cpanel {USER}:{TOKEN}'
    if PASSWORD:
        raw = base64.b64encode(f'{USER}:{PASSWORD}'.encode()).decode()
        return f'Basic {raw}'
    raise RuntimeError('NO_CPANEL_AUTH_REFERENCE')


def uapi(module: str, function: str, **params):
    query = urllib.parse.urlencode(params)
    url = f'https://{HOST}:{PORT}/execute/{module}/{function}'
    if query:
        url += '?' + query
    req = urllib.request.Request(url, headers={
        'Authorization': _auth_header(),
        'Accept': 'application/json',
        'User-Agent': 'Atlas-Vivo-MILK-UAPI/1.0',
    })
    with urllib.request.urlopen(req, timeout=45) as response:
        return json.load(response)


def list_ftp():
    return uapi('Ftp', 'list_ftp')


def ftp_exists(user: str, domain: str = 'associacaomilk.pt'):
    return uapi('Ftp', 'ftp_exists', user=user, domain=domain)


def _random_password(length: int = 36) -> str:
    alphabet = string.ascii_letters + string.digits + '!@#%_-'
    return 'M!' + ''.join(secrets.choice(alphabet) for _ in range(length))


def create_migration_ftp(local_user: str, home: str = 'atlas_milk_private/migration'):
    if not ALLOW_WRITE:
        raise RuntimeError('REMOTE_WRITE_GATE_CLOSED')
    password = _random_password()
    result = uapi('Ftp', 'add_ftp', **{
        'user': local_user,
        'domain': 'associacaomilk.pt',
        'pass': password,
        'quota': 0,
        'homedir': home,
    })
    # Password exists only in process memory and is returned only for the immediate canary.
    return result, password


def delete_ftp(local_user: str):
    if not ALLOW_WRITE:
        raise RuntimeError('REMOTE_WRITE_GATE_CLOSED')
    return uapi('Ftp', 'delete_ftp', user=local_user, domain='associacaomilk.pt')


def status_ok(payload: dict) -> bool:
    return payload.get('result', {}).get('status') == 1


if __name__ == '__main__':
    # Safe default: read-only discovery only.
    print(json.dumps(list_ftp(), ensure_ascii=False))
