'use strict';
// SPDX-License-Identifier: EUPL-1.2

const test = require('node:test');
const assert = require('node:assert/strict');
const { EvidenceGraph } = require('../hypothesis/evidence-graph');
const { TerritorialHypothesisEngine } = require('../hypothesis/hypothesis-engine');

test('H-0047 integra câmaras profundas, incerteza e bloqueio de decisão automática', () => {
  const graph = new EvidenceGraph('H0047-TERRITORIO');
  graph.addEvidence({
    id: 'ata-1',
    source: 'ata-junta',
    dependencyKey: 'ata-junta-2025',
    content: 'Espaço comunitário encerrado.',
    quote: 'Espaço comunitário encerrado.',
    claims: ['INFRAESTRUTURA_INATIVA', 'AUSENCIA'],
  });
  graph.addEvidence({
    id: 'arquivo-1',
    source: 'arquivo-local',
    dependencyKey: 'arquivo-local',
    content: 'A prática comunitária mantém-se sem espaço fixo.',
    quote: 'A prática comunitária mantém-se sem espaço fixo.',
    claims: ['MEMORIA_ATIVA', 'PERSISTENCIA'],
  });

  const out = new TerritorialHypothesisEngine().generate({
    graph,
    claim: 'AUSENCIA',
    absenceEvidence: ['ata-1'],
    searchedSources: ['ata-junta', 'arquivo-local'],
    known: ['encerramento documentado', 'prática documentada'],
    unknown: ['disponibilidade jurídica atual do edifício'],
    alternatives: ['reativação', 'dispositivo itinerante'],
    deepReadingInput: {
      structuralPressure: {
        pressureEvidence: ['obs:fluxo'],
        components: [{ id: 'sombra', type: 'shade', failureEvidence: ['obs:sombra'], failureSequence: 1 }],
      },
      absence: { explicitAbsenceEvidence: ['ata-1'], expectedCondition: 'espaço de convivência' },
      facilities: [{ id: 'edificio-1', type: 'public_building', exists: true, evidenceRef: 'cadastro:1' }],
      lensing: {
        effects: [{ id: 'efeito-1', evidenceRef: 'arquivo-1' }],
        latentCandidates: [{ id: 'suporte-ausente', explainsEffectIds: ['efeito-1'] }],
      },
      possibility: {
        candidates: [{ id: 'reuso', form: 'adaptive_reuse', evidenceRefs: ['cadastro:1', 'ata-1'] }],
      },
      curatorial: {
        needTags: ['convivencia'],
        devices: [{ id: 'NOS', title: 'NÓS', tags: ['convivencia'], evidenceRefs: ['curadoria:nos'] }],
      },
      funding: {
        territorialEvidenceRefs: ['ata-1'],
        programmes: [{ id: 'programa-x', criteria: [{ id: 'territorio', verified: false }] }],
      },
    },
  });

  assert.equal(out.state, 'HYPOTHESIS_CANDIDATE');
  assert.equal(out.epistemicStatus.fact, false);
  assert.equal(out.epistemicStatus.confidenceScore, null);
  assert.equal(out.epistemicStatus.literalQuantumPhysicsApplied, false);
  assert.equal(out.uncertainty.state, 'UNCERTAINTY_EXPLICIT');
  assert.equal(out.deepReading.chambers.structuralPressure.firstFailurePoint.componentId, 'sombra');
  assert.equal(out.deepReading.chambers.installedCapacity.items[0].availability, 'UNKNOWN');
  assert.equal(out.deepReading.chambers.lensing.candidates[0].factualConclusion, null);
  assert.equal(out.deepReading.chambers.curatorial.candidates[0].automaticallySelected, false);
  assert.equal(out.deepReading.chambers.funding.candidates[0].state, 'A_VERIFICAR');
  assert.equal(out.publishable, false);
  assert.equal(out.actionable, false);
  assert.equal(out.automatedDecision, false);
  assert.equal(out.humanValidationRequired, true);
  assert.equal(out.publicReturnRequiresSeparateHumanGate, true);
});
