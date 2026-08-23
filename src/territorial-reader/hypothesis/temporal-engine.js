'use strict';
// SPDX-License-Identifier: EUPL-1.2

function temporalProfile(evidence = []) {
  const dated = evidence
    .filter((item) => item && item.date && !Number.isNaN(Date.parse(item.date)))
    .map((item) => ({ id: item.id || null, date: new Date(item.date), claims: item.claims || [] }))
    .sort((a, b) => a.date - b.date);

  if (!dated.length) {
    return {
      state: 'NO_DATED_EVIDENCE',
      earliest: null,
      latest: null,
      durationDays: null,
      recurringClaims: [],
      humanValidationRequired: true,
    };
  }

  const counts = new Map();
  for (const item of dated) for (const claim of new Set(item.claims)) counts.set(claim, (counts.get(claim) || 0) + 1);
  const durationMs = dated.at(-1).date - dated[0].date;
  return {
    state: 'TEMPORAL_PROFILE_READY',
    earliest: dated[0].date.toISOString(),
    latest: dated.at(-1).date.toISOString(),
    durationDays: Math.floor(durationMs / 86400000),
    recurringClaims: [...counts.entries()].filter(([, count]) => count > 1).map(([claim, count]) => ({ claim, occurrences: count })),
    persistenceIsInterpretive: true,
    humanValidationRequired: true,
  };
}

module.exports = { temporalProfile };
