from dataclasses import dataclass
from index import LexicalIndex
@dataclass(frozen=True)
class Citation:source_id:str;chunk_index:int;sha256:str
@dataclass
class RetrievalResult:context:list[str];citations:list[Citation]
def retrieve(index:LexicalIndex,query:str,limit:int=6)->RetrievalResult:
    hits=index.search(query,limit);return RetrievalResult([h.chunk.text for h in hits],[Citation(h.chunk.source_id,h.chunk.index,h.chunk.sha256) for h in hits])
