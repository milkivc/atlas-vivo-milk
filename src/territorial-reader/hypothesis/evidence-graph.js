'use strict';
// SPDX-License-Identifier: EUPL-1.2

const crypto = require('node:crypto');

function sha256(value) {
  return crypto.createHash('sha256').update(String(value)).digest('hex');
}

class EvidenceGraph {
  constructor(territoryId) {
    if (!territoryId) throw new Error('TERRITORY_ID_REQUIRED');
    this.territoryId = territoryId;
    this.nodes = new Map();
    this.edges = [];
  }

  addEvidence(evidence) {
    if (!evidence || !evidence.source || evidence.content === undefined) throw new Error('EVIDENCE_SOURCE_AND_CONTENT_REQUIRED');
    const normalized = {
      id: evidence.id || sha256(`${this.territoryId}|${evidence.source}|${evidence.content}|${evidence.date || ''}`),
      source: evidence.source,
      sourceType: evidence.sourceType || 'unknown',
      sourceAuthority: evidence.sourceAuthority || null,
      content: evidence.content,
      quote: evidence.quote ?? evidence.content,
      date: evidence.date || null,
      hash: evidence.hash || sha256(evidence.content),
      dependencyKey: evidence.dependencyKey || evidence.canonicalSource || evidence.source,
      claims: Array.isArray(evidence.claims) ? [...evidence.claims] : [],
      signals: Array.isArray(evidence.signals) ? [...evidence.signals] : [],
      state: 'PRESERVED_EVIDENCE',
    };
    this.nodes.set(normalized.id, normalized);
    return normalized;
  }

  addRelation(fromId, toId, type, metadata = {}) {
    if (!this.nodes.has(fromId) || !this.nodes.has(toId)) throw new Error('RELATION_ENDPOINT_MISSING');
    const edge = { from: fromId, to: toId, type, metadata, humanValidationRequired: true };
    this.edges.push(edge);
    return edge;
  }

  independentEvidenceForClaim(claim) {
    const matching = [...this.nodes.values()].filter((node) => node.claims.includes(claim));
    const groups = new Map();
    for (const node of matching) {
      const key = node.dependencyKey;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(node.id);
    }
    return {
      claim,
      evidenceCount: matching.length,
      independentSourceCount: groups.size,
      dependencyGroups: [...groups.entries()].map(([key, ids]) => ({ key, ids })),
      independenceIsAssumption: true,
    };
  }

  serialize() {
    return {
      territoryId: this.territoryId,
      nodes: [...this.nodes.values()],
      edges: [...this.edges],
      closedWorld: false,
      humanValidationRequired: true,
    };
  }
}

module.exports = { EvidenceGraph, sha256 };
