'use strict';
// SPDX-License-Identifier: EUPL-1.2

function detectWeakSignals(evidence = [], { minIndependentSources = 2 } = {}) {
  const bySignal = new Map();
  for (const item of evidence) {
    for (const signal of item.signals || []) {
      if (!bySignal.has(signal)) bySignal.set(signal, []);
      bySignal.get(signal).push(item);
    }
  }

  return [...bySignal.entries()].map(([signal, items]) => {
    const dependencyKeys = new Set(items.map((item) => item.dependencyKey || item.canonicalSource || item.source));
    return {
      signal,
      evidenceCount: items.length,
      independentSourceCount: dependencyKeys.size,
      state: dependencyKeys.size >= minIndependentSources ? 'WEAK_SIGNAL_CONVERGENCE_CANDIDATE' : 'WEAK_SIGNAL_UNCORROBORATED',
      probability: null,
      factualConclusion: null,
      humanValidationRequired: true,
      evidenceIds: items.map((item) => item.id || null),
    };
  });
}

module.exports = { detectWeakSignals };
