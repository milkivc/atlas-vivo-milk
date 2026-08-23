'use strict';
// SPDX-License-Identifier: EUPL-1.2

const { evidenceQuantum } = require('../epistemic-constitution/planck-quantum');
const { qualifyAbsence } = require('../epistemic-constitution/hilbert-open-world');
const { complexityGuard } = require('../epistemic-constitution/graham-boundary');
const { nonMaleficenceGate } = require('../epistemic-constitution/non-maleficence-gate');
const { detectContradictions } = require('./contradiction-engine');
const { temporalProfile } = require('./temporal-engine');

class TerritorialHypothesisEngine {
  constructor({ maxCandidateEdges = 50000 } = {}) {
    this.maxCandidateEdges = maxCandidateEdges;
  }

  generate({ graph, claim, risks = [], absenceEvidence = [], searchedSources = [], candidateEdges = 0, metrologies = [] } = {}) {
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
      temporal,
      absence,
      metrologies,
      complexity,
      safety,
      epistemicStatus: {
        fact: false,
        hypothesis: true,
        openWorld: true,
        probability: null,
        confidenceScore: null,
      },
      publishable: false,
      actionable: false,
      automatedDecision: false,
      humanValidationRequired: true,
      funding: { state: 'A_VERIFICAR', candidates: [] },
      curatorialMatches: [],
    };
  }
}

module.exports = { TerritorialHypothesisEngine };
