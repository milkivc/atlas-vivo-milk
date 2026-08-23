'use strict';
// SPDX-License-Identifier: EUPL-1.2

function inverseTerritorialProblem({ expectedConditions = [], observedEvidence = [] } = {}) {
  const observedClaims = new Set(observedEvidence.flatMap((item) => item.claims || []));

  return expectedConditions.map((condition) => {
    if (!condition || !condition.expectationId || !condition.provenance || !condition.expectedClaim) {
      throw new Error('QUALIFIED_EXPECTATION_REQUIRED');
    }
    const contrary = Array.isArray(condition.contraryClaims) ? condition.contraryClaims.filter((claim) => observedClaims.has(claim)) : [];
    const positive = observedClaims.has(condition.expectedClaim);
    return {
      expectationId: condition.expectationId,
      expectedClaim: condition.expectedClaim,
      provenance: condition.provenance,
      expectationType: condition.expectationType || 'documented_policy_or_territorial_reference',
      observedExpectedClaim: positive,
      contraryClaimsObserved: contrary,
      state: !positive && contrary.length ? 'INVERSE_PROBLEM_CANDIDATE' : 'NO_INVERSE_PROBLEM_ESTABLISHED',
      generatedExpectation: false,
      factualConclusion: null,
      publishable: false,
      humanValidationRequired: true,
    };
  });
}

module.exports = { inverseTerritorialProblem };
