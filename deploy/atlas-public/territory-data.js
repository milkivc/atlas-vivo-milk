const DATA_URL = new URL('./territorios-publicos.json', import.meta.url);
const EXPECTED_COUNT = 826;

function isFiniteCoordinate(value, min, max) {
  return Number.isFinite(value) && value >= min && value <= max;
}

function validateRecord(record) {
  return Boolean(
    record &&
    record.validated === true &&
    typeof record.id === 'string' &&
    record.id.length > 0 &&
    typeof record.titulo === 'string' &&
    typeof record.territorio_chave === 'string' &&
    record.territorio_chave.length > 0 &&
    isFiniteCoordinate(record.latitude, 29, 43) &&
    isFiniteCoordinate(record.longitude, -32, -6) &&
    record.estado_publicacao === 'APROVADO_PARA_EXPORTACAO' &&
    record.milk_asset_key === 'vaquinha_constelacao_brilho'
  );
}

export async function loadValidatedTerritories() {
  const response = await fetch(DATA_URL, {
    cache: 'no-store',
    credentials: 'same-origin',
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) throw new Error('ATLAS_TERRITORY_DATA_UNAVAILABLE');

  const payload = await response.json();
  if (
    payload?.layer !== 'public' ||
    payload?.projection !== 'PUBLIC-ONLY' ||
    payload?.validated !== true ||
    payload?.record_count !== EXPECTED_COUNT ||
    !Array.isArray(payload.records) ||
    payload.records.length !== EXPECTED_COUNT
  ) {
    throw new Error('ATLAS_TERRITORY_DATA_CONTRACT_REJECTED');
  }

  const identifiers = new Set();
  for (const record of payload.records) {
    if (!validateRecord(record) || identifiers.has(record.id)) {
      throw new Error('ATLAS_TERRITORY_RECORD_REJECTED');
    }
    identifiers.add(record.id);
  }
  return Object.freeze(payload.records);
}

function featureCollection(records) {
  return {
    type: 'FeatureCollection',
    features: records.map(record => ({
      type: 'Feature',
      id: record.id,
      geometry: {
        type: 'Point',
        coordinates: [record.longitude, record.latitude, 80],
      },
      properties: {
        atlasId: record.id,
        titulo: record.titulo,
        territorialScope: record.territorial_scope,
      },
    })),
  };
}

function pickedIdentifier(item) {
  return item?.object?.feature?.properties?.atlasId ??
    item?.feature?.properties?.atlasId ??
    item?.properties?.atlasId ??
    item?.object?.properties?.atlasId ??
    null;
}

export async function mountTerritorialMilks({
  view,
  itowns,
  records,
  container,
  statusElement,
  onSelect,
}) {
  if (!view || !itowns || !container || records.length !== EXPECTED_COUNT) {
    throw new Error('ATLAS_TERRITORY_MOUNT_REJECTED');
  }

  const source = new itowns.FileSource({
    fetchedData: featureCollection(records),
    crs: 'EPSG:4326',
    format: 'application/json',
  });
  const style = new itowns.Style({
    point: {
      color: '#dff7ff',
      radius: 6,
      line: '#5fd4ff',
      width: 2,
      icon: 'assets/milk-territorial.png',
      iconSize: 24,
    },
  });
  const layer = new itowns.FeatureGeometryLayer('atlas-territorial-milks', {
    source,
    style,
    zoom: { min: 1, max: 22 },
  });

  await view.addLayer(layer);
  const byId = new Map(records.map(record => [record.id, record]));

  const select = event => {
    const picked = view.pickObjectsAt(event, 8, layer);
    const identifier = pickedIdentifier(picked?.[0]);
    const record = identifier ? byId.get(identifier) : null;
    if (record) onSelect?.(record);
  };
  container.addEventListener('click', select);
  if (statusElement) {
    statusElement.textContent = '826 festas vivem no globo. Toca numa MILK para abrir o território.';
  }

  return {
    count: records.length,
    destroy() {
      container.removeEventListener('click', select);
      view.removeLayer(layer.id);
    },
  };
}
