import math,re
from collections import Counter
from dataclasses import dataclass
from chunking import Chunk
TOKEN=re.compile(r"[\wÀ-ÿ]+",re.UNICODE)
def tokens(t:str)->list[str]:return[x.lower() for x in TOKEN.findall(t)]
@dataclass
class Hit:chunk:Chunk;score:float
class LexicalIndex:
    def __init__(self):self.chunks=[];self.df=Counter()
    def add(self,chunks):
        for c in chunks:self.chunks.append(c);self.df.update(set(tokens(c.text)))
    def search(self,query:str,limit:int=8):
        q=Counter(tokens(query));n=max(1,len(self.chunks));hits=[]
        for c in self.chunks:
            d=Counter(tokens(c.text));s=sum(qf*d[t]*math.log((n+1)/(self.df[t]+1)+1) for t,qf in q.items() if d[t])
            if s>0:hits.append(Hit(c,s))
        return sorted(hits,key=lambda h:(-h.score,h.chunk.source_id,h.chunk.index))[:limit]
