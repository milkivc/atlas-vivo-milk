from __future__ import annotations
import ftplib, hashlib, io, json, pathlib, secrets, time
import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
HOST='associacaomilk.pt'; USER='migration@associacaomilk.pt'; REMOTE_FOLDER='fase1_prioridade_2026-08-17'
ITEMS=[('1WPyQ5ALgS-GxiGE1NeEQJ6Zk2sR4uYsJ-_jOW-jkopQ','sheet','atlas_vivo_publico.xlsx'),('1EcjRxUSm8VAdjDIGD-9mMFTDcd6WpcCXqgeUADEJzOU','sheet','GENEALOGIA.xlsx'),('1Pm-kIm8EJJxg5e2Gd3qnyPnJCBfiT2di','stored','LOTE023_DOSSIE.html'),('1V3CrLFXJFDBDR_mkZ0Qi68HYjs7REr-Bdec18Ga8mGY','doc','NORMA_MAE.docx'),('1TGQZDc1gun11X_F6DE8CgM4V0_Hswpkds1uKA5bDKa4','doc','PONTE_CANONICA.docx'),('1EJJ2gA8OY59qDXshvew0V5u_0qjJqcSQJr-yZOjMdks','doc','METODOLOGIA_INTEROPERAVEL.docx'),('1jO4QnPQv4WKInUtu8dZYv82C32lVryGR','stored','ATLAS_EXAUSTIVO_A.docx'),('1Ux7B7IJd730jWXM9kSPMCCO0W_yNqFpS','stored','ATLAS_EXAUSTIVO_B.docx'),('1q5P3--iz5U9_G4X-1QVd4eeoilvUcgVA','stored','ATLAS_FINAL_A.docx'),('1jqkbSXaCUO7UvlNYqjWqeuW9nxz97CU2','stored','ATLAS_FINAL_B.docx'),('1GG4hu8LyCKlp26iAARpPklrFy_syDFJY','stored','CAMADA_INVISIVEL.txt'),('1HV_8xHAohn5DVTJLstZatb2FBqvfVWSm','stored','CAMADA_INVISIVEL.docx'),('11DUtnXI3cc3h79D4C9uSXATyc7wPxYmh','stored','CAMADA_INVISIVEL.pdf')]
def mask(v):
    if v: print('::add-mask::'+v)
def consume_privatebin(url):
    o=webdriver.ChromeOptions(); o.add_argument('--headless=new'); o.add_argument('--no-sandbox'); o.add_argument('--disable-dev-shm-usage'); o.add_argument('--window-size=1280,900'); d=webdriver.Chrome(options=o); pw=''
    try:
        d.get(url); end=time.time()+45
        while time.time()<end and not pw:
            try:
                b=d.find_element(By.ID,'loadconfirm-open-now')
                if b.is_displayed() and b.is_enabled(): b.click(); time.sleep(1)
            except Exception: pass
            for sel,attr in [('#plaintext','textContent'),('#prettyprint','textContent'),('#message','value')]:
                try:
                    t=(d.find_element(By.CSS_SELECTOR,sel).get_attribute(attr) or '').strip()
                    if len(t)>=4: pw=t; break
                except Exception: pass
            if not pw: time.sleep(.5)
    finally: d.quit()
    lines=[x.strip() for x in pw.replace('\r','\n').split('\n') if x.strip()]
    if len(lines)!=1: raise RuntimeError('PRIVATEBIN_CREDENTIAL_FORMAT_UNEXPECTED')
    return lines[0]
def connect(pw):
    f=ftplib.FTP_TLS(timeout=300); f.connect(HOST,21); f.login(USER,pw); f.prot_p(); f.set_pasv(True); return f
def ensure_dest(pw):
    f=connect(pw)
    try:
        data=secrets.token_bytes(4096); sh=hashlib.sha256(data).hexdigest(); n=f'canary-{int(time.time())}.bin'; f.storbinary('STOR '+n,io.BytesIO(data)); h=hashlib.sha256(); c=[0]
        def rx(x): h.update(x); c[0]+=len(x)
        f.retrbinary('RETR '+n,rx); f.delete(n)
        if c[0]!=4096 or h.hexdigest()!=sh: raise RuntimeError('FTPS_CANARY_FIXITY_FAILED')
        try: f.mkd(REMOTE_FOLDER)
        except ftplib.error_perm as e:
            if not str(e).startswith('550'): raise
        f.cwd(REMOTE_FOLDER); print('FTPS_DESTINATION_READY')
    finally:
        try:f.quit()
        except:pass
def source_url(fid,kind):
    if kind=='doc': return f'https://docs.google.com/document/d/{fid}/export?format=docx'
    if kind=='sheet': return f'https://docs.google.com/spreadsheets/d/{fid}/export?format=xlsx'
    return f'https://drive.usercontent.google.com/download?id={fid}&export=download&confirm=t'
def main():
    cfgp=pathlib.Path('/tmp/fase1_cfg.json'); cfg=json.loads(cfgp.read_text()); u=cfg['ptservidor_paste_url']; mask(u); pw=consume_privatebin(u); mask(pw); print('PRIVATEBIN_CREDENTIAL_CONSUMED_AND_MASKED'); ensure_dest(pw)
    work=pathlib.Path('/tmp/ia_milk_fase1'); work.mkdir(mode=0o700,exist_ok=True); rec={'state':'FASE1_PRIORITY_FTPS_MIGRATION','source':'Google Drive read-only/direct export','source_read_only':True,'destination':'PTServidor private FTPS','remote_folder':REMOTE_FOLDER,'expected_items':len(ITEMS),'verified_items':0,'verified_bytes':0,'failed_items':0,'items':[],'secrets_exposed':False,'mistral_received_secrets':False}; rp=pathlib.Path('ia-milk-fase1-ftps-receipt.json')
    for fid,kind,name in ITEMS:
        r={'drive_id':fid,'kind':kind,'name':name,'verified':False}; p=work/name
        try:
            h=hashlib.sha256(); n=0
            with requests.get(source_url(fid,kind),stream=True,timeout=(30,300),allow_redirects=True) as resp:
                if resp.status_code not in (200,206) or requests.utils.urlparse(resp.url).hostname=='accounts.google.com': raise RuntimeError(f'DRIVE_AUTH_REQUIRED:{resp.status_code}')
                with p.open('wb') as q:
                    for ch in resp.iter_content(8*1024*1024):
                        if ch: q.write(ch); h.update(ch); n+=len(ch)
            if n==0: raise RuntimeError('DRIVE_EMPTY_DOWNLOAD')
            local=h.hexdigest(); r.update(local_bytes=n,local_sha256=local); f=connect(pw)
            try:
                f.cwd(REMOTE_FOLDER)
                with p.open('rb') as q: f.storbinary('STOR '+name,q,blocksize=1024*1024)
                rh=hashlib.sha256(); rn=[0]
                def rx(ch): rh.update(ch); rn[0]+=len(ch)
                f.retrbinary('RETR '+name,rx,blocksize=1024*1024); r.update(remote_bytes=rn[0],remote_sha256=rh.hexdigest()); r['verified']=(rn[0]==n and rh.hexdigest()==local)
                if not r['verified']: raise RuntimeError('REMOTE_FIXITY_MISMATCH')
            finally:
                try:f.quit()
                except:pass
            rec['verified_items']+=1; rec['verified_bytes']+=n; print(f'MIGRATED_VERIFIED name={name} bytes={n} sha256_match=true')
        except Exception as e:
            rec['failed_items']+=1; r['error']=type(e).__name__+':'+str(e)[:120]; print(f'::error::MIGRATION_ITEM_FAILED name={name} type={type(e).__name__}')
        finally:
            rec['items'].append(r); rp.write_text(json.dumps(rec,ensure_ascii=False,indent=2)); p.unlink(missing_ok=True)
    rec['complete_subset']=rec['verified_items']==len(ITEMS) and rec['failed_items']==0; rp.write_text(json.dumps(rec,ensure_ascii=False,indent=2)); print('FASE1_MIGRATION_RESULT '+json.dumps({k:rec[k] for k in ['verified_items','failed_items','verified_bytes','complete_subset']})); pw='0'*len(pw); u=''; cfgp.unlink(missing_ok=True); return 0 if rec['complete_subset'] else 3
if __name__=='__main__': raise SystemExit(main())
