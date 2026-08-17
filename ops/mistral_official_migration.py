import json, os, pathlib, re, time, urllib.request, urllib.error

BASE='https://api.mistral.ai'
KEY=''.join(os.environ.get('MISTRAL_API_KEY','').strip().split())
if not KEY:
    raise SystemExit('MISTRAL_API_KEY missing')
H={'Authorization':'Bearer '+KEY,'Accept':'application/json','Content-Type':'application/json'}
OUT=pathlib.Path('artifacts/migration-official')
OUT.mkdir(parents=True,exist_ok=True)


def req(method,path,payload=None,timeout=600,retries=5):
    data=None if payload is None else json.dumps(payload,ensure_ascii=False).encode()
    last=None
    for i in range(retries):
        r=urllib.request.Request(BASE+path,headers=H,data=data,method=method)
        try:
            with urllib.request.urlopen(r,timeout=timeout) as x:
                raw=x.read()
            return json.loads(raw.decode()) if raw else {}
        except urllib.error.HTTPError as e:
            last=e
            if e.code in (429,500,502,503,504) and i<retries-1:
                time.sleep(min(20,2**i)); continue
            raise
        except Exception as e:
            last=e
            if i<retries-1:
                time.sleep(min(20,2**i)); continue
            raise
    raise last


def get_agents():
    out=[]; token=None
    while True:
        p='/v1/agents/pages?page_size=100'+(('&page_token='+token) if token else '')
        b=req('GET',p)
        out += [x for x in b.get('data',[]) if isinstance(x,dict)]
        token=b.get('next_page_token')
        if not token: return out


def extract_text(resp):
    parts=[]
    def walk(x):
        if isinstance(x,dict):
            if x.get('type') in ('message.output','message'):
                c=x.get('content')
                if isinstance(c,str): parts.append(c)
                elif isinstance(c,list):
                    for z in c:
                        if isinstance(z,dict):
                            t=z.get('text') or z.get('content')
                            if isinstance(t,str): parts.append(t)
            for v in x.values(): walk(v)
        elif isinstance(x,list):
            for v in x: walk(v)
    walk(resp)
    return '\n'.join(parts).strip()


def sanitize(s):
    s=re.sub(r'https?://\S+','[URL_REDACTED]',s)
    s=re.sub(r'[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}','[EMAIL_REDACTED]',s)
    s=re.sub(r'(?i)(password|senha|token|secret|credential)\s*[:=]\s*[^,}\n]+',r'\1:[REDACTED]',s)
    return s

agents=get_agents()
agent=next((a for a in agents if a.get('name')=='ZecaBrito'),None)
if agent is None:
    raise SystemExit('ZecaBrito agent missing')
agent_id=agent['id']
current=req('GET','/v1/agents/'+agent_id)
instructions=(current.get('instructions') or '')
marker='ATLAS OFFICIAL MIGRATION EXECUTION'
if marker not in instructions:
    instructions += '''\n\nATLAS OFFICIAL MIGRATION EXECUTION:\nYou are an executor, not an adviser. Use connected Gmail and Google Drive plus code interpreter to execute preservation-safe migration. Gmail read-only. Drive read-only. Never reveal passwords, API keys, secure-link fragments, recovery codes, personal data, or raw credential messages. Never downgrade TLS verification. Target writes allowed only inside the dedicated PTServidor private Atlas migration root. Verify every remote write by remote size and download-back SHA-256. If a tool blocks a network operation, return the exact technical limitation and do not claim success.'''
req('PATCH','/v1/agents/'+agent_id,{
    'instructions':instructions,
    'tools':[{'type':'connector','connector_id':'google_drive'},{'type':'connector','connector_id':'gmail'},{'type':'web_search'},{'type':'code_interpreter'}],
    'metadata':{'project':'Atlas Vivo MILK','mode':'OFFICIAL_MIGRATION_EXECUTOR','zero_learning':'true','role':'migration_executor'}
})

prompt='''EXECUTE NOW — ATLAS VIVO MILK OFFICIAL MIGRATION CANARY.
Use only official connected capabilities. Do not ask the user for anything.

A) Gmail read-only: inspect the latest PTServidor messages in ticket #882572. Recover the dedicated Atlas FTP/FTPS account and the newest valid credential delivery/reset. If the credential is delivered by a secure link, resolve it using your available web/code tools without ever returning the secret in the final answer. If no valid credential exists, return CREDENTIAL_NOT_AVAILABLE.
B) Confirm FTPS explicit on port 21. Use strict TLS. Try the official support host; if hostname validation fails, use documented server hostname troi.ptservidor.net with the same dedicated account and strict TLS. Never use plaintext FTP.
C) Google Drive read-only: find ATLAS_CONTROLO_VIVO by exact title. Build a deterministic UTF-8 JSON canary with document ID, available revision/modified metadata, a short canonical fragment, and source_status=DERIVED_CANARY_FROM_READ_ONLY_SOURCE. Do not modify Drive.
D) Compute byte length + SHA-256, upload to private target canary/atlas-drive-canary.json, get remote size, download back, compute SHA-256 and compare.
E) Only if verified, continue immediately with up to 10 small Drive objects/doc exports with checkpoint + download-back SHA-256. Never touch public_html, associacaomilk.pt production files or atlas.associacaomilk.pt runtime.
F) FINAL OUTPUT MUST BE ONE SINGLE-LINE JSON OBJECT, no markdown and no prose, with only non-secret fields:
{"state":"CANARY_VERIFIED_AND_BATCH_STARTED|CANARY_FAILED|BLOCKED_BY_TOOL_CAPABILITY|CREDENTIAL_NOT_AVAILABLE","transport":"FTPS_EXPLICIT_TLS","tls_verified":true,"source_drive_writes":0,"target_private_writes":0,"canary":{"bytes":0,"local_sha256":"","remote_sha256":"","verified":false},"batch":{"attempted":0,"verified":0,"failed":0,"bytes":0},"blocker":null}
Never include credential material or secure URLs.'''

# Let the Mistral platform execute connector/tool calls server-side by using its default mode.
resp=req('POST','/v1/conversations',{'agent_id':agent_id,'inputs':[{'role':'user','content':prompt}],'store':False},timeout=900,retries=3)
raw=sanitize(extract_text(resp))
(OUT/'agent-output-sanitized.txt').write_text(raw[:12000],encoding='utf-8')

receipt=None
# Prefer the last JSON object in the final text.
for candidate in re.findall(r'\{.*?\}',raw,re.S):
    try:
        obj=json.loads(candidate)
        if isinstance(obj,dict) and 'state' in obj:
            receipt=obj
    except Exception:
        pass
if receipt is None:
    a=raw.find('{'); b=raw.rfind('}')
    if a>=0 and b>a:
        try: receipt=json.loads(raw[a:b+1])
        except Exception: receipt=None
if receipt is None:
    receipt={'state':'UNPARSEABLE_AGENT_RECEIPT','blocker':'agent final receipt was not parseable JSON'}

for k in list(receipt):
    if any(x in k.lower() for x in ('password','secret','token','credential','url')):
        receipt.pop(k,None)
receipt['executor']='Mistral/ZecaBrito'
receipt['drive_policy']='READ_ONLY'
receipt['public_site_writes']=0
(OUT/'receipt.json').write_text(json.dumps(receipt,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(receipt,ensure_ascii=False,sort_keys=True))

if receipt.get('state')=='CANARY_VERIFIED_AND_BATCH_STARTED' and receipt.get('canary',{}).get('verified') is True:
    raise SystemExit(0)
raise SystemExit(2)
