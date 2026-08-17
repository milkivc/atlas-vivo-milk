import json, os, pathlib, urllib.request, urllib.error, time, re

BASE='https://api.mistral.ai'
KEY=''.join(os.environ.get('MISTRAL_API_KEY','').strip().split())
if not KEY:
    raise SystemExit('MISTRAL_API_KEY missing')
HEAD={'Authorization':'Bearer '+KEY,'Accept':'application/json','Content-Type':'application/json'}
ROOT=pathlib.Path.cwd()
ALLOWED_PREFIXES=('webapp/','ia-milk/')


def req(method,path,payload=None,timeout=240,retries=5):
    data=None if payload is None else json.dumps(payload,ensure_ascii=False).encode()
    last=None
    for attempt in range(retries):
        r=urllib.request.Request(BASE+path,headers=HEAD,data=data,method=method)
        try:
            with urllib.request.urlopen(r,timeout=timeout) as x:
                raw=x.read()
            return json.loads(raw.decode()) if raw else {}
        except urllib.error.HTTPError as e:
            last=e
            if e.code in (429,500,502,503,504) and attempt<retries-1:
                time.sleep(min(20,2**attempt)); continue
            raise
        except Exception as e:
            last=e
            if attempt<retries-1:
                time.sleep(min(20,2**attempt)); continue
            raise
    raise last


def agents():
    out=[]; token=None
    while True:
        p='/v1/agents/pages?page_size=100'+(('&page_token='+token) if token else '')
        b=req('GET',p); out += [x for x in b.get('data',[]) if isinstance(x,dict)]
        token=b.get('next_page_token')
        if not token: return out


def text(resp):
    z=[]
    for o in resp.get('outputs',[]) or []:
        if o.get('type')=='message.output':
            c=o.get('content')
            if isinstance(c,str): z.append(c)
            elif isinstance(c,list):
                for p in c:
                    if isinstance(p,dict): z.append(str(p.get('text') or p.get('content') or ''))
    return '\n'.join(x for x in z if x).strip()


def run_agent(agent_id,prompt):
    r=req('POST','/v1/conversations',{'agent_id':agent_id,'inputs':[{'role':'user','content':prompt}],'store':False,'handoff_execution':'client'})
    return text(r)


def parse_file_blocks(raw):
    pat=re.compile(r'===FILE ([^\r\n=]+)===\r?\n(.*?)\r?\n===END FILE===',re.S)
    matches=pat.findall(raw)
    if not matches:
        raise ValueError('agent did not return file blocks')
    return {path.strip():content for path,content in matches}


def write_files(files):
    written=[]
    for path,content in files.items():
        if not path.startswith(ALLOWED_PREFIXES):
            raise ValueError('unauthorized path: '+path)
        if '..' in pathlib.PurePosixPath(path).parts:
            raise ValueError('path traversal denied')
        p=ROOT/path
        p.parent.mkdir(parents=True,exist_ok=True)
        p.write_text(content,encoding='utf-8')
        written.append(path)
    return written


by={a.get('name'):a for a in agents()}
web_name='MILK Research Decoder — Web App'
ia_name='MILK Sovereign Orchestrator'
if web_name not in by or ia_name not in by:
    raise SystemExit('required Mistral agents missing')

COMMON='''ATLAS VIVO MILK — EXECUÇÃO DE CÓDIGO 17/08/2026. Tu és executor Mistral. Produz apenas ficheiros executáveis, sem relatório. Drive origem read-only; não publicar; não tocar associacaomilk.pt; branch de segurança; COSMICOXES != Cosmic Flow; camada invisível nunca exposta; gate Nuno >=13 com consentimento, anonimato/pseudónimo/nome, retirada e revisão humana; PT-PT; RGPD; WCAG 2.2 AA; proveniência; sem conteúdo territorial inventado; ausências=PENDENTE/NOT_VERIFIED. Nextcloud é privado e não pode ser gargalo do runtime público. IA MILK é memória institucional + RAG + proveniência, não autoridade autoral. FORMATO: ===FILE caminho===, conteúdo verbatim, ===END FILE===. Sem markdown fences nem texto fora dos blocos.'''

batches=[
    (web_name, COMMON+'''\nPREFIXO webapp/. LOTE WEB-1. Cria SOMENTE: webapp/package.json, webapp/tsconfig.json, webapp/vite.config.ts, webapp/index.html, webapp/src/main.tsx, webapp/src/domain.ts. React+TypeScript+Vite. domain.ts deve modelar distrito→concelho→freguesia, festas, estado PENDENTE, tem_conteudo_curatorial, proveniência e NOT_VERIFIED. package scripts: test e build.'''),
    (web_name, COMMON+'''\nPREFIXO webapp/. LOTE WEB-2. Cria SOMENTE: webapp/src/App.tsx, webapp/src/styles.css, webapp/src/sequence.ts, webapp/src/components/AtlasStage.tsx, webapp/src/components/NunoContribution.tsx. Implementa a sequência pública canónica COSMICOXES → Copérnico/globo → Cosmic Flow → selo Atlas → Fucô/Galeria → MILKs territoriais → inflar → partículas → papel rasgado → brincar/convite/tentar a sorte → Nuno. Não inventa dados reais. A camada invisível não aparece.'''),
    (web_name, COMMON+'''\nPREFIXO webapp/. LOTE WEB-3. Cria SOMENTE: webapp/src/api.ts, webapp/src/fixtures.ts, webapp/src/components/GaleriaDiletante.tsx, webapp/src/components/CronicasFuco.tsx, webapp/src/components/MilkTerritorial.tsx, webapp/src/invariants.test.ts, webapp/README.md. Fixtures marcadas NOT_VERIFIED. Testes devem confirmar COSMICOXES != Cosmic Flow, gate Nuno >=13 e nenhum campo invisível público.'''),
    (ia_name, COMMON+'''\nPREFIXO ia-milk/. LOTE IA-1. Cria SOMENTE: ia-milk/models.py, ia-milk/provenance.py, ia-milk/security.py, ia-milk/chunking.py, ia-milk/test_core.py. Python 3.12 puro. Estados epistémicos: source_fact, observation, quotation, inference, interpretation, counter_interpretation, hypothesis, community_testimony, model_candidate. Bloquear credenciais/dados sensíveis do corpus de treino.'''),
    (ia_name, COMMON+'''\nPREFIXO ia-milk/. LOTE IA-2. Cria SOMENTE: ia-milk/index.py, ia-milk/retrieval.py, ia-milk/mistral_embeddings.py, ia-milk/ingest.py, ia-milk/test_rag.py. Implementa RAG obrigatório: ingestão, chunking determinístico, SHA-256, índice lexical local de fallback, contrato opcional para embeddings Mistral via variável de ambiente sem segredo em código, retrieval com citações/proveniência.'''),
    (ia_name, COMMON+'''\nPREFIXO ia-milk/. LOTE IA-3. Cria SOMENTE: ia-milk/memory.py, ia-milk/router.py, ia-milk/evals.py, ia-milk/test_evals.py, ia-milk/README.md. Memória episódica/procedural e receipts. Router para funções curatorial, territorial, migração e Web App. Evals de não-invenção, separação COSMICOXES/Cosmic Flow, gate Nuno, camada invisível e preservação de origem. README distingue RAG, avaliações e futuro fine-tuning; não declarar fine-tuning executado.''')
]

results=[]
errors=[]
for idx,(name,prompt) in enumerate(batches,1):
    try:
        raw=run_agent(by[name]['id'],prompt)
        files=parse_file_blocks(raw)
        written=write_files(files)
        results.append({'batch':idx,'agent':name,'written':written,'state':'EXECUTED'})
    except Exception as e:
        errors.append({'batch':idx,'agent':name,'error_type':type(e).__name__})
    pathlib.Path('artifacts').mkdir(exist_ok=True)
    pathlib.Path('artifacts/mistral-build-receipt.json').write_text(json.dumps({'state':'MISTRAL_CODE_BATCHES_RUNNING','results':results,'errors':errors,'external_publication_writes':0,'drive_writes':0},ensure_ascii=False,indent=2),encoding='utf-8')

for folder in ('webapp','ia-milk'):
    root=ROOT/folder
    if root.exists():
        for p in root.rglob('*'):
            if p.is_file() and p.stat().st_size>2_000_000:
                raise SystemExit('oversized generated file '+str(p))

state='MISTRAL_WEBAPP_IA_MILK_CODE_GENERATED_PARTIAL' if errors else 'MISTRAL_WEBAPP_IA_MILK_CODE_GENERATED'
receipt={'state':state,'results':results,'errors':errors,'external_publication_writes':0,'drive_writes':0}
pathlib.Path('artifacts/mistral-build-receipt.json').write_text(json.dumps(receipt,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'state':state,'successful_batches':len(results),'failed_batches':len(errors)},ensure_ascii=False))

if not (ROOT/'webapp/package.json').exists() or not (ROOT/'ia-milk/models.py').exists():
    raise SystemExit('core generation incomplete')
