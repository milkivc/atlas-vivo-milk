'use strict';
// SPDX-License-Identifier: EUPL-1.2

function groupsBy(records, keyName) {
  const map = new Map();
  for (const record of records) {
    const key = record[keyName];
    if (!key) continue;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(record.id);
  }
  return [...map.entries()].filter(([, ids]) => ids.length > 1).map(([key, ids]) => ({ key, ids }));
}

function dependencyGroups(records = []) {
  const map = new Map();
  for (const record of records) {
    const key = record.dependencyKey || `source:${record.sourceUrl}`;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(record.id);
  }
  return [...map.entries()].map(([key, ids]) => ({ key, ids }));
}

function promiseExecutionRelations(records = []) {
  const byRelation = new Map();
  for (const record of records) {
    if (!record.relationKey) continue;
    if (!byRelation.has(record.relationKey)) byRelation.set(record.relationKey, []);
    byRelation.get(record.relationKey).push(record);
  }
  return [...byRelation.entries()].map(([relationKey, items]) => {
    const promises = items.filter((item) => item.claimTypes.includes('PROMISE')).map((item) => item.id);
    const executions = items.filter((item) => item.claimTypes.includes('EXECUTION')).map((item) => item.id);
    let state = 'RELATION_DOCUMENTED_WITHOUT_PROMISE_EXECUTION_PAIR';
    if (promises.length && executions.length) state = 'PROMISE_AND_EXECUTION_BOTH_DOCUMENTED';
    else if (promises.length) state = 'PROMISE_WITHOUT_LINKED_EXECUTION_IN_CONSULTED_CORPUS';
    else if (executions.length) state = 'EXECUTION_WITHOUT_LINKED_PROMISE_IN_CONSULTED_CORPUS';
    return { relationKey, promiseIds: promises, executionIds: executions, state, executionAbsenceProven: false };
  });
}

function documentaryMetabolism(records = []) {
  const exactDuplicates = groupsBy(records, 'contentHash').map((group) => ({ ...group, state: 'BINARY_DUPLICATE_GROUP', mergeAutomatic: false }));
  const formalCandidates = groupsBy(records, 'formalKey').map((group) => ({ ...group, state: 'FORMAL_DUPLICATE_CANDIDATE', mergeAutomatic: false }));
  const semanticCandidates = groupsBy(records, 'semanticKey').map((group) => ({ ...group, state: 'SEMANTIC_DUPLICATE_CANDIDATE', mergeAutomatic: false }));
  const recurrence = groupsBy(records, 'issueKey').map((group) => ({ ...group, state: 'RECURRENCE_CANDIDATE', causalConclusion: null }));
  const dependencies = dependencyGroups(records);
  const independentSourceCount = dependencies.length;
  const chronology = [...records].sort((a, b) => String(a.documentDate || a.fetchedAt).localeCompare(String(b.documentDate || b.fetchedAt))).map((record) => record.id);
  const explicitOmissions = records.filter((record) => record.claimTypes.includes('OMISSION_EXPLICIT')).map((record) => record.id);
  const continuity = records.filter((record) => record.claimTypes.includes('CONTINUITY')).map((record) => record.id);
  const interruptions = records.filter((record) => record.claimTypes.includes('INTERRUPTION')).map((record) => record.id);
  return {
    state: 'DOCUMENTARY_METABOLISM_READY_FOR_HUMAN_REVIEW', recordCount: records.length, chronology,
    exactDuplicates, formalCandidates, semanticCandidates, recurrence, dependencyGroups: dependencies,
    independentSourceCount, promiseExecution: promiseExecutionRelations(records), explicitOmissions, continuity, interruptions,
    originalsPreserved: true, semanticMergeAutomatic: false, volumeIsProof: false, causalConclusionAutomatic: false,
    missingLinkedExecutionMeansAbsence: false, humanValidationRequired: true,
  };
}

module.exports = { documentaryMetabolism, dependencyGroups, promiseExecutionRelations };
