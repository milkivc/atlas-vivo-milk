import importlib.util
from pathlib import Path

p = Path(__file__).with_name('ia_milk.py')
spec = importlib.util.spec_from_file_location('ia_milk', p)
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)


def test_model_candidate_is_not_claim():
    r = m.MemoryRecord('1','src','abc12345','model_candidate','validated',{})
    assert not r.can_be_validated_claim()


def test_validated_source_can_be_claim():
    r = m.MemoryRecord('1','src','abc12345','source_fact','validated',{})
    assert r.can_be_validated_claim()


def test_contradictions_are_preserved():
    e = m.MycelialEdge('a','b','supports',0.5,['ev1'])
    e.weaken(['contra1'])
    assert 'contra1' in e.contradicted_by
    assert e.weight < 0.5


def test_intervention_requires_human_and_triangulation():
    assert not m.may_activate_intervention(['a','b'], False)
    assert not m.may_activate_intervention(['a'], True)
    assert m.may_activate_intervention(['a','b'], True)


def test_olhapin_never_becomes_empirical_without_human_validation():
    s = m.OlhapinSignal('nulometria', ('src1',), 0.7, 'candidate')
    assert not s.publishable_as_empirical_fact()
