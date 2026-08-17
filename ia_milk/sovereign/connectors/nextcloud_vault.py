from __future__ import annotations

import base64
import hashlib
import json
import os
import time
import urllib.error
import urllib.parse
import urllib.request

from ia_milk.sovereign.runtime import register_secret_ref, secret_value, write_receipt


def _auth(user:str,password:str)->str:
    return 'Basic '+base64.b64encode((user+':'+password).encode()).decode()


def _req(url:str,method='GET',data:bytes|None=None,headers:dict|None=None):
    r=urllib.request.Request(url,data=data,method=method,headers=headers or {})
    with urllib.request.urlopen(r,timeout=60) as x:
        return x.status,x.read(),dict(x.headers)


def canary(base_url:str,user:str,password_ref:str,folder='Atlas-Vivo-MILK/ia-milk') -> dict:
    password=secret_value(password_ref)
    root=base_url.rstrip('/')+'/remote.php/dav/files/'+urllib.parse.quote(user,safe='')
    headers={'Authorization':_auth(user,password)}
    current=root
    for part in folder.split('/'):
        current += '/'+urllib.parse.quote(part,safe='')
        try:
            _req(current,'MKCOL',b'',headers)
        except urllib.error.HTTPError as e:
            if e.code not in (405,409):
                raise
    payload=os.urandom(4096)
    name='ia-milk-canary-'+str(int(time.time()))+'.bin'
    target=current+'/'+name
    put,_b,_h=_req(target,'PUT',payload,headers)
    get,back,_h=_req(target,'GET',None,headers)
    s1=hashlib.sha256(payload).hexdigest(); s2=hashlib.sha256(back).hexdigest()
    state='VERIFIED' if put in (200,201,204) and get==200 and s1==s2 else 'FAILED'
    sanitized={'put_http':put,'get_http':get,'bytes':len(payload),'sha256_match':s1==s2,'folder':folder,'remote_name':name}
    rid=write_receipt('nextcloud','put_get_canary',state,sanitized)
    return {'state':state,'receipt_id':rid,**sanitized}


def install_standard_refs():
    register_secret_ref('secret://nextcloud/password','nextcloud','IA MILK sovereign storage','NEXTCLOUD_PASSWORD')
    register_secret_ref('secret://ptservidor/ftps','ptservidor','preservative migration','FTPS_PASSWORD')
    register_secret_ref('secret://mistral/api','mistral','external trainer only','MISTRAL_API_KEY')
