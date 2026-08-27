'use strict';
// SPDX-License-Identifier: EUPL-1.2

function curatorialMatches(candidates = []) {
  const matches = candidates.filter(Boolean).map((candidate) => ({
    deviceId: candidate.deviceId || null,
    name: candidate.name || null,
    evidenceLinks: candidate.evidenceLinks || [],
    territorialQuestion: candidate.territorialQuestion || null,
    physicalMechanism: candidate.physicalMechanism || null,
    digitalMechanism: candidate.digitalMechanism || null,
    accessibility: candidate.accessibility || null,
    territorialReturn: candidate.territorialReturn || null,
    risks: candidate.risks || [],
    state: 'CURATORIAL_CORRESPONDENCE_CANDIDATE',
  }));
  return { matches, selectedAutomatically: false, humanValidationRequired: true };
}

module.exports = { curatorialMatches };
