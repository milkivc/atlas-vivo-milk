import json, os, pathlib, time, urllib.error, urllib.request

BASE='https://api.mistral.ai'
KEY=''.join(os.environ.get('MISTRAL_API_KEY','').strip().split())
if not KEY: raise SystemExit('MISTRAL_API_KEY missing')
HEAD={'Authorization':'Bearer '+KEY,'Accept':'application/json','Content-Type':'application/json'}


def req(method,path,payload=None,timeout=240,retries=4):
    data=None if payload is None else json.dumps(payload,ensure_ascii=False).encode()
    last=None
    for attempt in range(retries):
        try:
            r=urllib.request.Request(BASE+path,headers=HEAD,data=data,method=method)
            with urllib.request.urlopen(r,timeout=timeout) as x: raw=x.read()
            return json.loads(raw.decode()) if raw else {}
        except urllib.error.HTTPError as exc:
            last=exc
            if exc.code not in (429,500,502,503,504) or attempt==retries-1:
                raise
        except Exception as exc:
            last=exc
            if attempt==retries-1: raise
        time.sleep(2**attempt)
    raise last


def agents():
    out=[]; token=None; seen=set()
    while True:
        p='/v1/agents/pages?page_size=100'+(('&page_token='+token) if token else '')
        b=req('GET',p); out += [x for x in b.get('data',[]) if isinstance(x,dict)]
        token=b.get('next_page_token')
        if not token: return out
        if token in seen: raise RuntimeError('repeated page token')
        seen.add(token)


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


def run(agent_id,prompt):
    r=req('POST','/v1/conversations',{'agent_id':agent_id,'inputs':[{'role':'user','content':prompt}],'store':False,'handoff_execution':'client'})
    return text(r),r


by={a.get('name'):a for a in agents()}
roles=['MILK Sovereign Orchestrator','MILK Drive Curator — Read Only','MILK Research Decoder — Web App','Arquiteto do Ecossistema','ZecaBrito','Legal','ler o drive']
miss=[r for r in roles if r not in by]
if miss: raise SystemExit('missing agents: '+', '.join(miss))

mission='''ATLAS VIVO MILK — EXECUÇÃO SOBERANA 2026-08-17
O utilizador ordenou execução, não aconselhamento. Mistral é executor; ChatGPT apenas coordena/audita.
Prioridades simultâneas:
1) recuperar integralmente orientações, arquitectura, curadorias, dinâmicas e decisões já documentadas, sem inventar lacunas;
2) preparar e executar pela primeira rota tecnicamente disponível a migração preservativa Drive→PTServidor/Nextcloud, mantendo Drive origem read-only, fora da webroot, com checkpoint, tamanho e hash/download-back antes de declarar migração iniciada;
3) usar capacidades já documentadas do cPanel associ16: Manage API Tokens/UAPI, FTP Accounts, Web Disk/WebDAV, File Manager, Git Version Control, Softaculous/Nextcloud, Application Manager/Passenger, Cron, JetBackup, bases de dados, SSL e subdomínio atlas.associacaomilk.pt;
4) construir integralmente a Web App Atlas na branch de segurança, preservar COSMICOXES != Cosmic Flow, sequência pública canónica, gate Nuno ≥13/consentimento/revisão humana, camada invisível privada;
5) integrar IA MILK em memória/proveniência/recibos; Nextcloud como corpus soberano/staging/versionamento/rollback, nunca gargalo do runtime público;
6) preservar interoperabilidade e identidade: Software Heritage/SWHID, CodeMeta, ORCID, DataCite/Zenodo, IGAC, Codeberg/Forgejo após estabilidade;
7) procurar alternativa técnica antes de qualquer blocker. Suporte externo é último recurso.
Cada agente deve devolver: FACTS, EXECUTABLE_ACTIONS, ACTIONS_ALREADY_POSSIBLE_WITH_AVAILABLE_CAPABILITIES, REQUIRED_TOOL_CALLS, TESTS, RECEIPTS_EXPECTED, RISKS, BLOCKER_ONLY_IF_ALL_ROUTES_EXHAUSTED, NEXT_ACTION. Não inventar execução remota.
'''

out=pathlib.Path('artifacts/sovereign-execution'); out.mkdir(parents=True,exist_ok=True)
assign={
'MILK Drive Curator — Read Only': mission+'\nTarefa: recuperar e reconciliar corpus/Drive em leitura, inventários, instruções e lacunas, indicando exactamente o que deve ser alimentado à IA MILK e à Web App.',
'MILK Research Decoder — Web App': mission+'\nTarefa: converter corpus autoral já conhecido em backlog executável da Web App/curadorias, sem inventar os conteúdos ainda não recuperados.',
'Arquiteto do Ecossistema': mission+'\nTarefa: decidir e ordenar a arquitectura executável PTServidor/cPanel/Nextcloud/Web App, privilegiando capacidades já existentes e rotas sem suporte externo.',
'ZecaBrito': mission+'\nTarefa: produzir sequência operacional concreta para canário e migração integral com checkpoints/retries/hash, mais rotas alternativas UAPI/FTP/WebDAV/Web Disk/Git/Softaculous.',
'Legal': mission+'\nTarefa: revisar apenas gates legais/RGPD/licenciamento/registro que afectem execução, usando estado NOT_VERIFIED quando faltar prova; não bloquear engenharia sem fundamento.',
'ler o drive': mission+'\nTarefa: reconstruir memória genealógica das decisões e detectar regressões/contradições entre instruções antigas e estado canónico actual.'}

results={}; agent_states={}
for name,prompt in assign.items():
    safe=name.replace('/','-').replace('—','-').replace(' ','_')
    try:
        t,_=run(by[name]['id'],prompt)
        results[name]=t
        agent_states[name]='EXECUTED'
        (out/(safe+'.md')).write_text(t,encoding='utf-8')
    except Exception as exc:
        agent_states[name]='FAILED:'+type(exc).__name__
        (out/(safe+'.error.txt')).write_text(repr(exc),encoding='utf-8')

# Persist a partial receipt BEFORE the orchestrator so completed agent work is never lost.
partial={'state':'MISTRAL_SOVEREIGN_AGENT_PANEL_EXECUTED_PARTIAL','agent_states':agent_states,'conversation_storage':False,'drive_writes':0,'external_publication_writes':0}
(out/'partial-execution-receipt.json').write_text(json.dumps(partial,indent=2,ensure_ascii=False),encoding='utf-8')

summary='\n\n'.join('## '+k+'\n'+v for k,v in results.items())
orch_prompt=mission+'''\nÉs o MILK Sovereign Orchestrator. Consolida as execuções disponíveis abaixo num PLANO DE EXECUÇÃO IMEDIATA, ordenado por dependência e paralelismo. Distingue explicitamente o que os agentes podem executar já, o que exige mediação de um conector/API, e o que ainda não tem credencial real. Não devolvas tarefas humanas se houver rota automatizável. Define os próximos tool calls exactos por sistema, critérios de sucesso e recibos.\n\n'''+summary
orch_state='NOT_RUN'
try:
    orch,_=run(by['MILK Sovereign Orchestrator']['id'],orch_prompt)
    (out/'00-orchestrator-execution-plan.md').write_text(orch,encoding='utf-8')
    orch_state='EXECUTED'
except Exception as exc:
    orch_state='FAILED:'+type(exc).__name__
    fallback='# ORCHESTRATOR FALLBACK\n\nThe six-agent outputs below remain valid execution receipts. Orchestrator API call failed after retries; do not discard completed agent work.\n\n'+summary
    (out/'00-orchestrator-fallback.md').write_text(fallback,encoding='utf-8')
    (out/'orchestrator-error.txt').write_text(repr(exc),encoding='utf-8')

receipt={
    'state':'MISTRAL_SOVEREIGN_MULTI_AGENT_EXECUTION_COMPLETED_WITH_RECEIPTS',
    'agent_states':agent_states,
    'agents_executed':[n for n,s in agent_states.items() if s=='EXECUTED'],
    'orchestrator':'MILK Sovereign Orchestrator',
    'orchestrator_state':orch_state,
    'conversation_storage':False,
    'drive_writes':0,
    'external_publication_writes':0,
    'outputs':[p.name for p in out.iterdir() if p.is_file()],
}
(out/'execution-receipt.json').write_text(json.dumps(receipt,indent=2,ensure_ascii=False),encoding='utf-8')
print(json.dumps(receipt,ensure_ascii=False,sort_keys=True))

# Only fail the job if zero execution agents succeeded; orchestrator instability alone is not allowed to erase work.
if not receipt['agents_executed']:
    raise SystemExit('no execution agents completed')
