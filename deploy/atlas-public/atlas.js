import {
  AtlasExperienceMachine,
  COSMIC_WORDS_SEED,
  PUBLIC_STATES,
  assertPublicPayload
} from './experience-machine.js';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const opening = document.querySelector('#opening');
const territory = document.querySelector('#territory');
const ticket = document.querySelector('#ticket');
const ticketResponse = document.querySelector('#ticket-response');
const contribution = document.querySelector('#contribution');
const nuno = document.querySelector('[data-contribute]');
const trace = document.querySelector('#trace-text');
const consent = document.querySelector('#trace-local');
const save = document.querySelector('#trace-save');
const status = document.querySelector('#trace-status');
const localTraceKey = 'atlas-milk-vestigio-local-v1';
const machine = new AtlasExperienceMachine();

machine.setReducedMotion(reduced);
let catalogue = [];
let galeriaManifest = null;
let currentTerritoryId = null;

function closeBackdrop(dialog) {
  dialog?.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
}

function randomItem(items) {
  return items.length ? items[Math.floor(Math.random() * items.length)] : null;
}

function fetchPublicData() {
  const catalogueRequest = fetch('catalogo-curatorial.json', { cache: 'no-store' })
    .then(response => response.ok ? response.json() : Promise.reject(new Error('catalogue_unavailable')))
    .then(data => {
      assertPublicPayload(data);
      catalogue = Array.isArray(data.entradas) ? data.entradas : [];
    })
    .catch(() => { catalogue = []; });

  const galleryRequest = fetch('galeria-diletante-publica.json', { cache: 'no-store' })
    .then(response => response.ok ? response.json() : Promise.reject(new Error('gallery_unavailable')))
    .then(data => {
      assertPublicPayload(data);
      galeriaManifest = data;
    })
    .catch(() => { galeriaManifest = null; });

  return Promise.allSettled([catalogueRequest, galleryRequest]);
}

function createStage() {
  const stage = document.createElement('section');
  stage.id = 'atlas-experience-stage';
  stage.setAttribute('aria-live', 'polite');
  stage.setAttribute('aria-label', 'Entrada do Atlas Vivo MILK');
  document.body.append(stage);
  return stage;
}

const stage = createStage();
opening.hidden = true;
territory.hidden = true;

function clearStage() {
  stage.replaceChildren();
}

function makeFullStageButton(label, onActivate) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'atlas-stage-button';
  button.setAttribute('aria-label', label);
  button.addEventListener('click', onActivate, { once: true });
  stage.append(button);
  return button;
}

function renderBlack() {
  clearStage();
  document.body.dataset.atlasState = PUBLIC_STATES.BLACK;
  const button = makeFullStageButton('Acordar o Atlas', () => machine.send('awaken'));
  const mark = document.createElement('span');
  mark.className = 'atlas-black-mark';
  mark.setAttribute('aria-hidden', 'true');
  button.append(mark);
}

function renderSeal() {
  clearStage();
  document.body.dataset.atlasState = PUBLIC_STATES.SEAL;
  const button = makeFullStageButton('Tocar o Selo Atlas', () => machine.send('touch_seal'));
  const image = document.createElement('img');
  image.className = 'atlas-seal-awaken';
  image.src = 'assets/selo-atlas.png';
  image.alt = 'Selo Atlas Vivo MILK';
  button.append(image);
}

function appendWordCloud(container) {
  const cloud = document.createElement('div');
  cloud.className = 'atlas-word-cloud';
  cloud.setAttribute('aria-hidden', 'true');
  COSMIC_WORDS_SEED.forEach((word, index) => {
    const particle = document.createElement('span');
    particle.textContent = word;
    particle.style.setProperty('--x', `${12 + ((index * 37) % 76)}%`);
    particle.style.setProperty('--y', `${14 + ((index * 53) % 70)}%`);
    particle.style.setProperty('--o', String(.28 + ((index % 5) * .13)));
    particle.style.setProperty('--d', `${3.5 + (index % 6)}s`);
    cloud.append(particle);
  });
  container.append(cloud);
}

function renderCosmicoxes() {
  clearStage();
  document.body.dataset.atlasState = PUBLIC_STATES.COSMICOXES;
  const button = makeFullStageButton('Conduzir COSMICOXES com um gesto', () => {
    machine.send(reduced ? 'reduce_motion' : 'particles_ready');
  });
  appendWordCloud(button);
  const copy = document.createElement('div');
  copy.className = 'atlas-cosmic-copy';
  copy.innerHTML = '<strong>COSMICOXES</strong><small>toca · move · encontra</small>';
  button.append(copy);
}

function renderCosmicWords() {
  clearStage();
  document.body.dataset.atlasState = PUBLIC_STATES.COSMIC_WORDS;
  const button = makeFullStageButton('Fazer o segundo gesto', () => machine.send('second_gesture'));
  appendWordCloud(button);
  const copy = document.createElement('div');
  copy.className = 'atlas-cosmic-copy';
  copy.innerHTML = '<strong>somos todos possíveis</strong><small>outro gesto</small>';
  button.append(copy);
}

function renderWorldGesture() {
  clearStage();
  document.body.dataset.atlasState = PUBLIC_STATES.WORLD_GESTURE;
  const word = document.createElement('div');
  word.className = 'atlas-world-word';
  word.textContent = 'vens iluminar esse mundo connosco';
  stage.append(word);
  setTimeout(() => machine.send('world_discovered'), reduced ? 30 : 720);
}

function renderDissolve() {
  clearStage();
  document.body.dataset.atlasState = PUBLIC_STATES.DISSOLVE;
  const field = document.createElement('div');
  field.className = 'atlas-dissolve';
  field.setAttribute('aria-hidden', 'true');
  stage.append(field);
  setTimeout(() => machine.send('globe_ready'), reduced ? 30 : 900);
}

function renderGlobe() {
  clearStage();
  document.body.dataset.atlasState = PUBLIC_STATES.GLOBE;
  const globe = document.createElement('div');
  globe.className = 'atlas-globe';
  globe.setAttribute('role', 'img');
  globe.setAttribute('aria-label', 'Globo do Atlas Vivo MILK');
  stage.append(globe);
  setTimeout(() => machine.send('territory_ready'), reduced ? 30 : 1100);
}

function renderTerritory() {
  document.body.dataset.atlasState = PUBLIC_STATES.TERRITORIAL_MILKS;
  stage.hidden = true;
  opening.hidden = true;
  territory.hidden = false;
  document.querySelector('.author-portal')?.focus({ preventScroll: true });
}

function renderExperienceState(state) {
  stage.hidden = false;
  switch (state) {
    case PUBLIC_STATES.BLACK: renderBlack(); break;
    case PUBLIC_STATES.SEAL: renderSeal(); break;
    case PUBLIC_STATES.COSMICOXES: renderCosmicoxes(); break;
    case PUBLIC_STATES.COSMIC_WORDS: renderCosmicWords(); break;
    case PUBLIC_STATES.WORLD_GESTURE: renderWorldGesture(); break;
    case PUBLIC_STATES.DISSOLVE: renderDissolve(); break;
    case PUBLIC_STATES.GLOBE: renderGlobe(); break;
    case PUBLIC_STATES.TERRITORIAL_MILKS: renderTerritory(); break;
    default: stage.hidden = true;
  }
}

machine.addEventListener('atlas:state', event => renderExperienceState(event.detail.state));
renderExperienceState(machine.state);

function focusCuradoria(id, family) {
  const locate = attempts => {
    const card = document.querySelector(`[data-curadoria="${CSS.escape(id)}"]`);
    if (!card && attempts > 0) return setTimeout(() => locate(attempts - 1), 120);
    if (!card) return false;
    document.querySelector(`[data-family="${CSS.escape(family)}"]`)?.click();
    card.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
    setTimeout(() => card.querySelector('[data-curadoria]')?.click(), reduced ? 20 : 460);
    return true;
  };
  locate(20);
}

function ensureGalleryDialog() {
  let dialog = document.querySelector('#galeriaDiletanteExperience');
  if (dialog) return dialog;
  dialog = document.createElement('dialog');
  dialog.id = 'galeriaDiletanteExperience';
  dialog.innerHTML = `
    <button class="close" type="button" aria-label="Fechar">×</button>
    <section class="galeria-device">
      <span class="tag">Galeria Diletante</span>
      <h2>palavra ↔ imagem</h2>
      <div class="galeria-photo-frame" data-gallery-photo></div>
      <div class="galeria-collision">
        <label>uma palavra
          <input type="text" maxlength="80" data-gallery-word autocomplete="off">
        </label>
        <button class="action" type="button" data-gallery-collide>aproximar</button>
        <p class="galeria-ticket" data-gallery-ticket aria-live="polite"></p>
      </div>
    </section>`;
  dialog.querySelector('.close').addEventListener('click', () => dialog.close());
  closeBackdrop(dialog);
  document.body.append(dialog);
  return dialog;
}

function validatedGalleryPhotos() {
  const photos = Array.isArray(galeriaManifest?.fotografias) ? galeriaManifest.fotografias : [];
  return photos.filter(photo =>
    photo && photo.publicada === true && typeof photo.src === 'string' && photo.src.startsWith('assets/'));
}

function openGaleriaDiletante() {
  const dialog = ensureGalleryDialog();
  const frame = dialog.querySelector('[data-gallery-photo]');
  const input = dialog.querySelector('[data-gallery-word]');
  const collide = dialog.querySelector('[data-gallery-collide]');
  const paper = dialog.querySelector('[data-gallery-ticket]');
  const photos = validatedGalleryPhotos();
  const photo = randomItem(photos);

  frame.replaceChildren();
  paper.textContent = '';
  input.value = '';

  if (photo) {
    const image = document.createElement('img');
    image.src = photo.src;
    image.alt = photo.alt || 'Fotografia autoral de Nuno A.';
    frame.append(image);
    collide.disabled = false;
  } else {
    const gate = document.createElement('p');
    gate.className = 'galeria-photo-gate';
    gate.textContent = 'A fotografia só entra nesta galeria depois da validação humana. Nenhuma imagem do arquivo é publicada automaticamente.';
    frame.append(gate);
    collide.disabled = true;
  }

  collide.onclick = () => {
    const word = input.value.trim();
    if (!word || !photo) return;
    paper.textContent = `${word} ↔ imagem\naproxima duas coisas sem as fechar numa resposta.`;
  };

  dialog.showModal();
  input.focus();
}

function openContribution(origin = 'portal_nuno') {
  nuno.dataset.active = 'true';
  machine.openContribution(origin);
  trace.value = localStorage.getItem(localTraceKey) || '';
  consent.checked = false;
  save.disabled = true;
  status.textContent = trace.value ? 'rascunho local recuperado' : 'nenhum envio externo';
  contribution.showModal();
  trace.focus();
}

nuno.onclick = () => openContribution('portal_nuno');
consent.onchange = () => { save.disabled = !consent.checked; };
save.onclick = () => {
  if (!consent.checked) return;
  const value = trace.value.trim();
  if (value) localStorage.setItem(localTraceKey, value);
  else localStorage.removeItem(localTraceKey);
  status.textContent = value ? 'ficou neste aparelho' : 'nenhum vestígio guardado';
};
document.querySelector('#trace-remove').onclick = () => {
  localStorage.removeItem(localTraceKey);
  trace.value = '';
  status.textContent = 'retirado deste aparelho';
};
document.querySelector('.contribution-close').onclick = () => contribution.close();
contribution.addEventListener('close', () => {
  nuno.dataset.active = 'false';
  machine.closeContribution();
});
closeBackdrop(contribution);

fetchPublicData();

document.querySelectorAll('[data-ticket]').forEach((point, index) => {
  point.dataset.territoryId = point.dataset.territoryId || `milk-demo-${index + 1}`;
  point.onclick = () => {
    if (!machine.can('open_ticket')) return;
    currentTerritoryId = point.dataset.territoryId;
    point.classList.add('atlas-bursting');
    const open = () => {
      point.classList.remove('atlas-bursting');
      ticketResponse.textContent = '';
      machine.send('open_ticket', { territoryId: currentTerritoryId });
      ticket.showModal();
    };
    setTimeout(open, reduced ? 20 : 620);
  };
});

document.querySelector('.ticket-close').onclick = () => ticket.close();
ticket.addEventListener('close', () => {
  if (machine.state === PUBLIC_STATES.TICKET && machine.can('close_ticket')) machine.send('close_ticket');
});
closeBackdrop(ticket);

document.querySelectorAll('[data-ticket-action]').forEach(button => {
  button.onclick = () => {
    const action = button.dataset.ticketAction;

    if (action === 'sorte') {
      if (machine.can('tentar_sorte')) machine.send('tentar_sorte', { discoveryId: 'nuno-escuta' });
      ticket.close();
      setTimeout(() => openContribution('tentar_sorte'), reduced ? 20 : 180);
      return;
    }

    if (action === 'brincar') {
      const item = randomItem(catalogue.filter(entry => entry.familia === 'jogo'));
      if (machine.can('brincar')) machine.send('brincar', { discoveryId: item?.id || null });
      if (!item) {
        ticketResponse.textContent = 'o brincar deste território ainda está a chegar';
        return;
      }
      ticketResponse.textContent = `${item.nome} · ${item.convite}`;
      setTimeout(() => {
        ticket.close();
        focusCuradoria(item.id, item.familia);
      }, reduced ? 30 : 720);
      return;
    }

    if (action === 'convite') {
      const item = catalogue.find(entry => entry.id === 'festas-827' || entry.mecanica === 'convidar');
      if (machine.can('convite')) machine.send('convite', { discoveryId: item?.id || null });
      ticketResponse.textContent = item
        ? `${item.nome} · ${item.convite}`
        : 'o convite territorial ainda está a chegar';
    }
  };
});

document.querySelectorAll('[data-focus-id]').forEach(portal => {
  portal.onclick = () => {
    if (portal.dataset.focusId === 'galeria-diletante') {
      openGaleriaDiletante();
      return;
    }
    focusCuradoria(portal.dataset.focusId, portal.dataset.focusFamily);
  };
});

// O botão antigo permanece no HTML para compatibilidade estrutural, mas a dramaturgia
// pública passa pela máquina canónica acima. Não altera a camada invisível.
const legacyEnter = document.querySelector('#enterAtlas');
if (legacyEnter) legacyEnter.onclick = () => false;
