'use strict';
// SPDX-License-Identifier: EUPL-1.2

const test = require('node:test');
const assert = require('node:assert/strict');
const { HEISENBERG_UNCERTAINTY, expressUncertainty } = require('../epistemic-constitution/heisenberg-uncertainty');
const { territorialLensing } = require('../hypothesis/territorial-lensing-engine');
const { problemFission } = require('../hypothesis/problem-fission-engine');
const { structuralPressure } = require('../hypothesis/structural-pressure-engine');
const { installedCapacity } = require('../hypothesis/installed-capacity-engine');
const { possibilityEngine } = require('../hypothesis/possibility-engine');
const { fundingMatches } = require('../hypothesis/funding-matcher');
const { curatorialMatches } = require('../hypothesis/curatorial-matcher');
const { humanValidationGate } = require('../hypothesis/human-validation-gate');
const { publicReturn } = require('../hypothesis/public-return-engine');
const { territorialDeserts } = require('../hypothesis/territorial-desert-engine');
const { EvidenceGraph } = require('../hypothesis/evidence-graph');
const { TerritorialHypothesisEngine } = require('../hypothesis/hypothesis-engine');

test('Heisenberg permanece física literal e incerteza territorial é interpretação explícita', () => {
  assert.equal(HEISENBERG_UNCERTAINTY.formula, 'ΔxΔp ≥ ħ/2');
  assert.equal(HEISENBERG_UNCERTAINTY.literalScientificUse, 'quantum_physics_only');
  const out = expressUncertainty({ unknown: ['uso atual do edifício'] });
  assert.equal(out.probability, null);
  assert.equal(out.humanValidationRequired, true);
});

test('lenteamento territorial nunca transforma causa latente em facto', () => {
  const out = territorialLensing({ observedEffects: ['prática persiste'], candidateLatentCauses: [{ cause: 'suporte espacial ausente' }] });
  assert.equal(out.state, 'LENSING_HYPOTHESES_READY');
  assert.equal(out.candidateLatentCauses[0].factualConclusion, null);
  assert.equal(out.literalPhysics, false);
});

test('fissão de problema decompõe dimensões sem causalidade automática', () => {
  const out = problemFission({ spatial: ['sem abrigo'], mediation: ['sem mediação continuada'] });
  assert.equal(out.components.length, 2);
  assert.equal(out.causalChainEstablished, false);
});

test('pressão estrutural só marca primeiro ponto de falha como candidato documentado', () => {
  const out = structuralPressure({ pressureEvidence: ['espera documentada'], components: ['sombra'], firstFailureEvidence: ['sem sombra utilizável'] });
  assert.equal(out.firstFailurePoint.state, 'FIRST_FAILURE_POINT_CANDIDATE');
  assert.equal(out.firstFailurePoint.factualConclusion, null);
});

test('capacidade instalada nunca implica disponibilidade', () => {
  const out = installedCapacity([{ id: 'x', type: 'edifício público', availability: false }]);
  assert.equal(out.assets[0].availability, 'NOT_ASSUMED_AVAILABLE');
});

test('Ser Possível exige evidência e nunca prescreve automaticamente', () => {
  const out = possibilityEngine({ what_is_underused: { value: 'equipamento', evidenceIds: ['e1'] } });
  assert.equal(out.state, 'POSSIBILITY_TO_VALIDATE');
  assert.equal(out.prescription, null);
  assert.equal(out.automatedSelection, false);
});

test('financiamento permanece A_VERIFICAR e nunca garantido', () => {
  const out = fundingMatches([{ programme: 'Programa X', sourceUrl: 'https://example.invalid/call' }]);
  assert.equal(out.matches[0].state, 'A_VERIFICAR');
  assert.equal(out.fundingGuaranteed, false);
});

test('matcher curatorial oferece correspondências, não decisão', () => {
  const out = curatorialMatches([{ deviceId: 'NOS', name: 'NÓS', evidenceLinks: ['e1'] }]);
  assert.equal(out.selectedAutomatically, false);
  assert.equal(out.matches[0].state, 'CURATORIAL_CORRESPONDENCE_CANDIDATE');
});

test('retorno público exige validação humana e bloqueia vulnerabilidade/ranking', () => {
  assert.equal(publicReturn({ fragment: 'x' }).publishable, false);
  const validation = humanValidationGate({ decision: 'APPROVE', validatorId: 'human-1', evidenceReceipt: 'sha256:abc' });
  assert.equal(publicReturn({ humanValidation: validation, fragment: 'x', ranking: true }).publishable, false);
  assert.equal(publicReturn({ humanValidation: validation, fragment: 'x', provenance: 'receipt' }).publishable, true);
});

test('desertos territoriais exigem ausência documentada por evidência', () => {
  assert.equal(territorialDeserts([{ type: 'CONVIVIALITY', evidenceIds: [] }]).candidates.length, 0);
  assert.equal(territorialDeserts([{ type: 'CONVIVIALITY', evidenceIds: ['e1'] }]).candidates.length, 1);
});

test('H-0047 agrega câmaras mantendo hipótese não publicável', () => {
  const graph = new EvidenceGraph('110601');
  graph.addEvidence({ id: 'e1', source: 'ata', dependencyKey: 'ata', content: 'equipamento encerrado', claims: ['AUSENCIA','INFRAESTRUTURA_INATIVA'] });
  graph.addEvidence({ id: 'e2', source: 'arquivo', dependencyKey: 'arquivo', content: 'prática mantém-se', claims: ['PERSISTENCIA','MEMORIA_ATIVA'] });
  const out = new TerritorialHypothesisEngine().generate({
    graph,
    claim: 'AUSENCIA',
    searchedSources: ['ata','arquivo'],
    absenceEvidence: ['equipamento encerrado'],
    unknowns: ['disponibilidade jurídica do edifício'],
    observedEffects: ['prática persiste sem suporte equivalente'],
    latentCauseCandidates: [{ cause: 'suporte espacial insuficiente' }],
    problemDimensions: { spatial: ['suporte ausente'], institutional: ['uso a confirmar'] },
    capacityAssets: [{ id: 'ed1', type: 'edifício público', availability: false, evidenceIds: ['e1'] }],
    possibilityResponses: { what_is_underused: { value: 'ed1', evidenceIds: ['e1'] } },
    curatorialCandidates: [{ deviceId: 'NOS', name: 'NÓS', evidenceLinks: ['e1','e2'] }],
    fundingCandidates: [{ programme: 'Programa a verificar', sourceUrl: 'https://example.invalid/call' }],
  });
  assert.equal(out.state, 'HYPOTHESIS_CANDIDATE');
  assert.equal(out.epistemicStatus.uncertaintyExplicit, true);
  assert.equal(out.lensing.literalPhysics, false);
  assert.equal(out.installedCapacity.assets[0].availability, 'NOT_ASSUMED_AVAILABLE');
  assert.equal(out.possibilities.state, 'POSSIBILITY_TO_VALIDATE');
  assert.equal(out.publishable, false);
  assert.equal(out.humanValidationRequired, true);
});
