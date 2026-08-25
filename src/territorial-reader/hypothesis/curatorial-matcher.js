'use strict';
// SPDX-License-Identifier: EUPL-1.2

function curatorialMatches({ needTags = [], devices = [] } = {}) {
  const wanted = new Set(needTags);
  const candidates = devices.map((device) => {
    const matchingTags = (device.tags || []).filter((tag) => wanted.has(tag));
    return {
      id: device.id || null,
      title: device.title || null,
      matchingTags,
      evidenceRefs: device.evidenceRefs || [],
      state: matchingTags.length && (device.evidenceRefs || []).length ? 'CURATORIAL_CORRESPONDENCE_CANDIDATE' : 'INSUFFICIENT_CORRESPONDENCE',
      automaticallySelected: false,
      humanValidationRequired: true,
    };
  });
  return { state: 'CURATORIAL_MATCHING_EXPLAINABLE', candidates, rankingProduced: false, humanValidationRequired: true };
}

module.exports = { curatorialMatches };
