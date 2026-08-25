'use strict';
// SPDX-License-Identifier: EUPL-1.2

const DIMENSIONS = Object.freeze(['spatial','institutional','mediation','repertoire','temporal','access','funding','governance']);

function problemFission(signals = []) {
  const dimensions = Object.fromEntries(DIMENSIONS.map((key) => [key, []]));
  for (const signal of signals) {
    if (!signal || !DIMENSIONS.includes(signal.dimension)) continue;
    dimensions[signal.dimension].push({
      id: signal.id || null,
      evidenceRef: signal.evidenceRef || null,
      statement: signal.statement || null,
    });
  }
  return {
    state: 'PROBLEM_DECOMPOSED_WITHOUT_CAUSAL_CLAIM',
    dimensions,
    causalConclusion: null,
    humanValidationRequired: true,
  };
}

module.exports = { DIMENSIONS, problemFission };
