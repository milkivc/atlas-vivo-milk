'use strict';
// SPDX-License-Identifier: EUPL-1.2

const fs = require('node:fs');
const path = require('node:path');
const { discoverFundingCandidates } = require('../../src/territorial-reader/funding/opportunity-discovery');

const root = path.resolve(__dirname, '../..');
const input = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(root, 'data/funding/official-opportunities-2026-08-29.json');
const output = process.argv[3]
  ? path.resolve(process.argv[3])
  : path.join(root, 'metadata/generated/territorio-do-corpo/funding-candidates.json');

const source = JSON.parse(fs.readFileSync(input, 'utf8'));
const result = discoverFundingCandidates(source.opportunities, {
  now: new Date(),
  profileKeywords: source.profileKeywords || []
});

const payload = {
  schema: 'milk_funding_candidates_v2',
  sourceAsOf: source.asOf,
  generatedAt: new Date().toISOString(),
  institution: source.institution,
  ...result,
  humanDecision: null,
  humanReviewRequired: true,
  automatedEligibilityDecision: false,
  automatedApplication: false,
  dualHumanValidationRequiredByDataCollectionRule: false,
  note: 'A regra de dupla validação humana com Nuno aplica-se à recolha de dados, não à triagem ou implementação de financiamento.'
};

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(payload, null, 2) + '\n', 'utf8');
process.stdout.write(JSON.stringify({ output: path.relative(root, output), count: payload.candidatesOpenOrUnknown }, null, 2) + '\n');
