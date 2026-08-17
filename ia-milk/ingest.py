from pathlib import Path
from chunking import chunk_text
from security import classify_text
TEXT_EXTENSIONS={'.txt','.md','.markdown','.json','.csv','.tsv','.html','.htm'}
def read_export(path):
    p=Path(path)
    if p.suffix.lower() not in TEXT_EXTENSIONS:raise ValueError('binary/native document must be exported to a textual preservation format before IA MILK ingestion')
    return p.read_text(encoding='utf-8',errors='strict')
def ingest_file(path,source_id=None):
    p=Path(path);text=read_export(p);decision=classify_text(text)
    if not decision.allowed_for_rag:raise ValueError(decision.reason)
    return chunk_text(source_id or p.name,text)
