import type { AtlasVivoMILK,Distrito,Festividade } from './domain'
const API_BASE_URL=(import.meta.env.VITE_ATLAS_API_BASE_URL as string|undefined)??'/api'
const HEADERS={Accept:'application/json','X-Provenience':'atlas-webapp-public'}
const FORBIDDEN=new Set(['invisibleLayer','invisible_layer','private','secret','credential','password','internal_notes','camada_invisivel','mycorrhiza','micorriza'])
export type UserConsent={age:number;consentPublic:boolean;identityMode:'anonymous'|'pseudonym'|'name';withdrawalAcknowledged:boolean;humanReviewRequired:true}
export const validateNunoConsent=(c:UserConsent)=>c.age>=13&&c.consentPublic&&c.withdrawalAcknowledged&&c.humanReviewRequired===true
export function validateNoInvisibleFields(value:unknown):boolean{const visit=(n:unknown):boolean=>Array.isArray(n)?n.every(visit):(n&&typeof n==='object')?Object.entries(n as Record<string,unknown>).every(([k,v])=>!FORBIDDEN.has(k)&&visit(v)):true;return visit(value)}
async function publicGet<T>(path:string):Promise<T>{const r=await fetch(`${API_BASE_URL}/${path}`,{headers:HEADERS});if(!r.ok)throw new Error(`Atlas API ${r.status}`);const v=await r.json() as T;if(!validateNoInvisibleFields(v))throw new Error('Resposta pública contém campo reservado');return v}
export const fetchAtlas=()=>publicGet<AtlasVivoMILK>('atlas')
export const fetchDistrito=(id:string)=>publicGet<Distrito>(`distritos/${encodeURIComponent(id)}`)
export const fetchFesta=(id:string)=>publicGet<Festividade>(`festas/${encodeURIComponent(id)}`)
