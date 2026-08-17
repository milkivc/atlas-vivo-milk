import json,os,urllib.request
from typing import Sequence
class MistralEmbeddings:
    def __init__(self,model='mistral-embed',endpoint='https://api.mistral.ai/v1/embeddings'):self.model=model;self.endpoint=endpoint
    def embed(self,texts:Sequence[str])->list[list[float]]:
        if not texts:return[]
        key=os.getenv('MISTRAL_API_KEY')
        if not key:raise RuntimeError('MISTRAL_API_KEY is not configured; lexical retrieval remains available')
        req=urllib.request.Request(self.endpoint,data=json.dumps({'model':self.model,'input':list(texts)}).encode(),method='POST',headers={'Authorization':f'Bearer {key}','Content-Type':'application/json'})
        with urllib.request.urlopen(req,timeout=30) as r:body=json.loads(r.read().decode())
        return[item['embedding'] for item in body['data']]
