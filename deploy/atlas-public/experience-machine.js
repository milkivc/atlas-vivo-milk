// MILK — máquina reconciliada da experiência pública
// PUBLIC-ONLY. A superfície não incorpora mecanismos reservados.
// Estado de trabalho: não ligado à release. Promoção exige revisão autoral,
// acessibilidade, direitos, evidência territorial e boundary tests.

const PUBLIC_STATES = Object.freeze({
  COSMICOXES: 'cosmicoxes',
  COSMIC_WORDS: 'cosmic_words',
  WORLD_GESTURE: 'world_gesture',
  DISSOLVE: 'dissolve',
  GLOBE: 'globe',
  TERRITORIAL_MILKS: 'territorial_milks',
  TICKET: 'ticket',
  DISCOVERY: 'discovery',
  CURATORIAL_DEVICE: 'curatorial_device'
});

const TRANSITIONS = Object.freeze({
  [PUBLIC_STATES.COSMICOXES]: new Set([
    'gesture',
    'silence',
    'open_portal',
    'show_territory',
    'reduce_motion'
  ]),
  [PUBLIC_STATES.COSMIC_WORDS]: new Set([
    'continue',
    'silence',
    'open_portal',
    'return_cosmos'
  ]),
  [PUBLIC_STATES.WORLD_GESTURE]: new Set([
    'dissolve',
    'silence',
    'open_portal',
    'return_cosmos'
  ]),
  [PUBLIC_STATES.DISSOLVE]: new Set([
    'globe_ready',
    'reduce_motion',
    'return_cosmos'
  ]),
  [PUBLIC_STATES.GLOBE]: new Set([
    'territory_ready',
    'return_cosmos'
  ]),
  [PUBLIC_STATES.TERRITORIAL_MILKS]: new Set([
    'open_ticket',
    'open_portal',
    'silence',
    'return_cosmos'
  ]),
  [PUBLIC_STATES.TICKET]: new Set([
    'brincar',
    'convite',
    'tentar_a_sorte',
    'close_ticket'
  ]),
  [PUBLIC_STATES.DISCOVERY]: new Set([
    'open_device',
    'open_portal',
    'leave_trace',
    'silence',
    'return_territory',
    'return_cosmos'
  ]),
  [PUBLIC_STATES.CURATORIAL_DEVICE]: new Set([
    'leave_trace',
    'silence',
    'return_discovery',
    'return_territory',
    'return_cosmos'
  ])
});

const NEXT = Object.freeze({
  [`${PUBLIC_STATES.COSMICOXES}:gesture`]: PUBLIC_STATES.COSMIC_WORDS,
  [`${PUBLIC_STATES.COSMICOXES}:reduce_motion`]: PUBLIC_STATES.COSMIC_WORDS,
  [`${PUBLIC_STATES.COSMICOXES}:show_territory`]: PUBLIC_STATES.GLOBE,
  [`${PUBLIC_STATES.COSMICOXES}:open_portal`]: PUBLIC_STATES.CURATORIAL_DEVICE,

  [`${PUBLIC_STATES.COSMIC_WORDS}:continue`]: PUBLIC_STATES.WORLD_GESTURE,
  [`${PUBLIC_STATES.COSMIC_WORDS}:open_portal`]: PUBLIC_STATES.CURATORIAL_DEVICE,
  [`${PUBLIC_STATES.COSMIC_WORDS}:return_cosmos`]: PUBLIC_STATES.COSMICOXES,

  [`${PUBLIC_STATES.WORLD_GESTURE}:dissolve`]: PUBLIC_STATES.DISSOLVE,
  [`${PUBLIC_STATES.WORLD_GESTURE}:open_portal`]: PUBLIC_STATES.CURATORIAL_DEVICE,
  [`${PUBLIC_STATES.WORLD_GESTURE}:return_cosmos`]: PUBLIC_STATES.COSMICOXES,

  [`${PUBLIC_STATES.DISSOLVE}:globe_ready`]: PUBLIC_STATES.GLOBE,
  [`${PUBLIC_STATES.DISSOLVE}:reduce_motion`]: PUBLIC_STATES.GLOBE,
  [`${PUBLIC_STATES.DISSOLVE}:return_cosmos`]: PUBLIC_STATES.COSMICOXES,

  [`${PUBLIC_STATES.GLOBE}:territory_ready`]: PUBLIC_STATES.TERRITORIAL_MILKS,
  [`${PUBLIC_STATES.GLOBE}:return_cosmos`]: PUBLIC_STATES.COSMICOXES,

  [`${PUBLIC_STATES.TERRITORIAL_MILKS}:open_ticket`]: PUBLIC_STATES.TICKET,
  [`${PUBLIC_STATES.TERRITORIAL_MILKS}:open_portal`]: PUBLIC_STATES.CURATORIAL_DEVICE,
  [`${PUBLIC_STATES.TERRITORIAL_MILKS}:return_cosmos`]: PUBLIC_STATES.COSMICOXES,

  [`${PUBLIC_STATES.TICKET}:brincar`]: PUBLIC_STATES.DISCOVERY,
  [`${PUBLIC_STATES.TICKET}:convite`]: PUBLIC_STATES.DISCOVERY,
  [`${PUBLIC_STATES.TICKET}:tentar_a_sorte`]: PUBLIC_STATES.DISCOVERY,
  [`${PUBLIC_STATES.TICKET}:close_ticket`]: PUBLIC_STATES.TERRITORIAL_MILKS,

  [`${PUBLIC_STATES.DISCOVERY}:open_device`]: PUBLIC_STATES.CURATORIAL_DEVICE,
  [`${PUBLIC_STATES.DISCOVERY}:open_portal`]: PUBLIC_STATES.CURATORIAL_DEVICE,
  [`${PUBLIC_STATES.DISCOVERY}:return_territory`]: PUBLIC_STATES.TERRITORIAL_MILKS,
  [`${PUBLIC_STATES.DISCOVERY}:return_cosmos`]: PUBLIC_STATES.COSMICOXES,

  [`${PUBLIC_STATES.CURATORIAL_DEVICE}:return_discovery`]: PUBLIC_STATES.DISCOVERY,
  [`${PUBLIC_STATES.CURATORIAL_DEVICE}:return_territory`]: PUBLIC_STATES.TERRITORIAL_MILKS,
  [`${PUBLIC_STATES.CURATORIAL_DEVICE}:return_cosmos`]: PUBLIC_STATES.COSMICOXES
});

const PRIMARY_AUTHORIAL_PORTALS = Object.freeze([
  'galeria-diletante',
  'cronicas-fuco',
  'milk'
]);

const NOT_PRIMARY_PORTALS = Object.freeze([
  'nuno-escuta',
  'dado-100lado',
  'reizinho-sainha'
]);

export class AtlasExperienceMachine extends EventTarget {
  #state = PUBLIC_STATES.COSMICOXES;
  #context = Object.seal({
    territoryId: null,
    discoveryId: null,
    deviceId: null,
    portalId: null,
    ticketAction: null,
    reducedMotion: false,
    contributionActive: false
  });

  get state() { return this.#state; }
  get context() { return { ...this.#context }; }

  can(eventName) {
    return TRANSITIONS[this.#state]?.has(eventName) ?? false;
  }

  send(eventName, detail = {}) {
    if (!this.can(eventName)) {
      this.dispatchEvent(new CustomEvent('atlas:blocked-transition', {
        detail: { state: this.#state, eventName }
      }));
      return false;
    }

    const previous = this.#state;
    this.#applyContext(eventName, detail);
    const next = NEXT[`${previous}:${eventName}`] ?? previous;
    this.#state = next;

    this.dispatchEvent(new CustomEvent('atlas:state', {
      detail: { previous, state: next, eventName, context: this.context }
    }));
    return true;
  }

  setReducedMotion(value) {
    this.#context.reducedMotion = Boolean(value);
    this.dispatchEvent(new CustomEvent('atlas:preference', {
      detail: { reducedMotion: this.#context.reducedMotion }
    }));
  }

  openContribution(origin = null) {
    // Nuno é presença de recolha/contribuição, nunca portal principal.
    this.#context.contributionActive = true;
    this.dispatchEvent(new CustomEvent('atlas:contribution', {
      detail: { active: true, origin }
    }));
  }

  closeContribution() {
    this.#context.contributionActive = false;
    this.dispatchEvent(new CustomEvent('atlas:contribution', {
      detail: { active: false }
    }));
  }

  #applyContext(eventName, detail) {
    if (eventName === 'open_ticket') {
      this.#context.territoryId = detail.territoryId ?? null;
      this.#context.ticketAction = null;
    }

    if (['brincar', 'convite', 'tentar_a_sorte'].includes(eventName)) {
      this.#context.ticketAction = eventName;
      this.#context.discoveryId = detail.discoveryId ?? null;
    }

    if (eventName === 'open_portal') {
      const portalId = detail.portalId ?? null;
      if (portalId && !PRIMARY_AUTHORIAL_PORTALS.includes(portalId)) {
        this.dispatchEvent(new CustomEvent('atlas:non-primary-portal-request', {
          detail: { portalId }
        }));
      }
      this.#context.portalId = portalId;
      this.#context.deviceId = detail.deviceId ?? portalId;
    }

    if (eventName === 'open_device') {
      this.#context.deviceId = detail.deviceId ?? null;
    }

    if (['return_territory', 'return_cosmos'].includes(eventName)) {
      this.#context.deviceId = null;
      this.#context.portalId = null;
      this.#context.discoveryId = null;
      this.#context.ticketAction = null;
      if (eventName === 'return_cosmos') this.#context.territoryId = null;
    }
  }
}

export const COSMIC_WORDS_SEED = Object.freeze([
  'somos todos possíveis',
  'somos cósmicos',
  'vens iluminar esse mundo connosco',
  'estou aqui',
  'uma saudade',
  'eu ri',
  'eu lembrei',
  'vem reencontrar-me',
  'um abraço',
  'juntos sempre'
]);

export function assertPublicPayload(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error('PUBLIC_PAYLOAD_INVALID');
  }
  if (Object.hasOwn(payload, 'layer') && payload.layer !== 'public') {
    throw new Error('PUBLIC_LAYER_REQUIRED');
  }
  if (Object.hasOwn(payload, 'reverse_link_to_private') && payload.reverse_link_to_private !== false) {
    throw new Error('PUBLIC_REVERSE_LINK_REJECTED');
  }
  const serialized = JSON.stringify(payload);
  if (serialized.length > 2_000_000) throw new Error('PUBLIC_PAYLOAD_TOO_LARGE');
  return payload;
}

export {
  PUBLIC_STATES,
  PRIMARY_AUTHORIAL_PORTALS,
  NOT_PRIMARY_PORTALS
};
