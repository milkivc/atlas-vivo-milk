// Atlas Vivo MILK — Domain Model
// PT-PT, RGPD, WCAG 2.2 AA compliant
// Provenience tracking, PENDENTE/NOT_VERIFIED states

// --- Core Types ---
type Estado = 'PENDENTE' | 'NOT_VERIFIED' | 'VERIFIED'

interface Proveniencia {
  id: string
  fonte: string
  data: string
  autor: string
  licenca?: string
}

// --- Geographic Hierarchy ---
interface Freguesia {
  id: string
  nome: string
  estado: Estado
  tem_conteudo_curatorial: boolean
  proveniencia: Proveniencia[]
  festas: Festividade[]
}

interface Concelho {
  id: string
  nome: string
  estado: Estado
  tem_conteudo_curatorial: boolean
  proveniencia: Proveniencia[]
  freguesias: Freguesia[]
}

interface Distrito {
  id: string
  nome: string
  estado: Estado
  tem_conteudo_curatorial: boolean
  proveniencia: Proveniencia[]
  concelhos: Concelho[]
}

// --- Cultural Events ---
interface Festividade {
  id: string
  nome: string
  descricao?: string
  data_inicio?: string
  data_fim?: string
  localizacao: {
    distrito_id: string
    concelho_id: string
    freguesia_id: string
  }
  estado: Estado
  tem_conteudo_curatorial: boolean
  proveniencia: Proveniencia[]
}

// --- Root Domain Model ---
interface AtlasVivoMILK {
  distritos: Distrito[]
  meta: {
    versao: string
    data_ultima_atualizacao: string
    responsavel: string
  }
}

// --- Factory Functions (Optional, for initialization) ---
function criarFreguesia(
  id: string,
  nome: string,
  estado: Estado = 'PENDENTE',
  tem_conteudo_curatorial: boolean = false,
  proveniencia: Proveniencia[] = [],
  festas: Festividade[] = []
): Freguesia {
  return {
    id,
    nome,
    estado,
    tem_conteudo_curatorial,
    proveniencia,
    festas,
  }
}

function criarConcelho(
  id: string,
  nome: string,
  estado: Estado = 'PENDENTE',
  tem_conteudo_curatorial: boolean = false,
  proveniencia: Proveniencia[] = [],
  freguesias: Freguesia[] = []
): Concelho {
  return {
    id,
    nome,
    estado,
    tem_conteudo_curatorial,
    proveniencia,
    freguesias,
  }
}

function criarDistrito(
  id: string,
  nome: string,
  estado: Estado = 'PENDENTE',
  tem_conteudo_curatorial: boolean = false,
  proveniencia: Proveniencia[] = [],
  concelhos: Concelho[] = []
): Distrito {
  return {
    id,
    nome,
    estado,
    tem_conteudo_curatorial,
    proveniencia,
    concelhos,
  }
}

export type {
  Estado,
  Proveniencia,
  Freguesia,
  Concelho,
  Distrito,
  Festividade,
  AtlasVivoMILK,
}
export { criarFreguesia, criarConcelho, criarDistrito }