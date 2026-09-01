import {
  AtlasExperienceMachine,
  PUBLIC_STATES,
  COSMIC_WORDS_SEED
} from './experience-machine.js';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const opening = document.querySelector('#opening');
const territory = document.querySelector('#territory');
const topbar = document.querySelector('.topbar');
const enter = document.querySelector('#enterAtlas');
const openingWord = document.querySelector('.opening-word');
const experience = new AtlasExperienceMachine();

experience.setReducedMotion(reduced);
document.documentElement.dataset.atlasState = experience.state;
experience.addEventListener('atlas:state', event => {
  document.documentElement.dataset.atlasState = event.detail.state;
});

const wait = ms => new Promise(resolve => setTimeout(resolve, reduced ? 0 : ms));

async function enterTerritory() {
  if (enter.disabled) return;
  enter.disabled = true;

  const firstEvent = reduced ? 'reduce_motion' : 'gesture';
  if (!experience.send(firstEvent)) {
    enter.disabled = false;
    return;
  }

  if (reduced) {
    openingWord.textContent = COSMIC_WORDS_SEED[0];
  } else {
    for (const word of COSMIC_WORDS_SEED) {
      openingWord.textContent = word;
      await wait(170);
    }
  }

  experience.send('continue');
  openingWord.textContent = 'o mundo cabe num gesto';
  await wait(420);

  experience.send('dissolve');
  opening.classList.add('leaving');
  await wait(620);

  experience.send(reduced ? 'reduce_motion' : 'globe_ready');
  await wait(80);
  experience.send('territory_ready');

  opening.hidden = true;
  topbar.hidden = false;
  territory.hidden = false;
  document.querySelector('.author-portal')?.focus();
}

enter.addEventListener('click', enterTerritory);

const closeBackdrop = dialog => dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});

const ticket = document.querySelector('#ticket');
const ticketResponse = document.querySelector('#ticket-response');
let catalogue = [];
let activeTerritory = null;

fetch('catalogo-curatorial.json', {cache: 'no-store'})
  .then(response => response.ok ? response.json() : Promise.reject())
  .then(data => catalogue = Array.isArray(data.entradas) ? data.entradas : [])
  .catch(() => catalogue = []);

// A branch ainda não contém a materialização territorial validada.
// Regra pública: sem evidência territorial concreta não há MILK fictícia,
// bilhete genérico nem escolha aleatória de festa/dinâmica.
const territorialPoints = [...document.querySelectorAll('[data-ticket]')];
territorialPoints.forEach(point => {
  point.hidden = true;
  point.setAttribute('aria-hidden', 'true');
  point.tabIndex = -1;
});
document.documentElement.dataset.territorial = 'blocked-until-materialized';

function openTicket(record) {
  if (!record || record.validated !== true) return false;
  if (experience.state !== PUBLIC_STATES.TERRITORIAL_MILKS) return false;
  if (!experience.send('open_ticket', {territoryId: record.id ?? null})) return false;
  activeTerritory = record;
  ticketResponse.textContent = '';
  ticket.showModal();
  return true;
}

// Ponto de integração futuro: apenas um módulo territorial materializado e
// validado pode chamar este evento. Não cria coordenadas nem conteúdos.
window.addEventListener('atlas:validated-territory-request', event => {
  openTicket(event.detail?.territory ?? null);
});

document.querySelector('.ticket-close').addEventListener('click', () => ticket.close());
closeBackdrop(ticket);

ticket.addEventListener('close', () => {
  if (experience.state === PUBLIC_STATES.TICKET && experience.can('close_ticket')) {
    experience.send('close_ticket');
  } else if (experience.state === PUBLIC_STATES.DISCOVERY && experience.can('return_territory')) {
    experience.send('return_territory');
  }
  activeTerritory = null;
});

const contribution = document.querySelector('#contribution');
const nuno = document.querySelector('[data-contribute]');
const trace = document.querySelector('#trace-text');
const consent = document.querySelector('#trace-local');
const save = document.querySelector('#trace-save');
const status = document.querySelector('#trace-status');
const key = 'atlas-milk-vestigio-local-v1';

function openContribution(origin = 'territory') {
  experience.openContribution(origin);
  nuno.dataset.active = 'true';
  trace.value = localStorage.getItem(key) || '';
  consent.checked = false;
  save.disabled = true;
  status.textContent = trace.value ? 'rascunho local recuperado' : 'nenhum envio externo';
  if (!contribution.open) contribution.showModal();
  trace.focus();
}

document.querySelectorAll('[data-ticket-action]').forEach(button => {
  button.addEventListener('click', async () => {
    if (!activeTerritory?.validated) return;

    const keyAction = button.dataset.ticketAction;
    const eventName = keyAction === 'sorte' ? 'tentar_a_sorte' : keyAction;
    const action = activeTerritory.ticket?.[eventName] ?? null;
    if (!action || action.validated !== true || !experience.can(eventName)) return;

    experience.send(eventName, {discoveryId: action.id ?? null});
    ticketResponse.textContent = action.text ?? action.convite ?? '';

    if (eventName === 'tentar_a_sorte' && action.allowContribution === true) {
      await wait(520);
      ticket.close();
      openContribution('ticket:tentar_a_sorte');
    }
  });
});

function focusCuradoria(id, family) {
  const locate = attempts => {
    const card = document.querySelector(`[data-curadoria="${CSS.escape(id)}"]`);
    if (!card && attempts > 0) return setTimeout(() => locate(attempts - 1), 120);
    if (!card) return;
    document.querySelector(`[data-family="${CSS.escape(family)}"]`)?.click();
    card.scrollIntoView({behavior: reduced ? 'auto' : 'smooth', block: 'center'});
    setTimeout(() => card.querySelector('[data-curadoria]')?.click(), reduced ? 20 : 500);
  };
  locate(20);
}

document.querySelectorAll('[data-focus-id]').forEach(portal => {
  portal.addEventListener('click', () => {
    const portalId = portal.dataset.focusId;
    if (experience.state === PUBLIC_STATES.TERRITORIAL_MILKS && experience.can('open_portal')) {
      experience.send('open_portal', {portalId, deviceId: portalId});
    }
    focusCuradoria(portalId, portal.dataset.focusFamily);
  });
});

document.querySelector('#engine')?.addEventListener('close', () => {
  if (experience.state === PUBLIC_STATES.CURATORIAL_DEVICE && experience.can('return_territory')) {
    experience.send('return_territory');
  }
});

nuno.addEventListener('click', () => openContribution('territory'));
consent.addEventListener('change', () => save.disabled = !consent.checked);
save.addEventListener('click', () => {
  if (!consent.checked) return;
  const value = trace.value.trim();
  if (value) localStorage.setItem(key, value);
  else localStorage.removeItem(key);
  status.textContent = value ? 'ficou neste aparelho' : 'nenhum vestígio guardado';
});

document.querySelector('#trace-remove').addEventListener('click', () => {
  localStorage.removeItem(key);
  trace.value = '';
  status.textContent = 'retirado deste aparelho';
});

document.querySelector('.contribution-close').addEventListener('click', () => contribution.close());
contribution.addEventListener('close', () => {
  nuno.dataset.active = 'false';
  experience.closeContribution();
});
closeBackdrop(contribution);
