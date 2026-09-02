const PORTALS = Object.freeze({
  'galeria-diletante': {
    title: 'Galeria Diletante',
    invitation: 'Escolhe sem autoridade. Aproxima duas coisas.',
    kind: 'pair'
  },
  'cronicas-fuco': {
    title: 'Crónicas Cãotadas por Fucô',
    invitation: 'Apanha uma frase pelo rabo. Continua-a.',
    kind: 'tail'
  },
  milk: {
    title: 'MILK',
    invitation: 'somos todos possíveis',
    kind: 'light'
  }
});

let dialog;
let body;
let cleanup = () => {};
let openerElement = null;
let controller = new AbortController();

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

function safeStorageRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch {}
}

function ensureDialog() {
  if (dialog) return dialog;

  dialog = document.createElement('dialog');
  dialog.className = 'authorial-experience';
  dialog.setAttribute('aria-labelledby', 'authorial-experience-title');
  dialog.innerHTML = `
    <button class="authorial-close" type="button" aria-label="Fechar">×</button>
    <div class="authorial-body"></div>`;

  body = dialog.querySelector('.authorial-body');
  const closeButton = dialog.querySelector('.authorial-close');

  const handleClose = () => {
    if (openerElement) {
      openerElement.focus();
      openerElement = null;
    }
    dialog.close();
  };

  closeButton.addEventListener('click', handleClose, { signal: controller.signal });
  dialog.addEventListener('click', event => {
    if (event.target === dialog) handleClose();
  }, { signal: controller.signal });

  dialog.addEventListener('close', () => {
    cleanup();
    cleanup = () => {};
    controller.abort();
    controller = new AbortController();
    window.dispatchEvent(new CustomEvent('atlas:authorial-portal-close'));
  }, { signal: controller.signal });

  document.body.append(dialog);
  return dialog;
}

function heading(config, extra = '') {
  return `
    <div class="authorial-heading">
      <p class="authorial-kicker">Atlas Vivo MILK</p>
      <h2 id="authorial-experience-title">${config.title}</h2>
      <p class="authorial-provocation">${config.invitation}</p>
      ${extra}
    </div>`;
}

function mountPair(config) {
  body.innerHTML = `${heading(config, '<p class="authorial-hint">Toca duas vezes no campo. O intervalo também é uma escolha.</p>')}
    <div class="diletante-field" role="application" aria-label="Campo de aproximação de duas coisas" tabindex="0">
      <svg class="diletante-line" aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0"></line></svg>
      <span class="diletante-point diletante-a" aria-hidden="true" hidden></span>
      <span class="diletante-point diletante-b" aria-hidden="true" hidden></span>
      <p class="diletante-result" aria-live="polite">nenhuma autoridade escolheu ainda</p>
    </div>`;

  const field = body.querySelector('.diletante-field');
  const a = body.querySelector('.diletante-a');
  const b = body.querySelector('.diletante-b');
  const line = body.querySelector('.diletante-line line');
  const result = body.querySelector('.diletante-result');
  let points = [];

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const place = (x, y) => {
    if (points.length === 2) points = [];
    points.push({x, y});
    const target = points.length === 1 ? a : b;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    target.hidden = false;
    if (points.length === 1) {
      b.hidden = true;
      line.setAttribute('x1', x); line.setAttribute('y1', y);
      line.setAttribute('x2', x); line.setAttribute('y2', y);
      result.textContent = 'uma coisa apareceu';
    } else {
      line.setAttribute('x2', x); line.setAttribute('y2', y);
      result.textContent = 'duas coisas. agora existe também o entre.';
    }
  };

  const onPointer = event => {
    const rect = field.getBoundingClientRect();
    const x = clamp(event.clientX - rect.left, 0, rect.width);
    const y = clamp(event.clientY - rect.top, 0, rect.height);
    place(x, y);
  };

  field.addEventListener('pointerdown', onPointer, { signal: controller.signal });
  field.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    const rect = field.getBoundingClientRect();
    const offset = points.length === 0 ? .32 : .68;
    place(rect.width * offset, rect.height * (points.length === 0 ? .42 : .58));
  }, { signal: controller.signal });

  cleanup = () => {
    controller.abort();
    controller = new AbortController();
  };

  setTimeout(() => field.focus({ preventScroll: true }), 0);
}

function mountTail(config) {
  const storageKey = 'atlas-milk-fuco-continuacao-local-v1';
  body.innerHTML = `${heading(config)}
    <div class="fuco-tail">
      <p class="fuco-fragment">…</p>
      <label for="fuco-continuacao">continua daqui</label>
      <textarea id="fuco-continuacao" maxlength="900" autocomplete="off" spellcheck="true"></textarea>
      <div class="fuco-actions">
        <button type="button" data-fuco-save>fica neste aparelho</button>
        <button type="button" data-fuco-clear>soltar a frase</button>
      </div>
      <p class="fuco-status" aria-live="polite">nenhum envio externo</p>
    </div>`;

  const input = body.querySelector('#fuco-continuacao');
  const status = body.querySelector('.fuco-status');
  input.value = safeStorageGet(storageKey) || '';

  const saveHandler = () => {
    const value = input.value.trim();
    if (value) safeStorageSet(storageKey, value);
    else safeStorageRemove(storageKey);
    status.textContent = value ? 'a cauda da frase ficou neste aparelho' : 'nenhum vestígio guardado';
  };

  const clearHandler = () => {
    safeStorageRemove(storageKey);
    input.value = '';
    status.textContent = 'a frase foi solta';
    input.focus();
  };

  body.querySelector('[data-fuco-save]').addEventListener('click', saveHandler, { signal: controller.signal });
  body.querySelector('[data-fuco-clear]').addEventListener('click', clearHandler, { signal: controller.signal });

  cleanup = () => {
    controller.abort();
    controller = new AbortController();
  };

  setTimeout(() => input.focus({ preventScroll: true }), 0);
}

function mountLight(config) {
  body.innerHTML = `${heading(config, '<p class="authorial-hint">Aproxima-te. A luz não pede cadastro.</p>')}
    <div class="milk-light-field" role="application" tabindex="0" aria-label="Presença luminosa MILK">
      <img src="assets/logo-milk.png" alt="MILK" class="milk-light-logo">
      <p class="milk-light-ground">onde arte e afeto são casa e chão</p>
    </div>`;

  const field = body.querySelector('.milk-light-field');
  const setLight = value => field.style.setProperty('--presence', String(Math.max(.08, Math.min(1, value))));

  const onPointer = event => {
    const rect = field.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(dx, dy);
    const max = Math.hypot(rect.width / 2, rect.height / 2) || 1;
    setLight(1 - distance / max);
  };

  const onLeave = () => setLight(.12);

  field.addEventListener('pointermove', onPointer, { signal: controller.signal });
  field.addEventListener('pointerleave', onLeave, { signal: controller.signal });
  field.addEventListener('keydown', event => {
    if (!['ArrowUp','ArrowRight','Enter',' '].includes(event.key)) return;
    event.preventDefault();
    setLight(1);
  }, { signal: controller.signal });

  cleanup = () => {
    controller.abort();
    controller = new AbortController();
  };

  setTimeout(() => field.focus({ preventScroll: true }), 0);
}

export function openAuthorialPortal(portalId, triggerElement = null) {
  const config = PORTALS[portalId];
  if (!config) return false;

  openerElement = triggerElement;
  ensureDialog();
  cleanup();
  cleanup = () => {};
  body.replaceChildren();
  dialog.dataset.portal = portalId;

  if (config.kind === 'pair') mountPair(config);
  if (config.kind === 'tail') mountTail(config);
  if (config.kind === 'light') mountLight(config);

  if (!dialog.open) {
    dialog.showModal();
    dialog.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        if (openerElement) {
          openerElement.focus();
          openerElement = null;
        }
      }
    }, { once: true, signal: controller.signal });
  }

  return true;
}

export const AUTHORIAL_PORTAL_IDS = Object.freeze(Object.keys(PORTALS));
