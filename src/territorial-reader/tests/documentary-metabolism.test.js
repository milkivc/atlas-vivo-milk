'use strict';
// SPDX-License-Identifier: EUPL-1.2

const test = require('node:test');
const assert = require('node:assert/strict');
const { sourceRecord, sha256 } = require('../documentary/source-record');
const { DocumentarySweepEngine } = require('../documentary/sweep-engine');
const { documentaryMetabolism } = require('../documentary/metabolism-engine');

function record(overrides = {}) {
  return sourceRecord({
    id: overrides.id || 'd1', type: overrides.type || 'ATA', url: overrides.url || 'https://example.pt/a', approvedHost: 'example.pt',
    authority: 'Entidade documentada', territoryId: 'milk:territory:parish:1', fetchedAt: '2026-08-27T00:00:00Z',
    documentDate: overrides.documentDate || '2026-01-01', contentHash: overrides.contentHash || sha256(overrides.id || 'd1'),
    dependencyKey: overrides.dependencyKey || null, formalKey: overrides.formalKey || null, semanticKey: overrides.semanticKey || null,
    issueKey: overrides.issueKey || null, relationKey: overrides.relationKey || null, claimTypes: overrides.claimTypes || [],
  });
}

test('registo documental exige HTTPS, host explicitamente aprovado, território e SHA-256', () => {
  assert.throws(() => sourceRecord({ id:'x', type:'ATA', url:'http://example.pt/a', approvedHost:'example.pt', authority:'x', territoryId:'t', fetchedAt:'x', contentHash:sha256('x') }), /HTTPS_REQUIRED/);
  const item = record();
  assert.equal(item.externalContentTrust, 'UNTRUSTED_CONTENT');
  assert.equal(item.originalPreserved, true);
});

test('varrimento falha fechado e nunca cria documento substituto', async () => {
  const fetchImpl = async () => ({ ok:false, status:404, headers:new Map(), arrayBuffer:async()=>new ArrayBuffer(0) });
  const engine = new DocumentarySweepEngine({ fetchImpl });
  const out = await engine.sweep([{ id:'x', type:'ATA', url:'https://example.pt/x', approvedHost:'example.pt', authority:'x', territoryId:'t' }]);
  assert.equal(out.failures[0].fabricatedFallbackUsed, false);
  assert.equal(out.records.length, 0);
});

test('duplicado binário é identificado sem apagar ou fundir originais', () => {
  const hash = sha256('same');
  const out = documentaryMetabolism([record({id:'a',contentHash:hash}), record({id:'b',contentHash:hash})]);
  assert.equal(out.exactDuplicates.length, 1);
  assert.equal(out.exactDuplicates[0].mergeAutomatic, false);
  assert.equal(out.originalsPreserved, true);
});

test('candidato semântico nunca é fusão automática', () => {
  const out = documentaryMetabolism([record({id:'a',semanticKey:'tema-x'}), record({id:'b',semanticKey:'tema-x'})]);
  assert.equal(out.semanticCandidates[0].state, 'SEMANTIC_DUPLICATE_CANDIDATE');
  assert.equal(out.semanticMergeAutomatic, false);
});

test('fontes dependentes/copiadas contam como um grupo independente', () => {
  const out = documentaryMetabolism([record({id:'a',dependencyKey:'origem-1'}), record({id:'b',dependencyKey:'origem-1'}), record({id:'c',dependencyKey:'origem-2'})]);
  assert.equal(out.independentSourceCount, 2);
});

test('promessa sem execução ligada não prova ausência de execução', () => {
  const out = documentaryMetabolism([record({id:'p',relationKey:'obra-1',claimTypes:['PROMISE']})]);
  assert.equal(out.promiseExecution[0].state, 'PROMISE_WITHOUT_LINKED_EXECUTION_IN_CONSULTED_CORPUS');
  assert.equal(out.promiseExecution[0].executionAbsenceProven, false);
  assert.equal(out.missingLinkedExecutionMeansAbsence, false);
});

test('recorrência e volume documental nunca viram prova ou causalidade automática', () => {
  const out = documentaryMetabolism([record({id:'a',issueKey:'i'}), record({id:'b',issueKey:'i'})]);
  assert.equal(out.recurrence[0].state, 'RECURRENCE_CANDIDATE');
  assert.equal(out.volumeIsProof, false);
  assert.equal(out.causalConclusionAutomatic, false);
});
