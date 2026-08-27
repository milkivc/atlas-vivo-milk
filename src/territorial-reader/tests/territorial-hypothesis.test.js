'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const TerritorialHypothesisEngine = require('../hypothesis/territorial-hypothesis-engine');
const { EvidenceGraph } = require('../hypothesis/evidence-graph');
const { absenceState, CONSTITUTION } = require('../epistemic-constitution/open-world');

test('mundo aberto: não encontrado nunca vira ausência documentada', () => {
  assert.equal(absenceState({ searched: true }), 'NÃO_ENCONTRADO');
  assert.equal(absenceState({ explicitEvidence: true }), 'AUSÊNCIA_DOCUMENTADA');
  assert.equal(absenceState({}), 'DADO_INSUFICIENTE');
});

test('constituição separa ciência literal de interpretação autoral', () => {
  for (const item of Object.values(CONSTITUTION)) {
    assert.equal(item.literalScientificUse, false);
    assert.ok(item.mathematicalSource);
    assert.ok(item.authorialInterpretation);
    assert.ok(item.operationalUse);
    assert.ok(item.limitations);
  }
  assert.match(CONSTITUTION.planck.mathematicalSource, /6\.62607015e-34/);
  assert.match(CONSTITUTION.hilbert.operationalUse, /NÃO_ENCONTRADO/);
});

test('evidence graph preserva dependência e não infla fontes copiadas', () => {
  const graph = new EvidenceGraph();
  const territory = graph.addNode('TerritoryNode', { id: 'T-1' });
  const absence = graph.addNode('AbsenceNode', { id: 'A-1' });
  graph.addEdge(territory.id, absence.id, 'documents', { sourceId: 'S-1', dependencyRoot: 'ROOT-X' });
  graph.addEdge(territory.id, absence.id, 'documents', { sourceId: 'S-2', dependencyRoot: 'ROOT-X' });
  graph.addEdge(territory.id, absence.id, 'documents', { sourceId: 'S-3', dependencyRoot: 'ROOT-Y' });
  assert.deepEqual(graph.independentSources(absence.id).sort(), ['ROOT-X', 'ROOT-Y']);
  assert.equal(graph.snapshot().automatedDecision, false);
});

test('sem evidência H-0047 permanece pendente', () => {
  const engine = new TerritorialHypothesisEngine();
  const out = engine.build({ territory: { id: '110601' }, question: 'O que deveria estar aqui?' });
  assert.equal(out.state, 'DADO_INSUFICIENTE');
  assert.equal(out.automatedValidation, false);
});

test('hipótese com evidência continua a exigir validação humana', () => {
  const engine = new TerritorialHypothesisEngine();
  const evidence = [
    { sourceId: 'ATA-1', dependencyRoot: 'JUNTA', hash: 'h1', quote: 'O espaço comunitário encontra-se encerrado.' },
    { sourceId: 'MAPA-1', dependencyRoot: 'CARTOGRAFIA', hash: 'h2', quote: 'Edifício público existente.' },
  ];
  const out = engine.build({
    territory: { id: '110601', name: 'Exemplo' },
    question: 'Que suporte territorial está ausente?',
    evidence,
    signals: [
      { kind: 'PERSISTÊNCIA', evidence: evidence[0] },
      { kind: 'AUSÊNCIA', evidence: evidence[1] },
    ],
    absences: [{ state: 'AUSÊNCIA_DOCUMENTADA', object: 'suporte de encontro' }],
    possibleInfrastructure: ['reuso de equipamento existente'],
  });
  assert.match(out.id, /^H-/);
  assert.equal(out.independentEvidenceCount, 2);
  assert.equal(out.contradictions.length, 1);
  assert.equal(out.contradictions[0].causalityClaimed, false);
  assert.equal(out.fundability, 'A_VERIFICAR');
  assert.equal(out.uncertainty, 'NÃO_NULA');
  assert.equal(out.state, 'REQUER_VALIDACAO_HUMANA');
  assert.equal(out.automatedValidation, false);
});
