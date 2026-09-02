#!/usr/bin/env python3
import concurrent.futures
import json
import os
import pathlib
import random
import time
import urllib.request

ROOT = pathlib.Path('.')
OUT = ROOT / 'curatorial-factory' / 'sensory-blueprints'
API = 'https://api.mistral.ai/v1/chat/completions'
MODEL = 'mistral-medium-latest'

catalog = json.loads((ROOT / 'deploy/atlas-public/catalogo-curatorial.json').read_text(encoding='utf-8'))
entries = catalog['entradas']
if len(entries) != 49:
    raise SystemExit(f'EXPECTED_49_CURATORIAL_ENTRIES_GOT_{len(entries)}')

constitution = (ROOT / 'curatorial-factory/DIGITAL_MULTISENSORY_EXPERIENCE_CONSTITUTION_20260902.md').read_text(encoding='utf-8')
corpus = (ROOT / 'curatorial-factory/SOURCE_CORPUS_20260902.md').read_text(encoding='utf-8')
schema = json.loads((ROOT / 'specs/digital-multisensory-curatorial-blueprint.schema.json').read_text(encoding='utf-8'))
api_key = os.environ.get('MISTRAL_API_KEY', '').strip()
if not api_key:
    raise SystemExit('MISTRAL_API_KEY_MISSING')

OUT.mkdir(parents=True, exist_ok=True)
for f in OUT.glob('*.json'):
    f.unlink()
for f in OUT.glob('FAILURES.txt'):
    f.unlink()

system = '''És um compositor de experiências digitais curatoriais para o Atlas Vivo MILK. O foco desta estação é EXCLUSIVAMENTE criar a dinâmica da experiência digital da WebApp antes de código. Cada experiência deve parecer viva, responder à presença da pessoa, convocar vários sentidos, misturar canais, usar silêncio/ausência, surpresa, ritmo, corpo, território e devolução. Não faças cards, menus, quizzes genéricos, chatbots genéricos, páginas explicativas, dashboards, pontos/XP/badges ou animação decorativa. Não inventes factos autorais. Se a fonte não sustenta um detalhe, coloca-o em questions_for_eduardo ou improvement_proposals. Olfacto e paladar só podem ser evocados digitalmente, nunca fingidos como output do browser. Microfone/câmara/movimento/geolocalização são opcionais e a experiência deve funcionar sem permissões. Acessibilidade preserva a poesia, não é versão inferior. Não escrevas código. Responde APENAS JSON válido compatível com o contrato fornecido. generic_fallback_allowed=false e approved_for_code=false são obrigatórios.'''

def compact_schema():
    return {
        'required': schema['required'],
        'sensory_channels_required': schema['properties']['sensory_channels']['required'],
        'participant_verbs': {'minItems': 3, 'maxItems': 7, 'unique': True},
        'session_variation_minItems': 4,
        'generic_fallback_allowed': False,
        'approved_for_code': False,
    }

def validate(bp, expected):
    missing = [k for k in schema['required'] if k not in bp]
    if missing:
        raise ValueError('missing:' + ','.join(missing))
    if bp.get('id') != expected['id']:
        raise ValueError('id_mismatch')
    if bp.get('generic_fallback_allowed') is not False:
        raise ValueError('generic_fallback')
    if bp.get('approved_for_code') is not False:
        raise ValueError('approved_for_code')
    verbs = bp.get('participant_verbs') or []
    if not (3 <= len(verbs) <= 7) or len(set(map(str.lower, verbs))) != len(verbs):
        raise ValueError('participant_verbs')
    if len(bp.get('session_variation') or []) < 4:
        raise ValueError('session_variation')
    channels = bp.get('sensory_channels') or {}
    for key in schema['properties']['sensory_channels']['required']:
        if key not in channels:
            raise ValueError('sensory_channel:' + key)
    if not bp.get('sensory_signature_id'):
        raise ValueError('sensory_signature_id')
    return bp

def request_json(payload, timeout=180):
    data = json.dumps(payload, ensure_ascii=False).encode('utf-8')
    req = urllib.request.Request(API, data=data, method='POST', headers={
        'Authorization': 'Bearer ' + api_key,
        'Content-Type': 'application/json',
    })
    with urllib.request.urlopen(req, timeout=timeout) as response:
        body = json.loads(response.read())
    return json.loads(body['choices'][0]['message']['content'])

def compose(entry):
    task = {
        'task': 'Criar UM blueprint digital multissensorial excepcional e específico desta curadoria, antes de código.',
        'catalog_entry': entry,
        'constitution': constitution,
        'source_corpus': corpus,
        'schema_contract': compact_schema(),
        'extra_requirements': [
            'Usa o CORPUS como fonte de autoridade; o catálogo não autoriza inventar uma experiência inteira.',
            'Desenha limiar -> chamada -> gesto -> resposta viva -> desvio -> aprofundamento sensorial -> escolha/acaso/silêncio -> aparição -> devolução -> latência.',
            'Usa pelo menos 4 canais sensoriais de modo significativo.',
            'Olfacto e paladar só podem aparecer como evocação digital, nunca como output físico fingido.',
            'Define pelo menos uma tradução cruzada entre sentidos.',
            'Define quatro ou mais variações entre sessões sem perfil psicológico nem vigilância.',
            'Explica por que esta experiência não pode ser confundida com as outras 48.',
            'Não escolhas tecnologia, biblioteca, API ou componente.',
            'Quando a fonte não sustentar um detalhe, regista a lacuna em questions_for_eduardo ou improvement_proposals.',
        ],
    }
    payload = {
        'model': MODEL,
        'temperature': 0.35,
        'response_format': {'type': 'json_object'},
        'messages': [
            {'role': 'system', 'content': system},
            {'role': 'user', 'content': json.dumps(task, ensure_ascii=False)},
        ],
    }
    last = None
    for attempt in range(6):
        try:
            return validate(request_json(payload), entry)
        except Exception as exc:
            last = exc
            time.sleep(min(30, 2 ** attempt + random.random() * 2))
    raise RuntimeError(f"{entry['id']}:{type(last).__name__}:{last}")

results = {}
failures = []
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as executor:
    futures = {executor.submit(compose, entry): entry for entry in entries}
    for future in concurrent.futures.as_completed(futures):
        entry = futures[future]
        try:
            bp = future.result()
            results[entry['id']] = bp
            path = OUT / f"{int(entry['ordem']):02d}_{entry['id']}.json"
            path.write_text(json.dumps(bp, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
            print('BLUEPRINT_GENERATED=' + entry['id'], flush=True)
        except Exception as exc:
            failures.append(str(exc))
            print('BLUEPRINT_FAILED=' + entry['id'] + ' ' + str(exc), flush=True)

if failures:
    (OUT / 'FAILURES.txt').write_text('\n'.join(failures) + '\n', encoding='utf-8')
    raise SystemExit('BLUEPRINT_FAILURES=' + str(len(failures)))

signatures = [bp['sensory_signature_id'] for bp in results.values()]
if len(signatures) != 49 or len(set(signatures)) != 49:
    raise SystemExit('SENSORY_SIGNATURE_COLLISION')

fingerprints = []
for entry in entries:
    bp = results[entry['id']]
    fingerprints.append({
        'id': bp['id'],
        'canonical_name': bp['canonical_name'],
        'sensory_signature_id': bp['sensory_signature_id'],
        'participant_verbs': bp['participant_verbs'],
        'cross_sensory_translation': bp['cross_sensory_translation'],
        'silence_or_absence': bp['silence_or_absence'],
        'surprise_or_indeterminacy': bp['surprise_or_indeterminacy'],
        'distinctiveness': bp['distinctiveness'],
    })

council_payload = {
    'model': MODEL,
    'temperature': 0,
    'response_format': {'type': 'json_object'},
    'messages': [
        {
            'role': 'system',
            'content': 'És o Conselho de Diferenciação Sensorial MILK. Audita 49 impressões digitais de experiências. Detecta repetições de mecânica disfarçadas por texto, excesso de click/drag/tap, som decorativo, ausência de corpo, ausência de silêncio, falta de território quando esperado, experiência reduzida a formulário/quiz/chat, e qualquer par que pareça a mesma interface com copy diferente. NÃO reescrevas os blueprints. Responde JSON com status PASS ou REVIEW, duplicate_risks, weak_sensory_risks e author_questions.'
        },
        {'role': 'user', 'content': json.dumps(fingerprints, ensure_ascii=False)},
    ],
}
council = request_json(council_payload)
(OUT / '00_SENSORY_COUNCIL.json').write_text(json.dumps(council, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

index = {
    'state': 'AUTHOR_REVIEW_REQUIRED',
    'approved_for_code': False,
    'count': 49,
    'unique_sensory_signatures': 49,
    'council_status': council.get('status'),
    'entries': [
        {'ordem': entry['ordem'], 'id': entry['id'], 'nome': entry['nome'], 'file': f"{int(entry['ordem']):02d}_{entry['id']}.json"}
        for entry in entries
    ],
}
(OUT / '00_INDEX.json').write_text(json.dumps(index, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print('MULTISENSORY_BLUEPRINTS=49')
print('UNIQUE_SENSORY_SIGNATURES=49')
print('APPROVED_FOR_CODE=0')
print('SENSORY_COUNCIL_STATUS=' + str(council.get('status')))
