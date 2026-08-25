'use strict';
// SPDX-License-Identifier: EUPL-1.2

const { evidenceQuantum } = require('../epistemic-constitution/planck-quantum');
const { qualifyAbsence } = require('../epistemic-constitution/hilbert-open-world');
const { complexityGuard } = require('../epistemic-constitution/graham-boundary');
const { nonMaleficenceGate } = require('../epistemic-constitution/non-maleficence-gate');
const { uncertaintyEnvelope } = require('../epistemic-constitution/heisenberg-uncertainty');
const { detectContradictions } = require('./contradiction-engine');
const { temporalProfile } = require('./temporal-engine');
const { detectWeakSignals } = require('./weak-signal-detector');
const { inverseTerritorialProblem } = require('./inverse-territorial-problem');
const { deepTerritorialReading } = require('./deep-reading-engine');

class TerritorialHypothesisEngine {
  constructor({ maxCandidateEdges = 50000, minIndependentWeakSignalSources = 2 } = {}) {
    this.maxCandidateEdges = maxCandidateEdges;
    this.minIndependentWeakSignalSources = minIndependentWeakSignalSources;
  }

  generate({
    graph,
    claim,
    risks = [],
    absenceEvidence = [],
    searchedSources = [],
    candidateEdges = 0,
    metrologies = [],
    expectedConditions = [],
    known = [],
    unknown = [],
    alternatives = [],
    deepReadingInput = {},
  } = {}) {
    if (!graph || typeof graph.serialize !== 'function') throw new Error('EVIDENCE_GRAPH_REQUIRED');
    if (!claim) throw new Error('CLAIM_REQUIRED');

    const serialized = graph.serialize();
    const quantum = evidenceQuantum(serialized.nodes.map((node) => ({ source: node.source, hash: node.hash, quote: node.quote })));
    if (!quantum.admissible) {
      return {
        state: 'INSUFFICIENT_EVIDENCE',
        claim,
        publishable: false,
        actionable: false,
        humanValidationRequired: true,
        reasons: ['NO_PRESERVED_EVIDENCE_OBJECT'],
      };
    }

    const independence = graph.independentEvidenceForClaim(claim);
    const allClaims = serialized.nodes.flatMap((node) => node.claims || []);
    const contradictions = detectContradictions(allClaims);
    const temporal = temporalProfile(serialized.nodes);
    const absence = qualifyAbsence({ searchedSources, explicitAbsenceEvidence: absenceEvidence });
    const complexity = complexityGuard({ nodes: serialized.nodes.length, candidateEdges, maxCandidateEdges: this.maxCandidateEdges });
    const safety = nonMaleficenceGate({ risks, requestedAction: 'ANALYSE' });
    const weakSignals = detectWeakSignals(serialized.nodes, { minIndependentSources: this.minIndependentWeakSignalSources });
    const inverseProblems = inverseTerritorialProblem({ expectedConditions, observedEvidence: serialized.nodes });
    const uncertainty = uncertaintyEnvelope({ known, unknown, alternatives });
    const deepReading = deepTerritorialReading(deepReadingInput);

    return {
      state: safety.blockingRisks.length ? 'BLOCKED_PENDING_HUMAN_REVIEW' : 'HYPOTHESIS_CANDIDATE',
      hypothesisId: `H-${String(graph.territoryId).toUpperCase()}-${String(claim).replace(/[^A-Z0-9]+/gi, '_').toUpperCase()}`,
      territoryId: graph.territoryId,
      claim,
      evidence: {
        preservedObjects: serialized.nodes.length,
        independentSourceCount: independence.independentSourceCount,
        dependencyGroups: independence.dependencyGroups,
      },
      contradictions,
      weakSignals,
      inverseProblems,
      temporal,
      absence,
      metrologies,
      complexity,
      safety,
      uncertainty,
      deepReading,
      epistemicStatus: {
        fact: false,
        hypothesis: true,
        openWorld: true,
        probability: null,
        confidenceScore: null,
        literalQuantumPhysicsApplied: false,
      },
      publishable: false,
      actionable: false,
      automatedDecision: false,
      humanValidationRequired: true,
      funding: deepReading.chambers.funding,
      curatorialMatches: deepReading.chambers.curatorial,
      publicReturnRequiresSeparateHumanGate: true,
    };
  }
}

module.exports = { TerritorialHypothesisEngine };
