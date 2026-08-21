from enum import Enum, auto
from dataclasses import dataclass
from typing import Optional, Dict, Any, List
import re

class EpistemicState(Enum):
    SOURCE_FACT = auto()
    OBSERVATION = auto()
    QUOTATION = auto()
    INFERENCE = auto()
    INTERPRETATION = auto()
    COUNTER_INTERPRETATION = auto()
    HYPOTHESIS = auto()
    COMMUNITY_TESTIMONY = auto()
    MODEL_CANDIDATE = auto()

@dataclass
class DataProvenance:
    source: str
    state: EpistemicState
    timestamp: str
    metadata: Optional[Dict[str, Any]] = None

class SecureModel:
    _BLOCKED_PATTERNS = [
        re.compile(r'password\s*[=:\"]\s*\w+', re.IGNORECASE),
        re.compile(r'api[_-]?key\s*[=:\"]\s*\w+', re.IGNORECASE),
        re.compile(r'secret\s*[=:\"]\s*\w+', re.IGNORECASE),
        re.compile(r'credential[s]?\s*[=:\"]\s*\w+', re.IGNORECASE),
        re.compile(r'auth\s*[=:\"]\s*\w+', re.IGNORECASE),
    ]

    @classmethod
    def sanitize_input(cls, text: str) -> str:
        for pattern in cls._BLOCKED_PATTERNS:
            text = pattern.sub("[REDACTED]", text)
        return text

    @classmethod
    def validate_epistemic_state(cls, state: EpistemicState, data: Any) -> bool:
        if state == EpistemicState.SOURCE_FACT:
            return isinstance(data, str) and len(data.strip()) > 0
        elif state == EpistemicState.QUOTATION:
            return isinstance(data, str) and len(data.strip()) > 0
        elif state in (EpistemicState.INFERENCE, EpistemicState.INTERPRETATION):
            return isinstance(data, (str, Dict, List))
        elif state == EpistemicState.MODEL_CANDIDATE:
            return isinstance(data, Dict) and "model" in data
        return True

class ModelRegistry:
    def __init__(self):
        self._models: Dict[str, Dict[str, Any]] = {}

    def register_model(
        self,
        model_id: str,
        model_data: Dict[str, Any],
        provenance: DataProvenance,
    ) -> bool:
        if not SecureModel.validate_epistemic_state(provenance.state, model_data):
            return False
        sanitized_data = {
            k: SecureModel.sanitize_input(str(v)) if isinstance(v, str) else v
            for k, v in model_data.items()
        }
        self._models[model_id] = {
            "data": sanitized_data,
            "provenance": provenance,
        }
        return True

    def get_model(self, model_id: str) -> Optional[Dict[str, Any]]:
        model = self._models.get(model_id)
        if model:
            return {"data": model["data"], "provenance": model["provenance"]}
        return None