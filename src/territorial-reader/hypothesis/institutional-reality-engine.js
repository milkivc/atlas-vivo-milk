'use strict';
// SPDX-License-Identifier: EUPL-1.2

function institutionalReality(pairs = []) {
  const relations = pairs.map((pair) => {
    const claimDocumented = Boolean(pair && pair.claimEvidenceRef);
    const executionDocumented = Boolean(pair && pair.executionEvidenceRef);
    let state = 'INSUFFICIENT_EVIDENCE';
    if (claimDocumented && executionDocumented) state = pair.claimState === pair.executionState ? 'DOCUMENTED_ALIGNMENT' : 'DOCUMENTED_MISMATCH_CANDIDATE';
    else if (claimDocumented && pair.explicitNonExecutionEvidenceRef) state = 'DOCUMENTED_NON_EXECUTION_CANDIDATE';
    return {
      subject: pair?.subject || null,
      claimEvidenceRef: pair?.claimEvidenceRef || null,
      executionEvidenceRef: pair?.executionEvidenceRef || null,
      explicitNonExecutionEvidenceRef: pair?.explicitNonExecutionEvidenceRef || null,
      state,
      causalConclusion: null,
      humanValidationRequired: true,
    };
  });
  return { state: 'INSTITUTIONAL_REALITY_READY', relations, humanValidationRequired: true };
}

module.exports = { institutionalReality };
