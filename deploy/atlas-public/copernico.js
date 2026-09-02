const ITOWNS_BUNDLE_URL = new URL('./vendor/itowns/itowns.umd.js', import.meta.url).href;
const COPERNICUS_WMS_HOST = 'sh.dataspace.copernicus.eu';

let itownsPromise = null;

function loadItowns() {
  if (window.itowns) return Promise.resolve(window.itowns);
  if (itownsPromise) return itownsPromise;

  itownsPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-atlas-itowns]');
    const script = existing || document.createElement('script');

    const finish = () => {
      if (window.itowns) resolve(window.itowns);
      else reject(new Error('COPERNICO_ITOWNS_NOT_AVAILABLE'));
    };

    script.addEventListener('load', finish, { once: true });
    script.addEventListener('error', () => reject(new Error('COPERNICO_ITOWNS_LOAD_FAILED')), { once: true });

    if (!existing) {
      script.src = ITOWNS_BUNDLE_URL;
      script.async = true;
      script.dataset.atlasItowns = 'local-v2.46.0';
      document.head.appendChild(script);
    }
  });

  return itownsPromise;
}

function waitForLayout(container, maxFrames = 90) {
  return new Promise((resolve, reject) => {
    let frame = 0;
    const inspect = () => {
      if (container.clientWidth > 0 && container.clientHeight > 0) {
        resolve();
        return;
      }
      frame += 1;
      if (frame >= maxFrames) {
        reject(new Error('COPERNICO_CONTAINER_HAS_NO_LAYOUT'));
        return;
      }
      requestAnimationFrame(inspect);
    };
    inspect();
  });
}

function validateWmsUrl(value) {
  if (!value) return null;
  const parsed = new URL(value, window.location.href);
  if (parsed.protocol !== 'https:' || parsed.hostname !== COPERNICUS_WMS_HOST) {
    throw new Error('COPERNICO_WMS_ORIGIN_REJECTED');
  }
  return parsed.toString();
}

function setStatus(statusElement, message) {
  if (statusElement) statusElement.textContent = message;
}

function createWmsLayer(itowns, url) {
  const source = new itowns.WMSSource({
    url,
    version: '1.3.0',
    name: 'TRUE_COLOR',
    style: '',
    format: 'image/jpeg',
    crs: 'EPSG:4326',
    extent: { west: -180, east: 180, south: -90, north: 90 },
    transparent: false,
  });

  return new itowns.ColorLayer('copernicus-sentinel-true-color', { source });
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function installKeyboardNavigation({ container, view, itowns, statusElement }) {
  const move = async (event) => {
    const accepted = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', '+', '=', '-'];
    if (!accepted.includes(event.key)) return;

    const params = itowns.CameraUtils.getTransformCameraLookingAtTarget(view, view.camera3D);
    if (!params?.coord || !Number.isFinite(params.range)) return;

    event.preventDefault();
    const next = { ...params, time: 0 };

    if (event.key === '+' || event.key === '=') next.range = clamp(params.range * 0.8, 500, 25000000);
    if (event.key === '-') next.range = clamp(params.range * 1.25, 500, 25000000);

    if (event.key.startsWith('Arrow')) {
      const coord = params.coord.clone();
      const step = clamp(params.range / 1800000, 0.15, 6);
      let lon = coord.longitude;
      let lat = coord.latitude;
      if (event.key === 'ArrowLeft') lon -= step;
      if (event.key === 'ArrowRight') lon += step;
      if (event.key === 'ArrowUp') lat = clamp(lat + step, -85, 85);
      if (event.key === 'ArrowDown') lat = clamp(lat - step, -85, 85);
      coord.setFromValues(lon, lat, 0);
      next.coord = coord;
    }

    try {
      await itowns.CameraUtils.transformCameraToLookAtTarget(view, view.camera3D, next);
      setStatus(statusElement, 'Globo pronto. Use as setas para percorrer; mais e menos aproximam ou afastam.');
    } catch {
      setStatus(statusElement, 'O globo mantém-se disponível, mas este movimento não pôde ser concluído.');
    }
  };

  container.addEventListener('keydown', move);
  return () => container.removeEventListener('keydown', move);
}

export async function mountCopernico({
  container,
  statusElement = null,
  reducedMotion = false,
  copernicusWmsUrl = null,
} = {}) {
  if (!(container instanceof HTMLElement)) throw new Error('COPERNICO_CONTAINER_REQUIRED');

  container.tabIndex = 0;
  container.setAttribute('role', 'region');
  container.setAttribute('aria-label', 'Globo Copérnico do Atlas Vivo MILK');
  setStatus(statusElement, 'A preparar o globo Copérnico.');

  await waitForLayout(container);
  const itowns = await loadItowns();
  const wmsUrl = validateWmsUrl(copernicusWmsUrl);

  const placement = {
    coord: new itowns.Coordinates('EPSG:4326', -9.1399, 38.7167),
    range: 5000000,
    tilt: 30,
  };

  const view = new itowns.GlobeView(container, placement);
  if (reducedMotion && view.controls) {
    view.controls.kinetic = false;
  }

  let resizeQueued = false;
  const resizeObserver = new ResizeObserver(() => {
    if (resizeQueued || container.clientWidth <= 0 || container.clientHeight <= 0) return;
    resizeQueued = true;
    requestAnimationFrame(() => {
      resizeQueued = false;
      view.resize();
    });
  });
  resizeObserver.observe(container);

  const removeKeyboard = installKeyboardNavigation({ container, view, itowns, statusElement });

  let wmsLayer = null;
  if (wmsUrl) {
    try {
      wmsLayer = createWmsLayer(itowns, wmsUrl);
      await view.addLayer(wmsLayer);
      setStatus(statusElement, 'Globo Copérnico pronto com camada pública configurada.');
    } catch {
      wmsLayer = null;
      setStatus(statusElement, 'Globo Copérnico pronto. A camada remota configurada não ficou disponível.');
    }
  } else {
    setStatus(statusElement, 'Globo Copérnico pronto.');
  }

  return {
    view,
    territorialDataReady: false,
    destroy() {
      removeKeyboard();
      resizeObserver.disconnect();
      if (typeof view.dispose === 'function') view.dispose();
      container.replaceChildren();
    },
  };
}
