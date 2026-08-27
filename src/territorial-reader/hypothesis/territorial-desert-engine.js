'use strict';
// SPDX-License-Identifier: EUPL-1.2

const DESERT_TYPES = Object.freeze(['SYMBOLIC','CONVIVIALITY','REPERTOIRE','CULTURAL_ACCESS','DIGNIFIED_FREE_TIME','MEDIATION','CULTURAL_INFRASTRUCTURE','SOCIAL_INFRASTRUCTURE']);

function territorialDeserts(documentedAbsences = []) {
  const candidates = documentedAbsences
    .filter((item) => item && DESERT_TYPES.includes(item.type) && Array.isArray(item.evidenceIds) && item.evidenceIds.length)
    .map((item) => ({ ...item, state: 'DESERT_HYPOTHESIS_CANDIDATE', publicRanking: false }));
  return { state: candidates.length ? 'DESERT_CANDIDATES_READY' : 'INSUFFICIENT_EVIDENCE', candidates, publicRanking: false, humanValidationRequired: true };
}

module.exports = { DESERT_TYPES, territorialDeserts };
