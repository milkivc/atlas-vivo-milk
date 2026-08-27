'use strict';
// SPDX-License-Identifier: EUPL-1.2

const { evidenceQuantum } = require('../epistemic-constitution/planck-quantum');
const { complexityGuard } = require('../epistemic-constitution/graham-boundary');
const { nonMaleficenceGate } = require('../epistemic-constitution/non-maleficence-gate');
const { expressUncertainty } = require('../epistemic-constitution/heisenberg-uncertainty');
const { detectContradictions } = require('./contradiction-engine');
const { temporalProfile } = require('./temporal-engine');
const { detectWeakSignals } = require('./weak-signal-detector');
const { inverseTerritorialProblem } = require('./inverse-territorial-problem');
const { territorialLensing } = require('./territorial-lensing-engine');
const { problemFission } = require('./problem-fission-engine');
const { stateTransitions } = require('./state-transition-engine');
const { spatialMaterialProfile } = require('./spatial-material-engine');
const { structuralPressure } = require('./structural-pressure-engine');
const { absenceProfile } = require('./absence-engine');
const { institutionalReality } = require('./institutional-reality-engine');
const { installedCapacity } = require('./installed-capacity-engine');
const { symbolicVitality } = require('./symbolic-vitality-engine');
const { territorialDeserts } = require('./territorial-desert-engine');
const { possibilityEngine } = require('./possibility-engine');
const { curatorialMatches } = require('./curatorial-matcher');
const { fundingMatches } = require('./funding-matcher');

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
    unknowns = [],
    limitations = [],
    alternatives = [],
    observedEffects = [],
    latentCauseCandidates = [],
    problemDimensions = {},
    transitions = [],
    spatialObservations = {},
    structuralPressureInput = {},
    institutionalInput = {},
    capacityAssets = [],
    symbolicInput = {},
    documentedDeserts = [],
    possibilityResponses = {},
    curatorialCandidates = [],
    fundingCandidates = [],
  } = {}) {
    if (!graph || typeof graph.serialize !== 'function') throw new Error('EVIDENCE_GRAPH_REQUIRED');
    if (!claim) throw new Error('CLAIM_REQUIRED');

    const serialized = graph.serialize();
    const quantum = evidenceQuantum(serialized.nodes.map((node) => ({ source: node.source, hash: node.hash, quote: node.quote })));
    if (!quantum.admissible) {
      return {
        state: 'INSUFFICIENT_EVIDENCE', claim, publishable: false, actionable: false,
        humanValidationRequired: true, reasons: ['NO_PRESERVED_EVIDENCE_OBJECT'],
      };
    }

    const independence = graph.independentEvidenceForClaim(claim);
    const allClaims = serialized.nodes.flatMap((node) => node.claims || []);
    const contradictions = detectContradictions(allClaims);
    const temporal = temporalProfile(serialized.nodes);
    const absence = absenceProfile({ searchedSources, explicitAbsenceEvidence: absenceEvidence });
    const complexity = complexityGuard({ nodes: serialized.nodes.length, candidateEdges, maxCandidateEdges: this.maxCandidateEdges });
    const safety = nonMaleficenceGate({ risks, requestedAction: 'ANALYSE' });
    const weakSignals = detectWeakSignals(serialized.nodes, { minIndependentSources: this.minIndependentWeakSignalSources });
    const inverseProblems = inverseTerritorialProblem({ expectedConditions, observedEvidence: serialized.nodes });
    const uncertainty = expressUncertainty({
      known: serialized.nodes.map((node) => node.id), unknown: unknowns, limitations, alternatives,
    });
    const lensing = territorialLensing({ observedEffects, candidateLatentCauses: latentCauseCandidates });
    const fission = problemFission(problemDimensions);
    const transitionProfile = stateTransitions(transitions);
    const spatialMaterial = spatialMaterialProfile(spatialObservations);
    const pressure = structuralPressure(structuralPressureInput);
    const institutional = institutionalReality(institutionalInput);
    const capacity = installedCapacity(capacityAssets);
    const symbolic = symbolicVitality(symbolicInput);
    const deserts = territorialDeserts(documentedDeserts);
    const possibilities = possibilityEngine(possibilityResponses);
    const curatorial = curatorialMatches(curatorialCandidates);
    const funding = fundingMatches(fundingCandidates);

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
      uncertainty,
      lensing,
      fission,
      transitions: transitionProfile,
      spatialMaterial,
      structuralPressure: pressure,
      institutionalReality: institutional,
      installedCapacity: capacity,
      symbolicVitality: symbolic,
      territorialDeserts: deserts,
      possibilities,
      metrologies,
      complexity,
      safety,
      epistemicStatus: {
        fact: false,
        hypothesis: true,
        openWorld: true,
        probability: null,
        confidenceScore: null,
        uncertaintyExplicit: true,
      },
      publishable: false,
      actionable: false,
      automatedDecision: false,
      humanValidationRequired: true,
      funding: { state: funding.state, candidates: funding.matches },
      curatorialMatches: curatorial.matches,
    };
  }
}

module.exports = { TerritorialHypothesisEngine };
