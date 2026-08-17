import json, os, pathlib, re, time, urllib.request, urllib.error

BASE='https://api.mistral.ai'
KEY=''.join(os.environ.get('MISTRAL_API_KEY','').strip().split())
if not KEY: raise SystemExit('MISTRAL_API_KEY missing')
H={'Authorization':'Bearer '+KEY,'Accept':'application/json','Content-Type':'application/json'}
OUT=pathlib.Path('artifacts/migration-official-v2'); OUT.mkdir(parents=True,exist_ok=True)

def req(method,path,payload=None,timeout=900,retries=5):
    data=None if payload is None else json.dumps(payload,ensure_ascii=False).encode()
    last=None
    for i in range(retries):
        r=urllib.request.Request(BASE+path,headers=H,data=data,method=method)
        try:
            with urllib.request.urlopen(r,timeout=timeout) as x: raw=x.read()
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

def agents():
    out=[]; token=None
    while True:
        p='/v1/agents/pages?page_size=100'+(('&page_token='+token) if token else '')
        b=req('GET',p); out += [x for x in b.get('data',[]) if isinstance(x,dict)]
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
    walk(resp); return '\n'.join(parts).strip()

def sanitize(s):
    s=re.sub(r'https?://\S+','[URL_REDACTED]',s)
    s=re.sub(r'[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}','[EMAIL_REDACTED]',s)
    s=re.sub(r'(?i)(password|senha|token|secret|credential)\s*[:=]\s*[^,}\n]+',r'\1:[REDACTED]',s)
    return s

by={a.get('name'):a for a in agents()}
agent=by.get('ZecaBrito')
if not agent: raise SystemExit('ZecaBrito agent missing')
agent_id=agent['id']
current=req('GET','/v1/agents/'+agent_id)
instructions=(current.get('instructions') or '')
if 'ATLAS OFFICIAL MIGRATION EXECUTION V2' not in instructions:
    instructions += '''\n\nATLAS OFFICIAL MIGRATION EXECUTION V2:\nExecute, do not advise. Gmail and Drive are read-only sources. Never expose or persist credentials. Strict TLS only. Target writes only in PTServidor private Atlas migration root. Every target write requires remote size plus download-back SHA-256 verification. Account existence is already confirmed in Gmail message 1a01079056e1d484.'''
req('PATCH','/v1/agents/'+agent_id,{
    'instructions':instructions,
    'tools':[{'type':'connector','connector_id':'google_drive'},{'type':'connector','connector_id':'gmail'},{'type':'web_search'},{'type':'code_interpreter'}],
    'metadata':{'project':'Atlas Vivo MILK','mode':'OFFICIAL_MIGRATION_EXECUTOR_V2','zero_learning':'true','role':'migration_executor'}
})

prompt='''EXECUTE IMMEDIATELY — ATLAS VIVO MILK DRIVE → PTSERVIDOR CANARY + FIRST BATCH.

FACTS ALREADY VERIFIED BY THE COORDINATOR — DO NOT RE-DIAGNOSE THEM:
- Gmail message id 1a01079056e1d484 is the PTServidor support message that created the dedicated migration account.
- Private target folder: atlas_milk_private/migration.
- Host: associacaomilk.pt.
- Port: 21.
- Dedicated username: migration@associacaomilk.pt.
- That exact message contains the password only through a PTServidor secure-paste URL.
- GitHub MISTRAL_API_KEY already exists and is active; do not create any Mistral key.

EXECUTION:
1. Read Gmail message id 1a01079056e1d484 directly. Extract the secure-paste URL in memory. Resolve it with available web/code capabilities and obtain the password in volatile memory only. Never print, log, return, persist or repeat the password or secure URL.
2. Connect with explicit FTPS on port 21 and strict TLS. Use associacaomilk.pt first; if certificate hostname validation fails, retry troi.ptservidor.net with the same account and strict TLS. Never use plaintext FTP and never disable certificate validation.
3. Read Google Drive only. Locate ATLAS_CONTROLO_VIVO. Build a deterministic UTF-8 JSON canary containing source id, available modified/revision metadata, a short canonical text fragment and source_status=DERIVED_CANARY_FROM_READ_ONLY_SOURCE. Do not modify Drive.
4. Compute local byte length and SHA-256. Upload only under the dedicated private account to canary/atlas-drive-canary.json. Obtain remote size. Download it back. Compute SHA-256. Require exact byte length and hash equality.
5. Only after exact verification, continue immediately with up to 10 small Drive files/Google-native exports. For each: preserve source; create checkpoint; upload inside private migration root; verify via download-back SHA-256; no deletion/move/source modification.
6. Never touch public_html, associacaomilk.pt production files, or atlas.associacaomilk.pt runtime in this migration step.
7. If secure-paste decryption itself is impossible with your available tools, return BLOCKED_BY_TOOL_CAPABILITY with the exact non-secret technical reason. Do NOT return CREDENTIAL_NOT_AVAILABLE because the credential delivery is confirmed to exist.
8. Return EXACTLY one single-line JSON object, no markdown, no prose, no secret values:
{"state":"CANARY_VERIFIED_AND_BATCH_STARTED|CANARY_FAILED|BLOCKED_BY_TOOL_CAPABILITY","transport":"FTPS_EXPLICIT_TLS","tls_verified":true,"source_drive_writes":0,"target_private_writes":0,"canary":{"bytes":0,"local_sha256":"","remote_sha256":"","verified":false},"batch":{"attempted":0,"verified":0,"failed":0,"bytes":0},"blocker":null}
'''
resp=req('POST','/v1/conversations',{'agent_id':agent_id,'inputs':[{'role':'user','content':prompt}],'store':False},timeout=900,retries=3)
raw=sanitize(extract_text(resp))
(OUT/'agent-output-sanitized.txt').write_text(raw[:16000],encoding='utf-8')
receipt=None
a=raw.find('{'); b=raw.rfind('}')
if a>=0 and b>a:
    try: receipt=json.loads(raw[a:b+1])
    except Exception: receipt=None
if receipt is None:
    receipt={'state':'UNPARSEABLE_AGENT_RECEIPT','blocker':'Mistral final receipt was not valid JSON'}
for k in list(receipt):
    if any(x in k.lower() for x in ('password','secret','token','credential','url')): receipt.pop(k,None)
receipt['executor']='Mistral/ZecaBrito'
receipt['drive_policy']='READ_ONLY'
receipt['public_site_writes']=0
(OUT/'receipt.json').write_text(json.dumps(receipt,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(receipt,ensure_ascii=False,sort_keys=True))
if receipt.get('state')=='CANARY_VERIFIED_AND_BATCH_STARTED' and receipt.get('canary',{}).get('verified') is True:
    raise SystemExit(0)
raise SystemExit(2)
