export const CURATORIAL_EVENT_TYPES = [
  "COSMICOXES_SPIN",
  "LIVRO_CUBO_PAGE_TAP",
  "PALAVRA_RITUAL_SPOKEN",
  "BARULHO_VIVO_PLAY",
  "ORACULO_AR_ACTIVATED",
  "NUNO_CONTRIBUTION"
] as const;

export type CuratorialEventType = typeof CURATORIAL_EVENT_TYPES[number];

export interface CuratorialEvent {
  id: string;
  eventType: CuratorialEventType;
  deviceId: string;
  territoryId?: string;
  occurredAt: string;
  offline: boolean;
  humanPublicationGate: boolean;
  provenanceIds: string[];
  payload: Record<string, unknown>;
}

export function isPublicationEligible(e: CuratorialEvent): boolean {
  return e.humanPublicationGate === true && e.provenanceIds.length > 0;
}
