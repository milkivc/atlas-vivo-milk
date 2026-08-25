'use strict';
// SPDX-License-Identifier: EUPL-1.2

function installedCapacity(facilities = []) {
  const items = facilities.map((facility) => ({
    id: facility.id || null,
    type: facility.type || null,
    placeId: facility.placeId || null,
    evidenceRef: facility.evidenceRef || null,
    exists: facility.exists === true ? true : facility.exists === false ? false : null,
    availability: facility.availability ?? 'UNKNOWN',
    accessibility: facility.accessibility ?? 'UNKNOWN',
    condition: facility.condition ?? 'UNKNOWN',
    publicReusePermission: facility.publicReusePermission ?? 'UNKNOWN',
    availabilityAssumedFromExistence: false,
  }));
  return { state: 'INSTALLED_CAPACITY_INVENTORY', items, humanValidationRequired: true };
}

module.exports = { installedCapacity };
