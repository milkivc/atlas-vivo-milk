'use strict';
// SPDX-License-Identifier: EUPL-1.2

const crypto = require('node:crypto');

function stableHash(value) {
  return crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
}

class EvidenceGraph {
  constructor() {
    this.nodes = new Map();
    this.edges = [];
  }

  addNode(type, payload = {}) {
    if (!type) throw new Error('NODE_TYPE_REQUIRED');
    const id = payload.id || `${type}:${stableHash({ type, payload }).slice(0, 20)}`;
    const node = Object.freeze({ id, type, ...payload });
    this.nodes.set(id, node);
    return node;
  }

  addEdge(from, to, relation, evidence = {}) {
    if (!this.nodes.has(from) || !this.nodes.has(to)) throw new Error('EDGE_NODE_MISSING');
    if (!relation) throw new Error('EDGE_RELATION_REQUIRED');
    const edge = Object.freeze({
      id: `edge:${stableHash({ from, to, relation, evidence }).slice(0, 20)}`,
      from,
      to,
      relation,
      evidence,
      epistemicState: evidence.epistemicState || 'A_CONFIRMAR',
      automatedDecision: false,
    });
    this.edges.push(edge);
    return edge;
  }

  independentSources(nodeId) {
    const sourceIds = new Set();
    for (const edge of this.edges) {
      if (edge.to !== nodeId && edge.from !== nodeId) continue;
      const sourceId = edge.evidence && edge.evidence.sourceId;
      const dependencyRoot = edge.evidence && edge.evidence.dependencyRoot;
      if (sourceId) sourceIds.add(dependencyRoot || sourceId);
    }
    return [...sourceIds];
  }

  snapshot() {
    return {
      nodes: [...this.nodes.values()],
      edges: [...this.edges],
      state: 'PENDENTE_VALIDACAO_HUMANA',
      automatedDecision: false,
    };
  }
}

module.exports = { EvidenceGraph, stableHash };
