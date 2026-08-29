'use strict';
// SPDX-License-Identifier: EUPL-1.2

const test = require('node:test');
const assert = require('node:assert/strict');
const {
  deadlineState,
  technicalOverlap,
  normaliseOpportunity,
  discoverFundingCandidates,
} = require('../funding/opportunity-discovery');

test('deadline state separates open and closed dates', () => {
  const now = new Date('2026-08-29T00:00:00Z');
  assert.equal(deadlineState('2026-10-06T17:59:59+01:00', now), 'OPEN_BY_DATE');
  assert.equal(deadlineState('2026-05-05T17:00:00Z', now), 'CLOSED_BY_DATE');
});

test('technical overlap is not treated as eligibility', () => {
  const fit = technicalOverlap(
    ['digital', 'culture', 'heritage'],
    ['culture', 'digital', 'startup']
  );
  assert.deepEqual(fit.overlap.sort(), ['culture', 'digital']);
  assert.equal(fit.scoringIsEligibilityDecision, false);
});

test('normalised opportunity preserves human gate and rejects non-https source', () => {
  const candidate = normaliseOpportunity({
    programme: 'Example',
    call: 'Call A',
    sourceUrl: 'http://example.test/call',
    deadline: '2026-12-01',
    eligibilityEvidence: ['legal entity required'],
  });
  assert.equal(candidate.sourceUrl, null);
  assert.equal(candidate.sourceIsTraceable, false);
  assert.equal(candidate.eligibilityDetermined, false);
  assert.equal(candidate.fundingGuaranteed, false);
  assert.equal(candidate.dualHumanValidationRequired, true);
  assert.deepEqual(candidate.validatorsRequired, [
    'Eduardo Maurício Vieira Cabral e Araujo (Eduardo Mauer)',
    'Nuno',
  ]);
});

test('discovery excludes candidates whose deadline is already closed', () => {
  const result = discoverFundingCandidates([
    {
      programme: 'Open Programme',
      call: 'Open Call',
      sourceUrl: 'https://example.org/open',
      deadline: '2026-10-01T17:00:00Z',
      eligibilityEvidence: ['source evidence'],
      technicalSignals: ['culture'],
    },
    {
      programme: 'Closed Programme',
      call: 'Closed Call',
      sourceUrl: 'https://example.org/closed',
      deadline: '2026-01-01T17:00:00Z',
      eligibilityEvidence: ['source evidence'],
      technicalSignals: ['culture'],
    },
  ], {
    now: new Date('2026-08-29T00:00:00Z'),
    profileKeywords: ['culture'],
  });

  assert.equal(result.candidatesScanned, 2);
  assert.equal(result.candidatesOpenOrUnknown, 1);
  assert.equal(result.candidates[0].programme, 'Open Programme');
  assert.equal(result.fundingMatcher.state, 'FUNDING_CANDIDATES_TO_VERIFY');
  assert.equal(result.fundingMatcher.fundingGuaranteed, false);
  assert.equal(result.policy.automatedApplication, false);
});
