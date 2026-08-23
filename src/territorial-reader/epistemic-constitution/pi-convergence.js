'use strict';
// SPDX-License-Identifier: EUPL-1.2

function estimatePiLeibniz(iterations = 1000) {
  const n = Math.max(1, Math.min(Number(iterations) || 1, 1_000_000));
  let sum = 0;
  for (let i = 0; i < n; i += 1) sum += (i % 2 === 0 ? 1 : -1) / (2 * i + 1);
  const estimate = 4 * sum;
  return {
    estimate,
    iterations: n,
    absoluteError: Math.abs(Math.PI - estimate),
    mathematicalSource: 'Leibniz series for pi',
    literalScientificUse: 'mathematical demonstration only',
    authorialInterpretation: 'successive evidence may stabilize a hypothesis without closing the field',
    empiricalConfidence: null,
    limitation: 'Numerical convergence is never converted directly into territorial confidence.',
  };
}

module.exports = { estimatePiLeibniz };
