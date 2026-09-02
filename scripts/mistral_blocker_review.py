import json, os, pathlib, urllib.request

root = pathlib.Path(__file__).resolve().parents[1]
key = os.environ.get('MISTRAL_API_KEY','').strip()
if not key:
    raise SystemExit('MISTRAL_API_KEY_MISSING')

diff = pathlib.Path('/tmp/atlas-opening.diff').read_text(encoding='utf-8')
lock = (root/'docs/agent-input/OPENING_CANONICAL_LOCK.md').read_text(encoding='utf-8')

roles = [
    ('dramaturgy_guard', 'Verifica apenas fidelidade PRETO → SELO → TOQUE → COSMICOXES e ausência de homepage/menu antes do gesto.'),
    ('runtime_accessibility', 'Verifica teclado, pointer/touch, foco, reduced-motion, loops/eventos e regressões de runtime.'),
    ('public_boundary', 'Verifica que a alteração não introduz dados inventados, segredos, camada não pública, tracking, publicação ou ligações proibidas.')
]

reviews=[]
failed=[]
for role, scope in roles:
    payload={
        'model':'mistral-medium-latest',
        'temperature':0.0,
        'response_format':{'type':'json_object'},
        'messages':[
            {'role':'system','content':f'És o agente Mistral {role} da Associação MILK. {scope} Só podes bloquear com evidência literal numa linha adicionada do DIFF, ligada à fonte bloqueada. Não inventes requisitos. Responde JSON estrito com pass(boolean), blockers(array), repairs(array), checks(array).'},
            {'role':'user','content':'FONTE CANÓNICA BLOQUEADA:\n'+lock+'\n\nDIFF EXACTO:\n'+diff}
        ]
    }
    req=urllib.request.Request('https://api.mistral.ai/v1/chat/completions',data=json.dumps(payload).encode(),method='POST',headers={'Authorization':'Bearer '+key,'Content-Type':'application/json'})
    with urllib.request.urlopen(req,timeout=240) as r:
        body=json.loads(r.read())
    review=json.loads(body['choices'][0]['message']['content'])
    review['role']=role
    reviews.append(review)
    if review.get('pass') is not True or (review.get('blockers') or []):
        failed.append(role)

out=pathlib.Path('/tmp/mistral-blocker-reviews.json')
out.write_text(json.dumps(reviews,ensure_ascii=False,indent=2),encoding='utf-8')
for r in reviews:
    print('MISTRAL_BLOCKER_REVIEW='+json.dumps(r,ensure_ascii=False))
if failed:
    raise SystemExit('MISTRAL_BLOCKERS='+','.join(failed))
print('MISTRAL_BLOCKER_COUNCIL=3_OK')
