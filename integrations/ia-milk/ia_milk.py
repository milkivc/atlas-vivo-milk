from dataclasses import dataclass, field
from typing import Literal

Epistemic = Literal[
    'source_fact','observation','quotation','transcription','translation',
    'inference','interpretation','counter_interpretation','hypothesis',
    'community_testimony','model_candidate','validated_claim','disputed_claim','unknown'
]
Review = Literal['machine_candidate','human_reviewed','validated','rejected']

@dataclass(frozen=True)
class MemoryRecord:
    id: str
    source_id: str
    source_hash: str
    epistemic_status: Epistemic
    review_status: Review
    body: object
    generator: str | None = None

    def can_be_validated_claim(self) -> bool:
        return (
            bool(self.source_id and self.source_hash)
            and self.review_status == 'validated'
            and self.epistemic_status != 'model_candidate'
        )

@dataclass
class MycelialEdge:
    source: str
    target: str
    relation: str
    weight: float
    evidence_ids: list[str] = field(default_factory=list)
    contradicted_by: list[str] = field(default_factory=list)
    human_gate: bool = True

    def reinforce(self, evidence: list[str]) -> None:
        for item in evidence:
            if item not in self.evidence_ids:
                self.evidence_ids.append(item)
        self.weight = min(1.0, self.weight + min(0.15, len(evidence) * 0.03))

    def weaken(self, evidence: list[str]) -> None:
        for item in evidence:
            if item not in self.contradicted_by:
                self.contradicted_by.append(item)
        self.weight = max(0.0, self.weight - min(0.20, len(evidence) * 0.04))

@dataclass(frozen=True)
class OlhapinSignal:
    name: Literal['batimetria','assimetria','nulometria','desmetria','bimetria','ametria']
    source_ids: tuple[str, ...]
    value: float | None = None
    state: Literal['authorial_heuristic','candidate','triangulated','human_validated'] = 'authorial_heuristic'

    def publishable_as_empirical_fact(self) -> bool:
        return self.state == 'human_validated' and len(self.source_ids) > 0


def may_activate_intervention(evidence_ids: list[str], human_validated: bool) -> bool:
    return human_validated and len(set(evidence_ids)) >= 2
