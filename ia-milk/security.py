import re
from dataclasses import dataclass
from typing import Iterable
SECRET=[re.compile(r"-----BEGIN (?:RSA |OPENSSH |EC )?PRIVATE KEY-----",re.I),re.compile(r"\b(?:password|senha|secret|token|api[_-]?key|credential)\s*[:=]",re.I),re.compile(r"\bsk-[A-Za-z0-9_-]{20,}\b")]
SENSITIVE=[re.compile(r"\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b",re.I)]
@dataclass(frozen=True)
class SafetyDecision: allowed_for_rag:bool; reason:str
def classify_text(text:str)->SafetyDecision:
    if any(p.search(text) for p in SECRET):return SafetyDecision(False,'SECRET_OR_CREDENTIAL')
    if any(p.search(text) for p in SENSITIVE):return SafetyDecision(False,'POTENTIAL_PERSONAL_DATA_REQUIRES_HUMAN_REVIEW')
    return SafetyDecision(True,'ALLOWED')
def filter_allowed(texts:Iterable[str])->list[str]:return[t for t in texts if classify_text(t).allowed_for_rag]
