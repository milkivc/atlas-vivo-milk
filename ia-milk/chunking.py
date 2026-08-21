import hashlib
from dataclasses import dataclass
@dataclass(frozen=True)
class Chunk: source_id:str; index:int; text:str; sha256:str
def chunk_text(source_id:str,text:str,words_per_chunk:int=350,overlap:int=40)->list[Chunk]:
    if words_per_chunk<=0 or overlap<0 or overlap>=words_per_chunk:raise ValueError('invalid chunk parameters')
    words=text.split();out=[];start=0;idx=0
    while start<len(words):
        end=min(start+words_per_chunk,len(words));body=' '.join(words[start:end]);out.append(Chunk(source_id,idx,body,hashlib.sha256(body.encode()).hexdigest()))
        if end==len(words):break
        start=end-overlap;idx+=1
    return out
