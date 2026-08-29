'use strict';
// SPDX-License-Identifier: EUPL-1.2

const { fundingMatches } = require('../hypothesis/funding-matcher');

function asArray(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function normaliseText(value) {
  return String(value || '').trim();
}

function validOfficialUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && Boolean(url.hostname);
  } catch {
    return false;
  }
}

function deadlineState(deadline, now = new Date()) {
  if (!deadline) return 'DEADLINE_UNKNOWN';
  const parsed = new Date(deadline);
  if (Number.isNaN(parsed.getTime())) return 'DEADLINE_UNPARSEABLE';
  return parsed.getTime() >= now.getTime() ? 'OPEN_BY_DATE' : 'CLOSED_BY_DATE';
}

function keywordSet(values = []) {
  return new Set(asArray(values).map((value) => normaliseText(value).toLowerCase()).filter(Boolean));
}

function technicalOverlap(profileKeywords = [], opportunitySignals = []) {
  const profile = keywordSet(profileKeywords);
  const signals = keywordSet(opportunitySignals);
  const overlap = [...signals].filter((signal) => profile.has(signal));
  return {
    overlap,
    overlapCount: overlap.length,
    scoringIsEligibilityDecision: false,
  };
}

function normaliseOpportunity(raw = {}, { now = new Date(), profileKeywords = [] } = {}) {
  const sourceUrl = normaliseText(raw.sourceUrl);
  const evidence = asArray(raw.eligibilityEvidence).map(normaliseText).filter(Boolean);
  const technicalSignals = asArray(raw.technicalSignals).map(normaliseText).filter(Boolean);
  const sourceIsTraceable = validOfficialUrl(sourceUrl);

  return {
    programme: normaliseText(raw.programme) || null,
    call: normaliseText(raw.call) || null,
    sourceUrl: sourceIsTraceable ? sourceUrl : null,
    sourceAuthority: normaliseText(raw.sourceAuthority) || null,
    eligibilityEvidence: evidence,
    window: raw.window || null,
    deadline: raw.deadline || null,
    deadlineState: deadlineState(raw.deadline, now),
    cofinancing: raw.cofinancing ?? null,
    partnersRequired: raw.partnersRequired ?? null,
    technicalSignals,
    technicalFit: technicalOverlap(profileKeywords, technicalSignals),
    sourceIsTraceable,
    eligibilityDetermined: false,
    fundingGuaranteed: false,
    humanValidationRequired: true,
    dualHumanValidationRequired: true,
    validatorsRequired: [
      'Eduardo Maurício Vieira Cabral e Araujo (Eduardo Mauer)',
      'Nuno',
    ],
  };
}

function discoverFundingCandidates(rawCandidates = [], options = {}) {
  const normalised = asArray(rawCandidates).map((candidate) => normaliseOpportunity(candidate, options));
  const openOrUnknown = normalised.filter((candidate) => candidate.deadlineState !== 'CLOSED_BY_DATE');

  const matcherInput = openOrUnknown.map((candidate) => ({
    programme: candidate.programme,
    call: candidate.call,
    sourceUrl: candidate.sourceUrl,
    eligibilityEvidence: candidate.eligibilityEvidence,
    window: candidate.window || candidate.deadline,
    cofinancing: candidate.cofinancing,
    partnersRequired: candidate.partnersRequired,
  }));

  const matched = fundingMatches(matcherInput);

  return {
    generatedAt: new Date().toISOString(),
    candidatesScanned: normalised.length,
    candidatesOpenOrUnknown: openOrUnknown.length,
    candidates: openOrUnknown,
    fundingMatcher: matched,
    policy: {
      officialSourcesPreferred: true,
      eligibilityDecision: false,
      automatedApplication: false,
      fundingGuarantee: false,
      dualHumanValidationRequired: true,
    },
  };
}

module.exports = {
  deadlineState,
  technicalOverlap,
  normaliseOpportunity,
  discoverFundingCandidates,
};
