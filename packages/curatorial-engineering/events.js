'use strict';

const CURATORIAL_EVENT_TYPES = Object.freeze([
  'COSMICOXES_SPIN',
  'LIVRO_CUBO_PAGE_TAP',
  'PALAVRA_RITUAL_SPOKEN',
  'BARULHO_VIVO_PLAY',
  'ORACULO_AR_ACTIVATED',
  'NUNO_CONTRIBUTION'
]);

function validateCuratorialEvent(event) {
  if (!event || typeof event !== 'object') return {ok:false, error:'EVENT_REQUIRED'};
  if (!CURATORIAL_EVENT_TYPES.includes(event.eventType)) return {ok:false, error:'UNKNOWN_EVENT_TYPE'};
  if (!event.deviceId) return {ok:false, error:'DEVICE_REQUIRED'};
  if (!event.occurredAt) return {ok:false, error:'TIME_REQUIRED'};
  if (!Array.isArray(event.provenanceIds)) return {ok:false, error:'PROVENANCE_REQUIRED'};
  if (event.eventType === 'NUNO_CONTRIBUTION' && event.payload && event.payload.ageConfirmed13Plus !== true) {
    return {ok:false, error:'AGE_GATE'};
  }
  return {ok:true};
}

function publicationEligible(event) {
  const validation = validateCuratorialEvent(event);
  return validation.ok && event.humanPublicationGate === true && event.provenanceIds.length > 0;
}

function degradedMode(event) {
  return {
    ...event,
    offline: true,
    payload: {...(event.payload || {}), networkDependentFeatures: false}
  };
}

module.exports = {CURATORIAL_EVENT_TYPES, validateCuratorialEvent, publicationEligible, degradedMode};
