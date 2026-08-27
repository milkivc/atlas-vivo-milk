'use strict';
// SPDX-License-Identifier: EUPL-1.2

function publicReturn({ humanValidation, fragment = null, provenance = null, stateHistory = [], containsRawEvidence = false, exposesVulnerability = false, ranking = false } = {}) {
  const blocked = !humanValidation || humanValidation.validated !== true || containsRawEvidence || exposesVulnerability || ranking;
  if (blocked) {
    return { state: 'PUBLIC_RETURN_BLOCKED', publishable: false, reasons: [
      ...(!humanValidation || humanValidation.validated !== true ? ['HUMAN_VALIDATION_REQUIRED'] : []),
      ...(containsRawEvidence ? ['RAW_EVIDENCE_EXPOSURE'] : []),
      ...(exposesVulnerability ? ['VULNERABILITY_EXPOSURE'] : []),
      ...(ranking ? ['RANKING_PROHIBITED'] : []),
    ] };
  }
  return {
    state: 'PUBLIC_RETURN_CANDIDATE',
    publishable: true,
    fragment,
    provenance,
    stateHistory: [...stateHistory],
    rawInvisibleLayerExposed: false,
    ranking: false,
  };
}

module.exports = { publicReturn };
