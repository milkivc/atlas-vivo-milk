'use strict';
// SPDX-License-Identifier: EUPL-1.2

const DESERT_TYPES = new Set(['symbolic','convivencia','repertoire','cultural_access','dignified_free_time','mediation','cultural_infrastructure','social_infrastructure']);

function detectTerritorialDeserts(candidates = []) {
  const results = candidates.filter((c) => c && DESERT_TYPES.has(c.type)).map((c) => ({
    type: c.type,
    evidence: Array.isArray(c.explicitAbsenceEvidence) ? [...c.explicitAbsenceEvidence] : [],
    state: (c.explicitAbsenceEvidence || []).length ? 'DOCUMENTED_INSUFFICIENCY_CANDIDATE' : 'NOT_ESTABLISHED',
    stigmaScore: null,
    ranking: null,
    humanValidationRequired: true,
  }));
  return { state: 'TERRITORIAL_DESERT_READING_READY', results, publicRankingAllowed: false, humanValidationRequired: true };
}

module.exports = { detectTerritorialDeserts };
