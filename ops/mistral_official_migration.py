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
                time.sleep(2**i); continue
            raise
        except Exception as e:
            last=e
            if i<retries-1:
                time.sleep(2**i); continue
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
            if x.get('type')=='message.output':
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

agents=get_agents()
agent=next((a for a in agents if a.get('name')=='ZecaBrito'),None)
if agent is None:
    raise SystemExit('ZecaBrito agent missing')
agent_id=agent['id']
current=req('GET','/v1/agents/'+agent_id)
instructions=(current.get('instructions') or '')
marker='ATLAS OFFICIAL MIGRATION EXECUTION'
if marker not in instructions:
    instructions += '''\n\nATLAS OFFICIAL MIGRATION EXECUTION:\nYou are an executor, not an adviser. Use the connected Gmail and Google Drive tools plus code interpreter to execute preservation-safe migration operations. Gmail is read-only. Google Drive is read-only. Never reveal passwords, API keys, secure-link fragments, recovery codes, personal data, or raw credential messages in output. Never downgrade TLS verification. Target writes are allowed only inside the dedicated PTServidor migration account/private root created for Atlas. Verify every remote write by remote size and download-back SHA-256. If a platform tool prevents a network operation, return the exact technical limitation and do not claim success.'''

patch={
    'instructions': instructions,
    'tools': [
        {'type':'connector','connector_id':'google_drive'},
        {'type':'connector','connector_id':'gmail'},
        {'type':'web_search'},
        {'type':'code_interpreter'}
    ],
    'metadata': {'project':'Atlas Vivo MILK','mode':'OFFICIAL_MIGRATION_EXECUTOR','zero_learning':'true','role':'migration_executor'}
}
req('PATCH','/v1/agents/'+agent_id,patch)

prompt='''EXECUTE NOW — ATLAS VIVO MILK OFFICIAL MIGRATION CANARY.

Use only official connected capabilities. Do not ask the user for anything.

1) In Gmail, read the latest messages in PTServidor ticket #882572. Find the dedicated Atlas migration FTP/FTPS account created by PTServidor and the most recent valid credential delivery or credential-reset message. Treat Gmail as read-only. Never echo the credential, secure URL, fragment or message body.
2) Confirm from the PTServidor messages that FTPS explicit on port 21 is supported. Use strict TLS verification. Try the official host from support; if certificate hostname validation fails, use the documented cPanel server hostname troi.ptservidor.net with the same dedicated account, still with strict verification. Never use plaintext FTP.
3) In connected Google Drive, locate ATLAS_CONTROLO_VIVO by exact title. Read/export a deterministic small read-only canary representation containing its document ID, revision/modified metadata if connector supplies it, and a short canonical text fragment. Do not modify the Drive. If the connector permits direct binary/export bytes, use those; otherwise create a UTF-8 JSON canary with provenance fields and source status DERIVED_CANARY_FROM_READ_ONLY_SOURCE.
4) In code interpreter, compute local SHA-256 and byte length. Connect to the dedicated PTServidor private migration root. Upload to canary/atlas-drive-canary.json (or .bin if direct bytes). Then determine remote size, download it back, recompute SHA-256, and compare exactly.
5) Only if byte length and SHA-256 match, continue immediately with the first preservation batch of up to 10 small Drive files/doc exports, each with checkpoint record and download-back SHA-256. Do not delete/move/alter Drive originals. Do not touch public_html, associacaomilk.pt website files or atlas.associacaomilk.pt runtime.
6) Return ONLY a JSON object with non-secret receipt fields:
{"state":"CANARY_VERIFIED_AND_BATCH_STARTED|CANARY_FAILED|BLOCKED_BY_TOOL_CAPABILITY|CREDENTIAL_NOT_AVAILABLE","transport":"FTPS_EXPLICIT_TLS","tls_verified":true|false,"source_drive_writes":0,"target_private_writes":number,"canary":{"bytes":number,"local_sha256":"...","remote_sha256":"...","verified":true|false},"batch":{"attempted":number,"verified":number,"failed":number,"bytes":number},"blocker":"non-secret exact technical blocker or null"}
Never include credentials or secure URLs in the JSON.'''

resp=req('POST','/v1/conversations',{'agent_id':agent_id,'inputs':[{'role':'user','content':prompt}],'store':False,'handoff_execution':'server'},timeout=900,retries=3)
raw=extract_text(resp)
# Redact defensive patterns before persistence.
raw=re.sub(r'https?://\S+','[URL_REDACTED]',raw)
raw=re.sub(r'[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}','[EMAIL_REDACTED]',raw)
raw=re.sub(r'(?i)(password|senha|token|secret|credential)\s*[:=]\s*[^,}\n]+',r'\1:[REDACTED]',raw)
try:
    a=raw.find('{'); b=raw.rfind('}')
    receipt=json.loads(raw[a:b+1]) if a>=0 and b>a else {'state':'UNPARSEABLE_AGENT_RECEIPT','blocker':'agent receipt not JSON'}
except Exception:
    receipt={'state':'UNPARSEABLE_AGENT_RECEIPT','blocker':'agent receipt JSON parse failed'}
# Hard receipt sanitation.
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
# Preserve receipt but mark workflow unsuccessful when remote migration did not start.
raise SystemExit(2)
