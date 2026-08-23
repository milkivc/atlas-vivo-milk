'use strict';
// SPDX-License-Identifier: EUPL-1.2

const GRAHAM_BOUNDARY = Object.freeze({
  mathematicalSource: 'Graham number: finite but extremely large',
  literalScientificUse: false,
  authorialInterpretation: 'symbolic warning against combinatorial explosion in relation graphs',
  operationalUse: 'complexity guard only; never compute the literal Graham number',
});

function complexityGuard({ nodes = 0, candidateEdges = 0, maxCandidateEdges = 50000 } = {}) {
  const exceeded = candidateEdges > maxCandidateEdges;
  return {
    exceeded,
    nodes,
    candidateEdges,
    maxCandidateEdges,
    action: exceeded ? 'PRUNE_BY_PROVENANCE_AND_RELEVANCE' : 'CONTINUE',
    literalGrahamComparison: false,
  };
}

module.exports = { GRAHAM_BOUNDARY, complexityGuard };
