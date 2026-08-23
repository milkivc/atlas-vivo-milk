'use strict';
// SPDX-License-Identifier: EUPL-1.2

const test = require('node:test');
const assert = require('node:assert/strict');

const { PLANCK_CONSTANT_SI, evidenceQuantum } = require('../epistemic-constitution/planck-quantum');
const { qualifyAbsence } = require('../epistemic-constitution/hilbert-open-world');
const { complexityGuard } = require('../epistemic-constitution/graham-boundary');
const { estimatePiLeibniz } = require('../epistemic-constitution/pi-convergence');
const { nonMaleficenceGate } = require('../epistemic-constitution/non-maleficence-gate');
const { DEFINITIONS, evaluateMetrology } = require('../metrologies');
const { EvidenceGraph } = require('../hypothesis/evidence-graph');
const { detectContradictions } = require('../hypothesis/contradiction-engine');
const { temporalProfile } = require('../hypothesis/temporal-engine');
const { TerritorialHypothesisEngine } = require('../hypothesis/hypothesis-engine');

test('constante de Planck é exacta mas não mede território', () => {
  assert.equal(PLANCK_CONSTANT_SI.value, 6.62607015e-34);
  assert.equal(PLANCK_CONSTANT_SI.literalScientificUse, 'physics_only');
  assert.equal(evidenceQuantum([]).admissible, false);
  assert.equal(evidenceQuantum([{ source: 'ata', hash: 'abc', quote: 'falta espaço' }]).admissible, true);
});

test('mundo aberto: não encontrado não equivale a ausência', () => {
  assert.equal(qualifyAbsence({ searchedSources: ['A', 'B'] }).state, 'NOT_FOUND_IN_CONSULTED_SOURCES');
  assert.equal(qualifyAbsence({ searchedSources: ['A'], explicitAbsenceEvidence: ['sem biblioteca'] }).state, 'DOCUMENTED_ABSENCE_CANDIDATE');
});

test('Graham é apenas fronteira simbólica de complexidade', () => {
  const out = complexityGuard({ nodes: 100, candidateEdges: 60000, maxCandidateEdges: 50000 });
  assert.equal(out.exceeded, true);
  assert.equal(out.literalGrahamComparison, false);
});

test('pi converge matematicamente sem gerar confiança territorial', () => {
  const early = estimatePiLeibniz(10);
  const later = estimatePiLeibniz(10000);
  assert.ok(later.absoluteError < early.absoluteError);
  assert.equal(later.empiricalConfidence, null);
});

test('as dez metrologias permanecem explícitas e saneadas', () => {
  assert.deepEqual(Object.keys(DEFINITIONS), ['Batimetria','Bimetria','Assimetria','Minometria','Nanometria','Desmetria','Duametria','Nulometria','Ametria','Dinametria']);
  assert.equal(evaluateMetrology('Nanometria', {}).state, 'NOT_AVAILABLE');
  assert.equal(evaluateMetrology('Nulometria', {}).state, 'INSUFFICIENT_EVIDENCE');
  assert.equal(evaluateMetrology('Ametria', { sentimentScore: 0.9 }).state, 'BLOCKED_UNSAFE_INFERENCE');
});

test('fontes copiadas não contam como independentes', () => {
  const graph = new EvidenceGraph('PT-TESTE');
  graph.addEvidence({ id: 'e1', source: 'site-a', dependencyKey: 'fonte-original', content: 'falta espaço', claims: ['AUSENCIA'] });
  graph.addEvidence({ id: 'e2', source: 'site-b', dependencyKey: 'fonte-original', content: 'falta espaço republicado', claims: ['AUSENCIA'] });
  graph.addEvidence({ id: 'e3', source: 'ata-oficial', dependencyKey: 'ata-oficial', content: 'sem espaço disponível', claims: ['AUSENCIA'] });
  const out = graph.independentEvidenceForClaim('AUSENCIA');
  assert.equal(out.evidenceCount, 3);
  assert.equal(out.independentSourceCount, 2);
});

test('contradição é candidata, nunca conclusão factual automática', () => {
  const out = detectContradictions(['MEMORIA_ATIVA', 'INFRAESTRUTURA_INATIVA']);
  assert.equal(out.length, 1);
  assert.equal(out[0].state, 'CANDIDATE_CONTRADICTION');
  assert.equal(out[0].factualConclusion, null);
});

test('persistência temporal não vira probabilidade', () => {
  const out = temporalProfile([
    { id: '1', date: '2024-01-01', claims: ['AUSENCIA'] },
    { id: '2', date: '2025-01-01', claims: ['AUSENCIA'] },
  ]);
  assert.equal(out.state, 'TEMPORAL_PROFILE_READY');
  assert.equal(out.recurringClaims[0].claim, 'AUSENCIA');
  assert.equal(out.persistenceIsInterpretive, true);
});

test('não-maleficência falha fechado e mantém validação humana', () => {
  const blocked = nonMaleficenceGate({ risks: ['PSYCHOLOGICAL_INFERENCE'], requestedAction: 'ANALYSE' });
  assert.equal(blocked.allowedAutomatically, false);
  assert.equal(blocked.humanValidationRequired, true);
});

test('motor gera hipótese explicável e nunca decisão pública', () => {
  const graph = new EvidenceGraph('110601');
  graph.addEvidence({ id: 'a', source: 'ata-junta', dependencyKey: 'ata-junta-2024', date: '2024-01-01', content: 'equipamento encerrado', claims: ['INFRAESTRUTURA_INATIVA', 'AUSENCIA'] });
  graph.addEvidence({ id: 'b', source: 'arquivo-local', dependencyKey: 'arquivo-local', date: '2025-01-01', content: 'atividade comunitária mantém-se', claims: ['MEMORIA_ATIVA', 'PERSISTENCIA'] });
  const engine = new TerritorialHypothesisEngine();
  const out = engine.generate({ graph, claim: 'AUSENCIA', absenceEvidence: ['equipamento encerrado'], searchedSources: ['ata-junta', 'arquivo-local'] });
  assert.equal(out.state, 'HYPOTHESIS_CANDIDATE');
  assert.equal(out.epistemicStatus.fact, false);
  assert.equal(out.epistemicStatus.probability, null);
  assert.equal(out.publishable, false);
  assert.equal(out.actionable, false);
  assert.equal(out.humanValidationRequired, true);
  const contradictionTypes = new Set(out.contradictions.map((item) => item.type));
  assert.equal(contradictionTypes.has('MEMORIA_ATIVA+INFRAESTRUTURA_INATIVA'), true);
  assert.equal(contradictionTypes.has('PERSISTENCIA+AUSENCIA'), true);
});
