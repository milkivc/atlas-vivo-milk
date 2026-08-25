'use strict';
// SPDX-License-Identifier: EUPL-1.2

const ALLOWED = new Set(['bank','table','wall','step','shade','climate_shelter','floor','useful_width','edge','obstacle','support_surface','pause_surface','lighting','route_continuity','interior_exterior','active_front','dead_front','accessibility','listening_support','conversation_support','writing_support','play_support','rest_support','permanence_support']);

function readSpatialMaterial(elements = []) {
  const observations = elements.filter((item) => item && ALLOWED.has(item.type)).map((item) => ({
    id: item.id || null,
    type: item.type,
    state: item.state || 'OBSERVED_UNQUALIFIED',
    evidenceRef: item.evidenceRef || null,
    placeId: item.placeId || null,
    observedAt: item.observedAt || null,
    personInference: null,
  }));
  return {
    state: observations.length ? 'SPATIAL_MATERIAL_READING_READY' : 'NO_SPATIAL_MATERIAL_EVIDENCE',
    observations,
    humanValidationRequired: true,
  };
}

module.exports = { readSpatialMaterial };
