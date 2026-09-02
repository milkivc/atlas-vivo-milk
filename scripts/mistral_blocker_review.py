import json, os, pathlib, urllib.request

root = pathlib.Path(__file__).resolve().parents[1]
key = os.environ.get('MISTRAL_API_KEY','').strip()
if not key:
    raise SystemExit('MISTRAL_API_KEY_MISSING')

diff = pathlib.Path('/tmp/atlas-opening.diff').read_text(encoding='utf-8')
lock = (root/'docs/agent-input/OPENING_CANONICAL_LOCK.md').read_text(encoding='utf-8')
index = (root/'deploy/atlas-public/index.html').read_text(encoding='utf-8')
atlas = (root/'deploy/atlas-public/atlas.js').read_text(encoding='utf-8')

roles = [
    ('dramaturgy_guard', 'Verifica apenas fidelidade PRETO → SELO → TOQUE → COSMICOXES e ausência de homepage/menu antes do gesto.'),
    ('runtime_accessibility', 'Verifica teclado, pointer/touch, foco, reduced-motion, loops/eventos e regressões de runtime.'),
    ('public_boundary', 'Verifica que a alteração não introduz dados inventados, segredos, camada não pública, tracking, publicação ou ligações proibidas.')
]

facts = '''FACTOS DE RUNTIME QUE TENS DE RESPEITAR:
- `hidden` oculta um elemento, não o remove do DOM; querySelector continua a encontrá-lo.
- `atlas.js` é carregado por `<script type="module" ...>` no final do `<body>`; não declares que os elementos anteriores ainda não existem sem prova literal em contrário.
- um `<button>` nativo com listener `click` é activável por pointer/touch e por Enter/Espaço no teclado; não exijas um keydown duplicado.
- `assets/selo-atlas.png` já é um asset versionado e o HTML já contém preload desse asset; não bloqueies por hipótese de asset inexistente sem evidência concreta.
- uma guarda `requireElement()` que falha explicitamente se um selector obrigatório estiver ausente é uma defesa válida; não bloqueies por possibilidade abstracta de null quando essa guarda existe.
- `:focus-visible` pode coexistir com `:focus`; não inventes incompatibilidades sem evidência.
'''

reviews=[]
failed=[]
for role, scope in roles:
    payload={
        'model':'mistral-medium-latest',
        'temperature':0.0,
        'response_format':{'type':'json_object'},
        'messages':[
            {'role':'system','content':f'És o agente Mistral {role} da Associação MILK. {scope} Só podes bloquear com evidência literal numa linha adicionada do DIFF, ligada à fonte bloqueada, e sem contradizer os FACTOS DE RUNTIME fornecidos. Não inventes requisitos nem riscos hipotéticos. Responde JSON estrito com pass(boolean), blockers(array), repairs(array), checks(array).'},
            {'role':'user','content':'FONTE CANÓNICA BLOQUEADA:\n'+lock+'\n\n'+facts+'\nINDEX ACTUAL:\n'+index+'\n\nATLAS.JS ACTUAL:\n'+atlas+'\n\nDIFF EXACTO:\n'+diff}
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
