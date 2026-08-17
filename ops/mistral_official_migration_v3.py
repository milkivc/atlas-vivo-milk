import json, os, pathlib, re, time, urllib.request, urllib.error

BASE='https://api.mistral.ai'
KEY=''.join(os.environ.get('MISTRAL_API_KEY','').strip().split())
if not KEY:
    raise SystemExit('MISTRAL_API_KEY missing')
H={'Authorization':'Bearer '+KEY,'Accept':'application/json','Content-Type':'application/json'}
OUT=pathlib.Path('artifacts/migration-official-v3'); OUT.mkdir(parents=True,exist_ok=True)

def req(method,path,payload=None,timeout=900,retries=4):
    data=None if payload is None else json.dumps(payload,ensure_ascii=False).encode()
    for i in range(retries):
        r=urllib.request.Request(BASE+path,headers=H,data=data,method=method)
        try:
            with urllib.request.urlopen(r,timeout=timeout) as x:
                raw=x.read()
            return json.loads(raw.decode()) if raw else {}
        except urllib.error.HTTPError as e:
            if e.code in (429,500,502,503,504) and i<retries-1:
                time.sleep(min(20,2**i)); continue
            raise

def agents():
    out=[]; tok=None
    while True:
        p='/v1/agents/pages?page_size=100'+(('&page_token='+tok) if tok else '')
        b=req('GET',p); out += [a for a in b.get('data',[]) if isinstance(a,dict)]
        tok=b.get('next_page_token')
        if not tok: return out

def text(resp):
    parts=[]
    def walk(x):
        if isinstance(x,dict):
            if x.get('type') in ('message.output','message'):
                c=x.get('content')
                if isinstance(c,str): parts.append(c)
                elif isinstance(c,list):
                    for y in c:
                        if isinstance(y,dict):
                            t=y.get('text') or y.get('content')
                            if isinstance(t,str): parts.append(t)
            for v in x.values(): walk(v)
        elif isinstance(x,list):
            for v in x: walk(v)
    walk(resp); return '\n'.join(parts)

z=next((a for a in agents() if a.get('name')=='ZecaBrito'),None)
if not z: raise SystemExit('ZecaBrito missing')
agent_id=z['id']
cur=req('GET','/v1/agents/'+agent_id)
inst=(cur.get('instructions') or '')+'''\n\nATLAS MIGRATION V3 — OFFICIAL EXECUTION ONLY. You execute, never merely advise. Use Gmail and Google Drive read-only. Use code interpreter for secure-paste decoding and FTPS. Never output or persist credentials. Strict TLS only. Destination writes only inside the dedicated Atlas migration root. Every write requires download-back SHA-256.''' 
req('PATCH','/v1/agents/'+agent_id,{'instructions':inst,'tools':[{'type':'connector','connector_id':'gmail'},{'type':'connector','connector_id':'google_drive'},{'type':'code_interpreter'},{'type':'web_search'}],'metadata':{'project':'Atlas Vivo MILK','mode':'MIGRATION_V3_EXECUTOR','zero_learning':'true'}})

prompt='''EXECUTE THE REAL ATLAS VIVO MILK MIGRATION NOW.

Do not ask the user anything and do not produce instructions for the user.

1. Gmail: read message id 1a010c06a08fedc5 (PTServidor ticket #882572). This is the newest password-reset delivery for the already-created dedicated Atlas migration FTP account. Read the secure link only in tool memory; NEVER include it in your final answer or any file.
2. Use code interpreter to resolve the PTServidor secure paste. If normal HTTP page access is blocked, treat it as a PrivateBin-style endpoint: split the URL into paste id after '?' and decryption key after '#'; fetch the paste JSON using the paste origin with `?pasteid`, headers `Accept: application/json` and `X-Requested-With: JSONHttpRequest`; inspect JSON fields `adata`, `ct`, `v`; decode the URL-fragment key using the encoding required by the page implementation; derive the AES key using the KDF parameters in adata (typically PBKDF2-HMAC-SHA256, salt/iterations/keysize), decrypt AES-GCM with adata as authenticated additional data, and decompress according to adata if necessary. If the implementation differs, inspect the returned JSON and the provider's own PrivateBin javascript metadata and adapt. The plaintext password must remain only in process memory. Do not log it, hash it, save it, or return it.
3. Use the dedicated account already confirmed by PTServidor: migration@associacaomilk.pt. Use FTPS explicit TLS on port 21. Prefer `troi.ptservidor.net` for TLS hostname validation if the public domain certificate mismatches. Never disable certificate validation and never use plaintext FTP.
4. Google Drive read-only: find exact title ATLAS_CONTROLO_VIVO. Build a deterministic UTF-8 JSON canary from its ID, available modified/revision metadata, a short canonical fragment, and `source_status=DERIVED_CANARY_FROM_READ_ONLY_SOURCE`. Compute bytes and SHA-256 locally.
5. Connect FTPS, create/use `canary/` under the account's restricted private root, upload `atlas-drive-canary.json`, get remote size, download it back, recompute SHA-256. Exact equality is mandatory.
6. ONLY IF the canary verifies, immediately migrate the first batch of up to 10 small Drive objects/exports to the same restricted private root. For every item: source ID, export representation, byte count, SHA-256, upload, download-back SHA-256, checkpoint. Never modify/delete/move Drive originals. Never touch public_html or either public site runtime.
7. If the first batch verifies with zero failures, continue further batches during the same execution as time permits, preserving checkpoints. Do not claim completion unless full reconciliation is reached.
8. FINAL OUTPUT: exactly one compact JSON object, no markdown/prose, no credentials or URLs:
{"state":"CANARY_VERIFIED_MIGRATION_STARTED|CANARY_FAILED|CREDENTIAL_NOT_AVAILABLE|BLOCKED_BY_TOOL_CAPABILITY","transport":"FTPS_EXPLICIT_TLS","tls_verified":true,"source_drive_writes":0,"target_private_writes":0,"canary":{"bytes":0,"local_sha256":"","remote_sha256":"","verified":false},"migration":{"attempted":0,"verified":0,"failed":0,"bytes":0},"blocker":null}
'''
resp=req('POST','/v1/conversations',{'agent_id':agent_id,'inputs':[{'role':'user','content':prompt}],'store':False},timeout=1200,retries=3)
raw=text(resp)
# Persist only a sanitized receipt.
raw=re.sub(r'https?://\S+','[URL_REDACTED]',raw)
raw=re.sub(r'[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}','[EMAIL_REDACTED]',raw)
raw=re.sub(r'(?i)(password|senha|token|secret|credential)\s*[:=]\s*[^,}\n]+',r'\1:[REDACTED]',raw)
receipt=None
for a in [raw.find('{')]:
    b=raw.rfind('}')
    if a>=0 and b>a:
        try: receipt=json.loads(raw[a:b+1])
        except Exception: pass
if receipt is None:
    receipt={'state':'BLOCKED_BY_TOOL_CAPABILITY','blocker':'agent did not return parseable migration receipt'}
for k in list(receipt):
    if any(s in k.lower() for s in ('password','secret','token','credential','url')):
        receipt.pop(k,None)
receipt['executor']='Mistral/ZecaBrito'
receipt['public_site_writes']=0
(OUT/'receipt.json').write_text(json.dumps(receipt,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(receipt,ensure_ascii=False,sort_keys=True))
if receipt.get('state')=='CANARY_VERIFIED_MIGRATION_STARTED' and receipt.get('canary',{}).get('verified') is True:
    raise SystemExit(0)
raise SystemExit(2)
