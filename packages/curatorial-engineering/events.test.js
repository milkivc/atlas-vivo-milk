'use strict';

const assert = require('assert');
const {CURATORIAL_EVENT_TYPES, validateCuratorialEvent, publicationEligible, degradedMode} = require('./events');

assert.strictEqual(CURATORIAL_EVENT_TYPES.length, 6);
assert(CURATORIAL_EVENT_TYPES.includes('COSMICOXES_SPIN'));
assert(CURATORIAL_EVENT_TYPES.includes('NUNO_CONTRIBUTION'));

const base = {
  id:'evt-1',
  eventType:'COSMICOXES_SPIN',
  deviceId:'cosmicoxes-1',
  occurredAt:new Date().toISOString(),
  offline:false,
  humanPublicationGate:false,
  provenanceIds:['source-1'],
  payload:{}
};
assert.deepStrictEqual(validateCuratorialEvent(base), {ok:true});
assert.strictEqual(publicationEligible(base), false);
assert.strictEqual(publicationEligible({...base, humanPublicationGate:true}), true);
assert.strictEqual(degradedMode(base).offline, true);
assert.strictEqual(degradedMode(base).payload.networkDependentFeatures, false);

const nunoMinor = {
  ...base,
  eventType:'NUNO_CONTRIBUTION',
  deviceId:'nuno',
  humanPublicationGate:true,
  payload:{ageConfirmed13Plus:false, consentPublic:true}
};
assert.deepStrictEqual(validateCuratorialEvent(nunoMinor), {ok:false, error:'AGE_GATE'});
assert.strictEqual(publicationEligible(nunoMinor), false);

const noProvenance = {...base, provenanceIds:[], humanPublicationGate:true};
assert.strictEqual(publicationEligible(noProvenance), false);

console.log(JSON.stringify({state:'CURATORIAL_ENGINEERING_RUNTIME_TESTED', tests:10, passed:10}));
