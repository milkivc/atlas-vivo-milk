'use strict';
// SPDX-License-Identifier: EUPL-1.2

const test = require('node:test');
const assert = require('node:assert/strict');

const { uncertaintyEnvelope, HEISENBERG_UNCERTAINTY } = require('../epistemic-constitution/heisenberg-uncertainty');
const { territorialLensing } = require('../hypothesis/territorial-lensing-engine');
const { structuralPressure } = require('../hypothesis/structural-pressure-engine');
const { analyseAbsence } = require('../hypothesis/absence-engine');
const { installedCapacity } = require('../hypothesis/installed-capacity-engine');
const { symbolicVitality } = require('../hypothesis/symbolic-vitality-engine');
const { detectTerritorialDeserts } = require('../hypothesis/territorial-desert-engine');
const { possibilityProfile } = require('../hypothesis/possibility-engine');
const { curatorialMatches } = require('../hypothesis/curatorial-matcher');
const { fundingMatches } = require('../hypothesis/funding-matcher');
const { publicReturn } = require('../hypothesis/public-return-engine');
const { humanValidationGate } = require('../hypothesis/human-validation-gate');
const { deepTerritorialReading } = require('../hypothesis/deep-reading-engine');

test('Heisenberg fica explícito como constituição epistemológica, nunca medida territorial', () => {
  assert.equal(HEISENBERG_UNCERTAINTY.literalScientificUse, 'quantum_physics_only');
  const out = uncertaintyEnvelope({ known:['ata'], unknown:['uso atual'] });
  assert.equal(out.literalPhysicsApplied, false);
  assert.equal(out.confidenceScore, null);
});

test('lenteamento territorial só devolve hipótese suportada por efeitos documentados', () => {
  const out = territorialLensing({ effects:[{id:'e1',evidenceRef:'doc:1'}], latentCandidates:[{id:'c1',explainsEffectIds:['e1','e2']}] });
  assert.equal(out.literalGravitationalLensingApplied, false);
  assert.equal(out.candidates[0].state, 'LATENT_STRUCTURE_HYPOTHESIS');
  assert.deepEqual(out.candidates[0].unsupportedEffectClaims, ['e2']);
});

test('primeiro ponto de falha só existe quando a sequência está documentada', () => {
  const unknown = structuralPressure({ pressureEvidence:['obs:1'], components:[{id:'sombra',failureEvidence:['obs:2']}] });
  assert.equal(unknown.firstFailurePoint, null);
  const known = structuralPressure({ pressureEvidence:['obs:1'], components:[{id:'banco',failureEvidence:['obs:3'],failureSequence:2},{id:'sombra',failureEvidence:['obs:2'],failureSequence:1}] });
  assert.equal(known.firstFailurePoint.componentId, 'sombra');
});

test('ausência documentada é distinta de não encontrado', () => {
  assert.equal(analyseAbsence({ searchedSources:['a'] }).state, 'NOT_FOUND_IN_CONSULTED_SOURCES');
  assert.equal(analyseAbsence({ explicitAbsenceEvidence:['ata:sem espaço'] }).state, 'DOCUMENTED_ABSENCE_CANDIDATE');
});

test('existência de equipamento não implica disponibilidade', () => {
  const out = installedCapacity([{id:'e1',type:'biblioteca',exists:true,evidenceRef:'doc:1'}]);
  assert.equal(out.items[0].availability, 'UNKNOWN');
  assert.equal(out.items[0].availabilityAssumedFromExistence, false);
});

test('vitalidade simbólica bloqueia inferência psicológica', () => {
  const out = symbolicVitality([{id:'x',inferenceType:'psychological_profile',statement:'não permitido'}]);
  assert.equal(out.blockedCount, 1);
  assert.equal(out.personalProfileProduced, false);
});

test('deserto territorial exige ausência explícita e nunca produz ranking', () => {
  const out = detectTerritorialDeserts([{type:'mediation',explicitAbsenceEvidence:[]}]);
  assert.equal(out.results[0].state, 'NOT_ESTABLISHED');
  assert.equal(out.publicRankingAllowed, false);
});

test('possibilidade é candidata, não prescrição', () => {
  const out = possibilityProfile({ candidates:[{id:'p1',form:'reuse',evidenceRefs:['doc:1']}] });
  assert.equal(out.candidates[0].prescription, false);
  assert.equal(out.humanValidationRequired, true);
});

test('curadoria e financiamento permanecem correspondências a verificar', () => {
  const c = curatorialMatches({ needTags:['convivencia'], devices:[{id:'NOS',tags:['convivencia'],evidenceRefs:['cur:1']}] });
  assert.equal(c.candidates[0].automaticallySelected, false);
  const f = fundingMatches({ territorialEvidenceRefs:['doc:1'], programmes:[{id:'p',criteria:[{id:'territorio',verified:true,evidenceRef:'reg:1'}]}] });
  assert.equal(f.candidates[0].funded, false);
  assert.equal(f.candidates[0].state, 'ELIGIBILITY_CANDIDATE_A_VERIFICAR');
});

test('retorno público falha fechado para ranking ou dados sensíveis', () => {
  assert.equal(publicReturn({validated:true,flags:['territory_ranking'],publicFragment:'x'}).state, 'BLOCKED_FROM_PUBLIC_RETURN');
  assert.equal(publicReturn({validated:true,flags:[],publicFragment:'x'}).publishable, false);
});

test('validação humana nunca é sintetizada automaticamente', () => {
  assert.equal(humanValidationGate({decision:'APPROVE',evidenceReviewed:['e1']}).approved, false);
  assert.equal(humanValidationGate({validatorId:'humano:1',decision:'APPROVE',evidenceReviewed:['e1']}).approved, true);
});

test('engrenagem profunda reúne as câmaras sem decisão automática', () => {
  const out = deepTerritorialReading({ absence:{searchedSources:['ata']}, facilities:[{id:'j1',type:'jardim',exists:true,evidenceRef:'doc:1'}] });
  assert.equal(out.state, 'DEEP_TERRITORIAL_READING_CANDIDATE');
  assert.equal(out.automatedDecision, false);
  assert.equal(out.publicDecision, false);
  assert.equal(out.humanValidationRequired, true);
  assert.ok(out.chambers.spatialMaterial);
  assert.ok(out.chambers.installedCapacity);
});
