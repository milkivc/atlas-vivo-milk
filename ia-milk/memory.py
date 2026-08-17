import hashlib,json,uuid
from dataclasses import dataclass,field,asdict
from datetime import datetime,timezone
from typing import Any
@dataclass(frozen=True)
class Receipt:
    operation:str;source:str;target:str|None=None;metadata:dict[str,Any]=field(default_factory=dict);provenance:tuple[str,...]=();id:str=field(default_factory=lambda:str(uuid.uuid4()));timestamp:str=field(default_factory=lambda:datetime.now(timezone.utc).isoformat())
    def digest(self):return hashlib.sha256(json.dumps(asdict(self),sort_keys=True,ensure_ascii=False).encode()).hexdigest()
class MemoryManager:
    def __init__(self):self.episodic={};self.procedural={};self.receipts=[]
    def log_episodic(self,event_id,data,source,provenance=()):self.episodic[event_id]=data;r=Receipt('LOG_EPISODIC',source,event_id,{'keys':sorted(data)},provenance);self.receipts.append(r);return r
    def log_procedural(self,procedure_id,steps,source,provenance=()):self.procedural[procedure_id]=steps;r=Receipt('LOG_PROCEDURAL',source,procedure_id,{'step_count':len(steps)},provenance);self.receipts.append(r);return r
