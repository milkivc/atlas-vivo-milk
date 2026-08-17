import json, os, pathlib, re, time, urllib.request
BASE='https://api.mistral.ai'; KEY=''.join(os.environ.get('MISTRAL_API_KEY','').strip().split()); H={'Authorization':'Bearer '+KEY,'Accept':'application/json','Content-Type':'application/json'}
OUT=pathlib.Path('artifacts/migration-official-v3'); OUT.mkdir(parents=True,exist_ok=True)
def req(method,path,payload=None,timeout=600,retries=2):
 data=None if payload is None else json.dumps(payload,ensure_ascii=False).encode(); last=None
 for i in range(retries):
  try:
   with urllib.request.urlopen(urllib.request.Request(BASE+path,headers=H,data=data,method=method),timeout=timeout) as x:return json.loads(x.read().decode())
  except Exception as e:last=e; time.sleep(2**i)
 raise last
def agents():
 out=[]; tok=None
 while True:
  b=req('GET','/v1/agents/pages?page_size=100'+(('&page_token='+tok) if tok else ''),timeout=90); out+=b.get('data',[]); tok=b.get('next_page_token')
  if not tok:return out
def text(resp):
 p=[]
 def w(x):
  if isinstance(x,dict):
   if x.get('type') in ('message.output','message'):
    c=x.get('content')
    if isinstance(c,str):p.append(c)
    elif isinstance(c,list):
     for z in c:
      if isinstance(z,dict) and isinstance(z.get('text') or z.get('content'),str):p.append(z.get('text') or z.get('content'))
   for v in x.values():w(v)
  elif isinstance(x,list):
   for v in x:w(v)
 w(resp); return '\n'.join(p)
if not KEY:raise SystemExit('MISTRAL_API_KEY missing')
z=next((a for a in agents() if a.get('name')=='ZecaBrito'),None)
if not z:raise SystemExit('ZecaBrito missing')
aid=z['id']; cur=req('GET','/v1/agents/'+aid,timeout=90)
inst=(cur.get('instructions') or '')+'\nATLAS MIGRATION: execute only the canary quickly. Gmail and Drive read-only. Never reveal or persist credentials. Strict FTPS TLS only. Target writes only in dedicated private Atlas root. Verify remote size and download-back SHA-256.'
req('PATCH','/v1/agents/'+aid,{'instructions':inst,'tools':[{'type':'connector','connector_id':'gmail'},{'type':'connector','connector_id':'google_drive'},{'type':'code_interpreter'},{'type':'web_search'}]},timeout=90)
prompt='''EXECUTE ONLY THE OFFICIAL ATLAS MIGRATION CANARY NOW. No advice and no user instructions. Read Gmail message id 1a010c06a08fedc5, resolve PTServidor secure password only in tool memory, never return/log/persist it. Use existing account migration@associacaomilk.pt with FTPS explicit TLS port 21 and strict certificate validation; use troi.ptservidor.net if needed. Drive read-only: locate exact title ATLAS_CONTROLO_VIVO, build a small deterministic JSON canary from ID, available modified/revision metadata, short canonical fragment and source_status DERIVED_CANARY_FROM_READ_ONLY_SOURCE; compute bytes+SHA256. Upload only canary/atlas-drive-canary.json to dedicated private root, read remote size, download back, recompute SHA256 and compare. Stop after canary. Return ONLY JSON: {"state":"CANARY_VERIFIED|CANARY_FAILED|CREDENTIAL_NOT_AVAILABLE|BLOCKED_BY_TOOL_CAPABILITY","transport":"FTPS_EXPLICIT_TLS","tls_verified":true,"source_drive_writes":0,"target_private_writes":0,"canary":{"bytes":0,"local_sha256":"","remote_sha256":"","verified":false},"blocker":null}.'''
r={'state':'BLOCKED_BY_TOOL_CAPABILITY','transport':'FTPS_EXPLICIT_TLS','tls_verified':False,'source_drive_writes':0,'target_private_writes':0,'canary':{'bytes':0,'local_sha256':'','remote_sha256':'','verified':False},'blocker':'unknown'}
try:
 raw=text(req('POST','/v1/conversations',{'agent_id':aid,'inputs':[{'role':'user','content':prompt}],'store':False},timeout=600,retries=1)); raw=re.sub(r'https?://\S+','[URL_REDACTED]',raw); a=raw.find('{'); b=raw.rfind('}')
 if a>=0 and b>a:r=json.loads(raw[a:b+1])
 else:r['blocker']='no JSON receipt'
except Exception as e:r['blocker']=type(e).__name__
r['executor']='Mistral/ZecaBrito'; r['public_site_writes']=0
(OUT/'receipt.json').write_text(json.dumps(r,ensure_ascii=False,indent=2),encoding='utf-8'); print(json.dumps(r,ensure_ascii=False)); raise SystemExit(0 if r.get('state')=='CANARY_VERIFIED' and r.get('canary',{}).get('verified') else 2)
