from chunking import chunk_text
from index import LexicalIndex
from retrieval import retrieve
from security import classify_text
from evals import eval_cosmic_distinction,eval_nuno_gate,eval_no_invisible_public
from router import route
def test_chunking_deterministic():
 a=chunk_text('x','um dois tres quatro',3,1);b=chunk_text('x','um dois tres quatro',3,1);assert[(x.text,x.sha256) for x in a]==[(x.text,x.sha256) for x in b]
def test_secret_block():assert not classify_text('password=abc').allowed_for_rag
def test_retrieval_citations():
 idx=LexicalIndex();idx.add(chunk_text('fonte-1','festa memória freguesia território'));r=retrieve(idx,'memória freguesia');assert r.context and r.citations[0].source_id=='fonte-1'
def test_invariants():assert eval_cosmic_distinction() and not eval_nuno_gate(12,True,True,True) and eval_nuno_gate(13,True,True,True) and not eval_no_invisible_public({'camada_invisivel':{'x':1}})
def test_router_read_only():assert route('migracao').source_mutation_allowed is False
