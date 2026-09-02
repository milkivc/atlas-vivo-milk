#!/usr/bin/env python3
from __future__ import annotations
import json, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
errors: list[str] = []

def require(path: str):
    p = ROOT / path
    if not p.is_file(): errors.append(f'MISSING_REQUIRED_FILE:{path}')
    return p

agents = require('AGENTS.md')
policy = require('ops/ATLAS_FORDISTA_NON_REGRESSION_POLICY.md')
registry = require('ops/critical-credentials-registry.yml')
schema = require('specs/curatorial-experience-contract.schema.json')
require('deploy/atlas-public/copernico.js')
require('deploy/atlas-public/atlas.js')
require('deploy/atlas-public/experience-machine.js')

if agents.exists():
    text = agents.read_text(encoding='utf-8', errors='replace').lower()
    for token in ('nextcloud', 'ptservidor', 'mistral', 'copérnico', '49/49', 'generic_fallback_allowed=false'):
        if token not in text: errors.append(f'AGENTS_MEMORY_TOKEN_MISSING:{token}')
    if 'google drive como fonte operacional' in text and 'não voltar' not in text:
        errors.append('INGESTION_POLICY_REGRESSION:GOOGLE_DRIVE')

if schema.exists():
    try:
        obj=json.loads(schema.read_text(encoding='utf-8'))
        prop=obj.get('properties',{}).get('generic_fallback_allowed',{})
        if prop.get('const') is not False:
            errors.append('EXPERIENCE_SCHEMA_GENERIC_FALLBACK_NOT_LOCKED_FALSE')
    except Exception as exc:
        errors.append('EXPERIENCE_SCHEMA_INVALID:'+type(exc).__name__)

vibe=list((ROOT/'.vibe/agents').glob('*.toml')) if (ROOT/'.vibe/agents').exists() else []
if len(vibe) < 10:
    errors.append(f'MISTRAL_AGENT_FACTORY_REGRESSION:count={len(vibe)}')

# Never allow destructive mirror/force push in active workflow definitions.
for p in (ROOT/'.github/workflows').glob('*.yml'):
    s=p.read_text(encoding='utf-8', errors='replace')
    if re.search(r'git\s+push[^\n]*(--mirror|--force|-f(?:\s|$))', s):
        errors.append('DESTRUCTIVE_GIT_PUSH:'+str(p.relative_to(ROOT)))

# Public runtime must not contain secret identifiers as embedded values or invisible-layer phrases.
public=ROOT/'deploy/atlas-public'
for p in public.rglob('*') if public.exists() else []:
    if not p.is_file() or p.suffix in {'.gz','.png','.jpg','.jpeg','.webp','.woff','.woff2'}: continue
    s=p.read_text(encoding='utf-8', errors='replace')
    low=s.lower()
    if 'camada invisível' in low or 'camada invisivel' in low:
        errors.append('PUBLIC_BOUNDARY_PHRASE:'+str(p.relative_to(ROOT)))
    if re.search(r'(?i)(sk-[a-z0-9_-]{12,}|api[_-]?key\s*[:=]\s*["\'][^"\']+|password\s*[:=]\s*["\'][^"\']+)', s):
        errors.append('POSSIBLE_SECRET_LITERAL:'+str(p.relative_to(ROOT)))

# Registry must list all critical identity names, without values.
if registry.exists():
    rt=registry.read_text(encoding='utf-8', errors='replace')
    for name in ('MISTRAL_API_KEY','PTSERVIDOR_FTPS_PASSWORD','NEXTCLOUD_ATLAS','NEXTCLOUD_KEY','CPANEL_API_TOKEN'):
        if name not in rt: errors.append('CREDENTIAL_REGISTRY_MISSING:'+name)
    if re.search(r'(?im)^\s*(password|token|secret)_value\s*:', rt):
        errors.append('CREDENTIAL_REGISTRY_CONTAINS_SECRET_VALUE_FIELD')

if errors:
    print('ATLAS_FACTORY_GUARD=FAIL')
    for e in errors: print('BLOCKER='+e)
    sys.exit(1)
print('ATLAS_FACTORY_GUARD=PASS')
print(f'MISTRAL_PROJECT_AGENTS={len(vibe)}')
print('FOCUS=PTSERVIDOR_NEXTCLOUD_MISTRAL_WEBAPP')
print('GENERIC_CURATORIAL_FALLBACK=FORBIDDEN')
print('DESTRUCTIVE_GIT_PUSH=FORBIDDEN')
print('SECRET_LITERAL_EXPOSURE=FORBIDDEN')
