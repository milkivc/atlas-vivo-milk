from dataclasses import dataclass
from typing import Optional, Dict, Any, List
from enum import Enum, auto
import hashlib
import json
from datetime import datetime

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
class ProvenanceRecord:
    id: str
    state: EpistemicState
    source: str
    timestamp: str
    metadata: Optional[Dict[str, Any]] = None
    dependencies: Optional[List[str]] = None
    hash: Optional[str] = None

    def compute_hash(self) -> str:
        record_str = json.dumps(
            {
                "id": self.id,
                "state": self.state.name,
                "source": self.source,
                "timestamp": self.timestamp,
                "metadata": self.metadata,
                "dependencies": self.dependencies,
            },
            sort_keys=True,
        )
        return hashlib.sha256(record_str.encode()).hexdigest()

class ProvenanceTracker:
    def __init__(self):
        self._records: Dict[str, ProvenanceRecord] = {}

    def add_record(
        self,
        record_id: str,
        state: EpistemicState,
        source: str,
        metadata: Optional[Dict[str, Any]] = None,
        dependencies: Optional[List[str]] = None,
    ) -> ProvenanceRecord:
        timestamp = datetime.utcnow().isoformat()
        record = ProvenanceRecord(
            id=record_id,
            state=state,
            source=source,
            timestamp=timestamp,
            metadata=metadata,
            dependencies=dependencies,
        )
        record.hash = record.compute_hash()
        self._records[record_id] = record
        return record

    def get_record(self, record_id: str) -> Optional[ProvenanceRecord]:
        return self._records.get(record_id)

    def get_dependencies(self, record_id: str) -> List[str]:
        record = self.get_record(record_id)
        if record and record.dependencies:
            return record.dependencies
        return []

    def verify_integrity(self, record_id: str) -> bool:
        record = self.get_record(record_id)
        if not record:
            return False
        return record.hash == record.compute_hash()