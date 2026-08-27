'use strict';
// SPDX-License-Identifier: EUPL-1.2

function sourceIndependence(evidence = []) {
  const groups = new Map();
  for (const item of evidence) {
    const key = item.dependencyKey || item.canonicalSource || item.source || item.id;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item.id || null);
  }
  return {
    evidenceCount: evidence.length,
    independentSourceCount: groups.size,
    dependencyGroups: [...groups.entries()].map(([key, ids]) => ({ key, ids })),
    independenceIsAssumption: true,
    humanValidationRequired: true,
  };
}

module.exports = { sourceIndependence };
