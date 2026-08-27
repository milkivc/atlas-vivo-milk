'use strict';
// SPDX-License-Identifier: EUPL-1.2

function structuralPressure({ pressureEvidence = [], components = [], limitEvidence = [], saturationEvidence = [], firstFailureEvidence = [] } = {}) {
  const failureCandidate = firstFailureEvidence.length ? {
    state: 'FIRST_FAILURE_POINT_CANDIDATE',
    evidence: [...firstFailureEvidence],
    factualConclusion: null,
  } : null;
  return {
    state: pressureEvidence.length && components.length ? 'STRUCTURAL_PRESSURE_PROFILE_READY' : 'INSUFFICIENT_EVIDENCE',
    pressureEvidence: [...pressureEvidence],
    components: [...components],
    limitEvidence: [...limitEvidence],
    saturationEvidence: [...saturationEvidence],
    firstFailurePoint: failureCandidate,
    inferredPersonalBehaviour: false,
    causalConclusion: null,
    humanValidationRequired: true,
  };
}

module.exports = { structuralPressure };
