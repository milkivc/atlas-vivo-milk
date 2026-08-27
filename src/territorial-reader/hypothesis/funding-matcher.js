'use strict';
// SPDX-License-Identifier: EUPL-1.2

function fundingMatches(candidates = []) {
  const matches = candidates.filter(Boolean).map((candidate) => ({
    programme: candidate.programme || null,
    call: candidate.call || null,
    sourceUrl: candidate.sourceUrl || null,
    eligibilityEvidence: candidate.eligibilityEvidence || [],
    window: candidate.window || null,
    cofinancing: candidate.cofinancing || null,
    partnersRequired: candidate.partnersRequired || null,
    state: candidate.sourceUrl ? 'A_VERIFICAR' : 'SOURCE_REQUIRED',
    funded: false,
  }));
  return { state: matches.length ? 'FUNDING_CANDIDATES_TO_VERIFY' : 'NO_CANDIDATES', matches, fundingGuaranteed: false, humanValidationRequired: true };
}

module.exports = { fundingMatches };
