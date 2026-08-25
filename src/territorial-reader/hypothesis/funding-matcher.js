'use strict';
// SPDX-License-Identifier: EUPL-1.2

function fundingMatches({ territorialEvidenceRefs = [], programmes = [] } = {}) {
  const candidates = programmes.map((programme) => {
    const checks = (programme.criteria || []).map((criterion) => ({
      criterion: criterion.id || criterion,
      verified: criterion.verified === true,
      evidenceRef: criterion.evidenceRef || null,
    }));
    return {
      id: programme.id || null,
      title: programme.title || null,
      checks,
      territorialEvidenceRefs: [...territorialEvidenceRefs],
      state: checks.length && checks.every((c) => c.verified && c.evidenceRef) && territorialEvidenceRefs.length ? 'ELIGIBILITY_CANDIDATE_A_VERIFICAR' : 'A_VERIFICAR',
      funded: false,
      guaranteedEligible: false,
      humanValidationRequired: true,
    };
  });
  return { state: 'FUNDING_CANDIDATES_A_VERIFICAR', candidates, rankingProduced: false, humanValidationRequired: true };
}

module.exports = { fundingMatches };
