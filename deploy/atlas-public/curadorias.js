import { openFalarte } from './falarte.js';
import { openPalavraRitual } from './palavra-ritual.js';

const deck = document.querySelector('#dinamicas');
const dialog = document.querySelector('#engine');
const body = document.querySelector('#engineBody');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/*
 * Runtime público sem fallback genérico.
 * As sete dinâmicas autorais já implementadas continuam em app.js.
 * Aqui só entram módulos específicos com implementação própria.
 */
const APP_JS_SPECIFIC = new Set([
  'inventario-meu-mundo',
  'catastrofe-produtiva',
  'ponto-kusama',
  'corpo-percebe',
  'escutar-silencio',
  'rizoma-interior',
  'cubo-interior'
]);

const MODULE_SPECIFIC = new Set([
  'falarte',
  'palavra-ritual'
]);

const PUBLIC_READY = new Set([...APP_JS_SPECIFIC, ...MODULE_SPECIFIC]);
let catalogue = [];

function el(tag, cls, text) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  return node;
}

function ensureStyle(name) {
  if (document.querySelector(`link[data-atlas-style="${name}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `${name}.css`;
  link.dataset.atlasStyle = name;
  document.head.append(link);
}

function renderSpecificRegistry(entries) {
  const readyEntries = entries.filter(item => MODULE_SPECIFIC.has(item.id));

  readyEntries.forEach(item => {
    const card = el('article', 'card dynamic-card');
    card.dataset.family = item.familia;
    card.dataset.curadoria = item.id;
    card.dataset.n = String(item.ordem).padStart(2, '0');
    card.append(el('span', 'tag', item.familia));
    card.append(el('h2', '', item.nome));
    card.append(el('p', '', item.convite));
    const label = item.id === 'falarte' ? 'entrar em falARTE' : 'tocar a palavra';
    const button = el('button', 'open', label);
    button.type = 'button';
    button.dataset.curadoria = item.id;
    button.tabIndex = -1;
    card.append(button);
    deck.append(card);
  });

  document.documentElement.dataset.curatorialSpecificReady = String(PUBLIC_READY.size);
  document.documentElement.dataset.curatorialGenericFallback = 'false';
}

function openSpecific(item) {
  body.replaceChildren();

  if (item.id === 'falarte') {
    ensureStyle('falarte');
    openFalarte({ container: body, reducedMotion: reduced });
    dialog.showModal();
    return true;
  }

  if (item.id === 'palavra-ritual') {
    ensureStyle('palavra-ritual');
    openPalavraRitual({ container: body, reducedMotion: reduced });
    dialog.showModal();
    return true;
  }

  return false;
}

deck.addEventListener('click', event => {
  const button = event.target.closest('[data-curadoria]');
  if (!button) return;
  const item = catalogue.find(candidate => candidate.id === button.dataset.curadoria);
  if (!item || !MODULE_SPECIFIC.has(item.id)) return;
  openSpecific(item);
});

fetch('catalogo-curatorial.json', { cache: 'no-store' })
  .then(response => {
    if (!response.ok) throw new Error('CATALOGO_INDISPONIVEL');
    return response.json();
  })
  .then(data => {
    catalogue = Array.isArray(data.entradas) ? data.entradas : [];
    renderSpecificRegistry(catalogue);
    document.documentElement.dataset.catalogue = 'ready';
  })
  .catch(() => {
    document.documentElement.dataset.catalogue = 'fail-closed';
    document.documentElement.dataset.curatorialGenericFallback = 'false';
  });
