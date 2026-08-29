// Atlas Vivo MILK — máquina canónica da experiência pública
// PUBLIC-ONLY. Não contém nem pode reconstruir a Camada Invisível.
// Estado: scaffold não ligado à release. Promoção exige revisão autoral, accessibility e boundary tests.

const PUBLIC_STATES = Object.freeze({
  BLACK: 'black',
  SEAL: 'seal',
  COSMICOXES: 'cosmicoxes',
  COSMIC_WORDS: 'cosmic_words',
  WORLD_GESTURE: 'world_gesture',
  DISSOLVE: 'dissolve',
  GLOBE: 'globe',
  TERRITORIAL_MILKS: 'territorial_milks',
  TICKET: 'ticket',
  DISCOVERY: 'discovery',
  CURATORIAL_DEVICE: 'curatorial_device',
  RETURN: 'return'
});

const TRANSITIONS = Object.freeze({
  [PUBLIC_STATES.BLACK]: new Set(['awaken']),
  [PUBLIC_STATES.SEAL]: new Set(['touch_seal']),
  [PUBLIC_STATES.COSMICOXES]: new Set(['particles_ready', 'reduce_motion']),
  [PUBLIC_STATES.COSMIC_WORDS]: new Set(['second_gesture']),
  [PUBLIC_STATES.WORLD_GESTURE]: new Set(['world_discovered']),
  [PUBLIC_STATES.DISSOLVE]: new Set(['globe_ready']),
  [PUBLIC_STATES.GLOBE]: new Set(['territory_ready']),
  [PUBLIC_STATES.TERRITORIAL_MILKS]: new Set(['open_ticket', 'return_cosmos']),
  [PUBLIC_STATES.TICKET]: new Set(['brincar', 'convite', 'tentar_sorte', 'close_ticket']),
  [PUBLIC_STATES.DISCOVERY]: new Set(['open_device', 'return_territory', 'leave_trace']),
  [PUBLIC_STATES.CURATORIAL_DEVICE]: new Set(['return_discovery', 'return_territory', 'leave_trace']),
  [PUBLIC_STATES.RETURN]: new Set(['return_cosmos', 'return_territory', 'rest'])
});

const NEXT = Object.freeze({
  [`${PUBLIC_STATES.BLACK}:awaken`]: PUBLIC_STATES.SEAL,
  [`${PUBLIC_STATES.SEAL}:touch_seal`]: PUBLIC_STATES.COSMICOXES,
  [`${PUBLIC_STATES.COSMICOXES}:particles_ready`]: PUBLIC_STATES.COSMIC_WORDS,
  [`${PUBLIC_STATES.COSMICOXES}:reduce_motion`]: PUBLIC_STATES.COSMIC_WORDS,
  [`${PUBLIC_STATES.COSMIC_WORDS}:second_gesture`]: PUBLIC_STATES.WORLD_GESTURE,
  [`${PUBLIC_STATES.WORLD_GESTURE}:world_discovered`]: PUBLIC_STATES.DISSOLVE,
  [`${PUBLIC_STATES.DISSOLVE}:globe_ready`]: PUBLIC_STATES.GLOBE,
  [`${PUBLIC_STATES.GLOBE}:territory_ready`]: PUBLIC_STATES.TERRITORIAL_MILKS,
  [`${PUBLIC_STATES.TERRITORIAL_MILKS}:open_ticket`]: PUBLIC_STATES.TICKET,
  [`${PUBLIC_STATES.TERRITORIAL_MILKS}:return_cosmos`]: PUBLIC_STATES.COSMICOXES,
  [`${PUBLIC_STATES.TICKET}:brincar`]: PUBLIC_STATES.DISCOVERY,
  [`${PUBLIC_STATES.TICKET}:convite`]: PUBLIC_STATES.DISCOVERY,
  [`${PUBLIC_STATES.TICKET}:tentar_sorte`]: PUBLIC_STATES.DISCOVERY,
  [`${PUBLIC_STATES.TICKET}:close_ticket`]: PUBLIC_STATES.TERRITORIAL_MILKS,
  [`${PUBLIC_STATES.DISCOVERY}:open_device`]: PUBLIC_STATES.CURATORIAL_DEVICE,
  [`${PUBLIC_STATES.DISCOVERY}:return_territory`]: PUBLIC_STATES.TERRITORIAL_MILKS,
  [`${PUBLIC_STATES.DISCOVERY}:leave_trace`]: PUBLIC_STATES.DISCOVERY,
  [`${PUBLIC_STATES.CURATORIAL_DEVICE}:return_discovery`]: PUBLIC_STATES.DISCOVERY,
  [`${PUBLIC_STATES.CURATORIAL_DEVICE}:return_territory`]: PUBLIC_STATES.TERRITORIAL_MILKS,
  [`${PUBLIC_STATES.CURATORIAL_DEVICE}:leave_trace`]: PUBLIC_STATES.CURATORIAL_DEVICE,
  [`${PUBLIC_STATES.RETURN}:return_cosmos`]: PUBLIC_STATES.COSMICOXES,
  [`${PUBLIC_STATES.RETURN}:return_territory`]: PUBLIC_STATES.TERRITORIAL_MILKS,
  [`${PUBLIC_STATES.RETURN}:rest`]: PUBLIC_STATES.BLACK
});

export class AtlasExperienceMachine extends EventTarget {
  #state = PUBLIC_STATES.BLACK;
  #context = Object.seal({
    territoryId: null,
    discoveryId: null,
    deviceId: null,
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
    // Nuno só pode existir visualmente enquanto contributionActive === true.
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
    if (['brincar', 'convite', 'tentar_sorte'].includes(eventName)) {
      this.#context.ticketAction = eventName;
      this.#context.discoveryId = detail.discoveryId ?? null;
    }
    if (eventName === 'open_device') {
      this.#context.deviceId = detail.deviceId ?? null;
    }
    if (['return_territory', 'return_cosmos', 'rest'].includes(eventName)) {
      this.#context.deviceId = null;
      this.#context.discoveryId = null;
      this.#context.ticketAction = null;
      if (eventName === 'rest') this.#context.territoryId = null;
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
  // Defesa mínima em profundidade. O boundary CI continua soberano.
  const serialized = JSON.stringify(payload ?? {}).toLowerCase();
  const forbidden = [
    'camada invisível',
    'camada invisivel',
    'territorial-hypothesis-engine',
    'h-0047',
    'olhapin',
    'mistral_api_key',
    'ptservidor_ftps_password',
    'prompt interno',
    'private_engine'
  ];
  const hit = forbidden.find(token => serialized.includes(token));
  if (hit) throw new Error(`PUBLIC_BOUNDARY_REJECTED:${hit}`);
  return payload;
}

export { PUBLIC_STATES };
