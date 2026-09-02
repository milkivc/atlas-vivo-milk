#!/usr/bin/env python3
from __future__ import annotations
import json, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
errors: list[str] = []

def require(path: str):
    p = ROOT / path
    if not p.is_file():
        errors.append(f'MISSING_REQUIRED_FILE:{path}')
    return p

agents = require('AGENTS.md')
policy = require('ops/ATLAS_FORDISTA_NON_REGRESSION_POLICY.md')
registry = require('ops/critical-credentials-registry.yml')
schema = require('specs/curatorial-experience-contract.schema.json')
review_schema = require('specs/curatorial-author-review.schema.json')
approval_schema = require('specs/curatorial-author-approval.schema.json')
transformation_rule = require('curatorial-factory/PUBLIC_DYNAMIC_TRANSFORMATION_RULE_20260902.md')
sensory_constitution = require('curatorial-factory/DIGITAL_MULTISENSORY_EXPERIENCE_CONSTITUTION_20260902.md')
sensory_blueprint_schema = require('specs/digital-multisensory-curatorial-blueprint.schema.json')
require('.github/workflows/19-mistral-49-digital-multisensory-blueprints.yml')
require('scripts/verify_curatorial_author_approval.py')
require('scripts/provision_mistral_curatorial_foundry.py')
require('.vibe/agents/author-experience-preview.toml')
require('.vibe/agents/author-approval-guardian.toml')
require('deploy/atlas-public/copernico.js')
require('deploy/atlas-public/atlas.js')
require('deploy/atlas-public/experience-machine.js')

if agents.exists():
    text = agents.read_text(encoding='utf-8', errors='replace').lower()
    for token in (
        'nextcloud', 'ptservidor', 'mistral', 'copérnico', '49/49',
        'generic_fallback_allowed=false', 'porta autoral obrigatória antes do código',
        'curatorial-author-review.schema.json', 'curatorial-author-approval.schema.json'
    ):
        if token not in text:
            errors.append(f'AGENTS_MEMORY_TOKEN_MISSING:{token}')
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

if review_schema.exists():
    try:
        obj=json.loads(review_schema.read_text(encoding='utf-8'))
        if obj.get('properties',{}).get('approved_for_code',{}).get('const') is not False:
            errors.append('AUTHOR_REVIEW_SCHEMA_MUST_NOT_APPROVE_CODE')
        req=set(obj.get('required',[]))
        for name in ('description_coverage','experience_preview','ambiguities','improvement_proposals','experience_preview_sha256'):
            if name not in req:
                errors.append('AUTHOR_REVIEW_SCHEMA_MISSING:'+name)
    except Exception as exc:
        errors.append('AUTHOR_REVIEW_SCHEMA_INVALID:'+type(exc).__name__)

if approval_schema.exists():
    try:
        obj=json.loads(approval_schema.read_text(encoding='utf-8'))
        props=obj.get('properties',{})
        if props.get('approved_for_code',{}).get('const') is not True:
            errors.append('AUTHOR_APPROVAL_SCHEMA_NOT_LOCKED_TRUE')
        if props.get('author_decision',{}).get('const') != 'approved':
            errors.append('AUTHOR_APPROVAL_DECISION_NOT_LOCKED')
        if props.get('approval_scope',{}).get('const') != 'implement_exact_approved_experience_only':
            errors.append('AUTHOR_APPROVAL_SCOPE_NOT_EXACT')
    except Exception as exc:
        errors.append('AUTHOR_APPROVAL_SCHEMA_INVALID:'+type(exc).__name__)

if transformation_rule.exists():
    tt=transformation_rule.read_text(encoding='utf-8', errors='replace').lower()
    for token in (
        'regra canónica de transformação curatorial pública',
        'camada pública experiencial',
        'não existe correspondência rígida 1:1',
        'possível materialização física',
        'necessidade, potência ou desejo territorial',
        'validação humana'
    ):
        if token not in tt:
            errors.append('PUBLIC_TRANSFORMATION_RULE_MISSING:'+token)

if sensory_constitution.exists():
    st=sensory_constitution.read_text(encoding='utf-8', errors='replace').lower()
    for token in (
        'foco actual: webapp / camada pública experiencial',
        'experiências digitais curatoriais',
        'todos os sentidos',
        'tradução cruzada dos sentidos',
        'assinatura sensorial única — 49/49',
        'approved_for_code=false',
        'não desviar a fábrica para desenho de infra-estrutura física'
    ):
        if token not in st:
            errors.append('MULTISENSORY_FOCUS_RULE_MISSING:'+token)

if sensory_blueprint_schema.exists():
    try:
        obj=json.loads(sensory_blueprint_schema.read_text(encoding='utf-8'))
        props=obj.get('properties',{})
        required=set(obj.get('required',[]))
        for name in ('sensory_signature_id','sensory_channels','cross_sensory_translation','silence_or_absence','surprise_or_indeterminacy','session_variation','accessibility_equivalents','distinctiveness'):
            if name not in required:
                errors.append('MULTISENSORY_BLUEPRINT_SCHEMA_MISSING:'+name)
        if props.get('generic_fallback_allowed',{}).get('const') is not False:
            errors.append('MULTISENSORY_GENERIC_FALLBACK_NOT_FALSE')
        if props.get('approved_for_code',{}).get('const') is not False:
            errors.append('MULTISENSORY_BLUEPRINT_MUST_REQUIRE_AUTHOR_GATE')
    except Exception as exc:
        errors.append('MULTISENSORY_BLUEPRINT_SCHEMA_INVALID:'+type(exc).__name__)

vibe=list((ROOT/'.vibe/agents').glob('*.toml')) if (ROOT/'.vibe/agents').exists() else []
if len(vibe) < 14:
    errors.append(f'MISTRAL_AGENT_FACTORY_REGRESSION:count={len(vibe)}')

for p in (ROOT/'.github/workflows').glob('*.yml'):
    s=p.read_text(encoding='utf-8', errors='replace')
    if re.search(r'git\s+push[^\n]*(--mirror|--force|-f(?:\s|$))', s):
        errors.append('DESTRUCTIVE_GIT_PUSH:'+str(p.relative_to(ROOT)))

public=ROOT/'deploy/atlas-public'
for p in public.rglob('*') if public.exists() else []:
    if not p.is_file() or p.suffix in {'.gz','.png','.jpg','.jpeg','.webp','.woff','.woff2'}:
        continue
    s=p.read_text(encoding='utf-8', errors='replace')
    low=s.lower()
    if 'camada invisível' in low or 'camada invisivel' in low:
        errors.append('PUBLIC_BOUNDARY_PHRASE:'+str(p.relative_to(ROOT)))
    if re.search(r'(?i)(sk-[a-z0-9_-]{12,}|api[_-]?key\s*[:=]\s*["\'][^"\']+|password\s*[:=]\s*["\'][^"\']+)', s):
        errors.append('POSSIBLE_SECRET_LITERAL:'+str(p.relative_to(ROOT)))

if registry.exists():
    rt=registry.read_text(encoding='utf-8', errors='replace')
    for name in (
        'MISTRAL_API_KEY','PTSERVIDOR_FTPS_PASSWORD','PTSERVIDOR_ATLAS_FTPS_PASSWORD',
        'NEXTCLOUD_ATLAS','NEXTCLOUD_KEY','CPANEL_API_TOKEN'
    ):
        if name not in rt:
            errors.append('CREDENTIAL_REGISTRY_MISSING:'+name)
    if re.search(r'(?im)^\s*(password|token|secret)_value\s*:', rt):
        errors.append('CREDENTIAL_REGISTRY_CONTAINS_SECRET_VALUE_FIELD')
    for rule in ('never_send_secret_values_to_Mistral_or_other_agents','no_agent_may_create_guess_infer_or_substitute_a_missing_credential'):
        if rule not in rt:
            errors.append('CREDENTIAL_POLICY_MISSING:'+rule)

if policy.exists():
    pt=policy.read_text(encoding='utf-8', errors='replace').lower()
    for token in ('experience_preview','author_hash_approval','sha-256','nenhuma curadoria entra em código sem experiência previamente mostrada'):
        if token.lower() not in pt:
            errors.append('AUTHOR_GATE_POLICY_MISSING:'+token)

if errors:
    print('ATLAS_FACTORY_GUARD=FAIL')
    for e in errors:
        print('BLOCKER='+e)
    sys.exit(1)

print('ATLAS_FACTORY_GUARD=PASS')
print(f'MISTRAL_PROJECT_AGENTS={len(vibe)}')
print('FOCUS=WEBAPP_DIGITAL_MULTISENSORY_CURATORIAL_EXPERIENCES')
print('FORTY_NINE_DISTINCT_SENSORY_SIGNATURES=REQUIRED')
print('AUTHOR_EXPERIENCE_PREVIEW_BEFORE_CODE=ENFORCED')
print('EXACT_AUTHOR_APPROVED_HASH_REQUIRED=ENFORCED')
print('PUBLIC_DYNAMIC_TRANSFORMATION=ENFORCED')
print('PHYSICAL_INFRASTRUCTURE_DESIGN_NOT_CURRENT_FOCUS=ENFORCED')
print('GENERIC_CURATORIAL_FALLBACK=FORBIDDEN')
print('DESTRUCTIVE_GIT_PUSH=FORBIDDEN')
print('SECRET_LITERAL_EXPOSURE=FORBIDDEN')
