'use strict';
// SPDX-License-Identifier: EUPL-1.2

function installedCapacity(assets = []) {
  const normalized = assets.filter(Boolean).map((asset) => ({
    id: asset.id || null,
    type: asset.type || 'unknown',
    territoryId: asset.territoryId || null,
    ownership: asset.ownership || null,
    condition: asset.condition || null,
    accessibility: asset.accessibility || null,
    utilisationEvidence: asset.utilisationEvidence || [],
    availability: asset.availability === true ? 'DOCUMENTED_AVAILABLE' : 'NOT_ASSUMED_AVAILABLE',
    evidenceIds: asset.evidenceIds || [],
  }));
  return { state: normalized.length ? 'CAPACITY_INVENTORY_READY' : 'NO_DOCUMENTED_CAPACITY', assets: normalized, humanValidationRequired: true };
}

module.exports = { installedCapacity };
