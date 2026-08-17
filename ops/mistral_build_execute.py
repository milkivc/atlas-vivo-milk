import json, os, pathlib, subprocess, urllib.request, urllib.error, time

BASE='https://api.mistral.ai'
KEY=''.join(os.environ.get('MISTRAL_API_KEY','').strip().split())
if not KEY:
    raise SystemExit('MISTRAL_API_KEY missing')
HEAD={'Authorization':'Bearer '+KEY,'Accept':'application/json','Content-Type':'application/json'}
ROOT=pathlib.Path.cwd()
ALLOWED_PREFIXES=('webapp/','ia-milk/')


def req(method,path,payload=None,timeout=300,retries=4):
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
                time.sleep(2**attempt); continue
            raise
        except Exception as e:
            last=e
            if attempt<retries-1:
                time.sleep(2**attempt); continue
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


def parse_json(raw):
    s=raw.strip()
    if s.startswith('```'):
        s=s.split('\n',1)[1]
        s=s.rsplit('```',1)[0]
    try: return json.loads(s)
    except Exception:
        a=s.find('{'); b=s.rfind('}')
        if a<0 or b<=a: raise ValueError('agent did not return JSON')
        return json.loads(s[a:b+1])


def write_files(payload):
    files=payload.get('files',{})
    if not isinstance(files,dict) or not files:
        raise ValueError('files mapping missing')
    written=[]
    for path,content in files.items():
        if not isinstance(path,str) or not path.startswith(ALLOWED_PREFIXES):
            raise ValueError('unauthorized path: '+str(path))
        if '..' in pathlib.PurePosixPath(path).parts:
            raise ValueError('path traversal denied')
        if not isinstance(content,str):
            raise ValueError('content must be string')
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

COMMON='''ATLAS VIVO MILK — EXECUÇÃO DE CÓDIGO, 17/08/2026. Tu és executor Mistral. Não produzas relatório: produz ficheiros executáveis. Regras: Drive origem read-only; não publicar; não tocar associacaomilk.pt; branch de segurança; COSMICOXES != Cosmic Flow; camada invisível nunca exposta; gate Nuno >=13, consentimento, anonimato/pseudónimo/nome, retirada e revisão humana; PT-PT; RGPD; WCAG 2.2 AA; proveniência; sem conteúdo territorial inventado; dados ausentes ficam explicitamente PENDENTE/NOT_VERIFIED. A Web App pública deve ficar desacoplada do Nextcloud em runtime para conteúdo já publicado. IA MILK é memória institucional + RAG + proveniência, não autoridade autoral. Responde SOMENTE JSON: {"files":{"caminho":"conteudo"},"tests":["..."],"state":"EXECUTED"}. Não uses caminhos fora dos prefixos autorizados.'''

web_prompt=COMMON+'''\nPREFIXO AUTORIZADO: webapp/. Constrói um primeiro corpo integral funcional da Web App Atlas com React + TypeScript + Vite, MapLibre e Three.js quando justificável. Inclui package.json, tsconfig, Vite config, index.html, src/main.tsx, App, estilos, domínio de dados, sequência pública canónica COSMICOXES → Copérnico/globo → Cosmic Flow → selo Atlas → Fucô/Galeria → MILKs territoriais → inflar → partículas → papel rasgado → brincar/convite/tentar a sorte → Nuno; componentes mínimos para Galeria Diletante, Crónicas Cãotadas por Fucô, MILK territorial e contribuição Nuno; adaptador de API; tipos de freguesia/município/festa; estados PENDENTE/tem_conteudo_curatorial; acessibilidade; testes unitários de invariantes e README técnico. Não inventar dados reais; criar fixtures marcadas NOT_VERIFIED. O build deve passar npm test e npm run build.'''

ia_prompt=COMMON+'''\nPREFIXO AUTORIZADO: ia-milk/. Constrói a engenharia funcional da IA MILK com RAG obrigatório antes de fine-tuning: schemas para source registry, fragmentos, provenance e estados epistémicos source_fact/observation/quotation/inference/interpretation/counter_interpretation/hypothesis/community_testimony/model_candidate; pipeline Python puro para ingestão de corpus exportado, chunking determinístico, hashing SHA-256, índice lexical local de fallback, contratos para embeddings Mistral sem incluir segredo, retrieval, citations, memória episódica/procedural e receipts; router de funções para curadoria, territorial, migração e Web App; evals de não-invenção, separação COSMICOXES/Cosmic Flow, gates Nuno e camada invisível; README de treino que distingue RAG, avaliação e futuro fine-tuning. Inclui unittest executável sem dependências externas obrigatórias. Nunca treinar com credenciais/dados sensíveis; classificar/bloquear esses fragmentos.'''

results={}
for name,prompt in ((web_name,web_prompt),(ia_name,ia_prompt)):
    raw=run_agent(by[name]['id'],prompt)
    payload=parse_json(raw)
    results[name]={'written':write_files(payload),'tests':payload.get('tests',[]),'state':payload.get('state')}

# Hard safety checks before any commit.
for p in ROOT.joinpath('webapp').rglob('*'):
    if p.is_file() and p.stat().st_size>2_000_000: raise SystemExit('oversized generated file '+str(p))
for p in ROOT.joinpath('ia-milk').rglob('*'):
    if p.is_file() and p.stat().st_size>2_000_000: raise SystemExit('oversized generated file '+str(p))

pathlib.Path('artifacts').mkdir(exist_ok=True)
pathlib.Path('artifacts/mistral-build-receipt.json').write_text(json.dumps({'state':'MISTRAL_WEBAPP_IA_MILK_CODE_GENERATED','results':results,'external_publication_writes':0,'drive_writes':0},ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(results,ensure_ascii=False))
