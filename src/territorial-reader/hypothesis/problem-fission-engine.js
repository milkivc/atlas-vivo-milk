'use strict';
// SPDX-License-Identifier: EUPL-1.2

const DIMENSIONS = ['spatial','institutional','mediation','repertoire','temporal','access','funding','governance'];

function problemFission(problem = {}) {
  const components = DIMENSIONS
    .filter((dimension) => problem[dimension] !== undefined && problem[dimension] !== null)
    .map((dimension) => ({ dimension, evidence: problem[dimension], causalConclusion: null }));
  return {
    state: components.length ? 'DECOMPOSED_FOR_REVIEW' : 'INSUFFICIENT_EVIDENCE',
    components,
    causalChainEstablished: false,
    humanValidationRequired: true,
  };
}

module.exports = { DIMENSIONS, problemFission };
