'use strict';
// SPDX-License-Identifier: EUPL-1.2

function sourceIndependence(nodes = []) {
  const groups = new Map();
  for (const node of nodes) {
    const key = node.dependencyKey || node.canonicalSource || node.source || node.id;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(node.id || null);
  }
  return {
    evidenceCount: nodes.length,
    independentSourceCount: groups.size,
    dependencyGroups: [...groups.entries()].map(([dependencyKey, ids]) => ({ dependencyKey, ids })),
    state: 'DEPENDENCY_GROUPS_DECLARED',
    independenceIsAssumption: true,
    humanValidationRequired: true,
  };
}

module.exports = { sourceIndependence };
