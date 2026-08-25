'use strict';
// SPDX-License-Identifier: EUPL-1.2

function stateTransitions(observations = []) {
  const byEntity = new Map();
  for (const item of observations.filter((x) => x && x.entityId && x.date && x.state)) {
    if (!byEntity.has(item.entityId)) byEntity.set(item.entityId, []);
    byEntity.get(item.entityId).push(item);
  }
  const transitions = [];
  for (const [entityId, items] of byEntity) {
    items.sort((a,b) => String(a.date).localeCompare(String(b.date)));
    for (let i = 1; i < items.length; i += 1) {
      if (items[i - 1].state === items[i].state) continue;
      transitions.push({
        entityId,
        from: items[i - 1].state,
        to: items[i].state,
        fromDate: items[i - 1].date,
        toDate: items[i].date,
        evidenceRefs: [items[i - 1].evidenceRef, items[i].evidenceRef].filter(Boolean),
        causalConclusion: null,
        state: 'DOCUMENTED_STATE_CHANGE',
      });
    }
  }
  return { state: 'STATE_TRANSITIONS_READY', transitions, humanValidationRequired: true };
}

module.exports = { stateTransitions };
