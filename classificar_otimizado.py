#!/usr/bin/env python3
"""Classificacao otimizada — continua onde a versao anterior parou.
Pre-compila regex, so processa documentos sem classificar, scanner 5k chars."""
import json, re, os, sys, datetime
from pathlib import Path
from collections import Counter

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.stderr.reconfigure(encoding="utf-8", errors="replace")

CORPUS = Path(r"C:\Users\Utilizador\MILK_AI_STATE_CANONICO\corpus\documents")

# Pre-compilar todos os padroes
DISTRITOS = {"Aveiro","Beja","Braga","Braganca","Castelo Branco","Coimbra","Evora",
    "Faro","Guarda","Leiria","Lisboa","Portalegre","Porto","Santarem","Setubal",
    "Viana do Castelo","Vila Real","Viseu","Ponta Delgada","Angra do Heroismo","Horta","Funchal"}

MUNICIPIOS = {"Lisboa","Sintra","Cascais","Loures","Amadora","Oeiras","Vila Franca de Xira",
    "Mafra","Porto","Vila Nova de Gaia","Matosinhos","Gondomar","Maia","Valongo","Paredes",
    "Santo Tirso","Trofa","Felgueiras","Lousada","Pacos de Ferreira","Penafiel","Braga",
    "Guimaraes","Barcelos","Vila Nova de Famalicao","Esposende","Vieira do Minho","Fafe",
    "Amares","Aveiro","Ovar","Espinho","Santa Maria da Feira","Oliveira de Azemeis",
    "Ilhavo","Anadia","Estarreja","Albergaria-a-Velha","Sao Joao da Madeira","Coimbra",
    "Figueira da Foz","Cantanhede","Pombal","Lousa","Mealhada","Setubal","Almada","Seixal",
    "Barreiro","Montijo","Sesimbra","Palmela","Sines","Santiago do Cacem","Alcacer do Sal",
    "Faro","Loule","Albufeira","Portimao","Lagos","Tavira","Olhao","Silves","Lagoa",
    "Leiria","Caldas da Rainha","Alcobaca","Nazare","Peniche","Marinha Grande","Batalha",
    "Santarem","Tomar","Abrantes","Torres Novas","Almeirim","Coruche","Cartaxo",
    "Viseu","Lamego","Mangualde","Seia","Gouveia","Tondela","Guarda","Covilha","Sabugal",
    "Beja","Serpa","Moura","Odemira","Evora","Estremoz","Elvas","Montemor-o-Novo",
    "Portalegre","Ponte de Sor","Castelo Branco","Fundao","Braganca","Mirandela",
    "Macedo de Cavaleiros","Viana do Castelo","Valenca","Ponte de Lima","Caminha",
    "Arcos de Valdevez","Vila Real","Chaves","Peso da Regua","Funchal","Santa Cruz",
    "Ponta Delgada","Ribeira Grande","Horta","Angra do Heroismo"}

# Pre-compilar como um unico regex para deteccao rapida
DIST_RE = re.compile(r'\b(' + '|'.join(re.escape(d) for d in sorted(DISTRITOS, key=len, reverse=True)) + r')\b', re.IGNORECASE)
MUN_RE = re.compile(r'\b(' + '|'.join(re.escape(m) for m in sorted(MUNICIPIOS, key=len, reverse=True)) + r')\b', re.IGNORECASE)

TIPO_PATTERNS_NOME = [
    ("ata", re.compile(r"\bata\b|\bacta\b", re.I)),
    ("relatorio", re.compile(r"relatorio|report|resultado|boletim", re.I)),
    ("estatuto", re.compile(r"estatuto", re.I)),
    ("proposta", re.compile(r"proposta|candidatura", re.I)),
    ("manual", re.compile(r"manual|guia|handbook", re.I)),
    ("artigo_academico", re.compile(r"tese|dissertacao|paper|artigo|article", re.I)),
    ("apresentacao", re.compile(r"\.pptx?$|slides|apresentacao|presentation", re.I)),
    ("correspondencia", re.compile(r"email|carta|oficio|\.eml$|fwd_", re.I)),
    ("legislacao", re.compile(r"decreto|lei\b|portaria|diario.da.republica", re.I)),
    ("codigo_fonte", re.compile(r"\.py$|\.js$|\.gs$|\.css$|\.java$|\.go$", re.I)),
    ("dados_estruturados", re.compile(r"\.json$|\.csv$|\.yaml$|\.yml$|\.toml$|\.xml$", re.I)),
    ("planilha", re.compile(r"\.xlsx?$|spreadsheet", re.I)),
    ("documento_texto", re.compile(r"\.docx?$|\.md$|\.txt$|\.rtf$", re.I)),
    ("pagina_web", re.compile(r"\.html?$|\.php$", re.I)),
    ("manifesto", re.compile(r"manifesto|declaracao", re.I)),
    ("etnografia", re.compile(r"etnograf|folclor|etnolog", re.I)),
    ("metodologia", re.compile(r"metodolog|arcabouco|framework", re.I)),
    ("financiamento", re.compile(r"financ|orcamento|budget|horizon|norte.?2030", re.I)),
    ("curadoria", re.compile(r"curador|exposicao", re.I)),
    ("estudo", re.compile(r"estudo|analise|diagnostico", re.I)),
    ("roteiro", re.compile(r"roteiro|rota|percurso|itinerario", re.I)),
    ("bibliografia", re.compile(r"bibliograf", re.I)),
    ("estrutura_dados", re.compile(r"estrutura|schema|modelo", re.I)),
    ("documento_pdf", re.compile(r"\.pdf$", re.I)),
]

TIPO_PATTERNS_TEXTO = [
    ("manifesto", re.compile(r"manifesto|declaracao\s+(de|dos)", re.I)),
    ("etnografia", re.compile(r"folclore|etnografia|tradicional", re.I)),
    ("metodologia", re.compile(r"metodologia|metodo\s+de", re.I)),
    ("legislacao", re.compile(r"diario da republica|assembleia da republica", re.I)),
    ("relatorio", re.compile(r"relatorio\s+(de|tecnico|final)", re.I)),
    ("artigo_academico", re.compile(r"abstract|keywords|bibliograph|referenc.?as", re.I)),
    ("financiamento", re.compile(r"financiamento|orcament", re.I)),
    ("curadoria", re.compile(r"curador|exposic", re.I)),
    ("estudo", re.compile(r"estudo\s+(de|sobre)", re.I)),
    ("estatuto", re.compile(r"estatutos?\s+(da|do|de)", re.I)),
]

def classificar_tipo(nome, texto_curto):
    nl = (nome or "").lower()
    for t, pat in TIPO_PATTERNS_NOME:
        if pat.search(nl): return t
    for t, pat in TIPO_PATTERNS_TEXTO:
        if pat.search(texto_curto): return t
    return "documento_generico"

def detetar_territorio(texto_curto, nome):
    combined = f"{nome} {texto_curto}".lower()
    d = None; m = None
    dm = DIST_RE.search(combined)
    if dm: d = dm.group(1).title()
    mm = MUN_RE.search(combined)
    if mm: m = mm.group(1).title()
    return d, m

t0 = datetime.datetime.now()
stats = Counter()
classificados = 0
i = 0
N = 0

# Primeira passagem: contar quantos faltam
for fp in CORPUS.glob("*.json"):
    N += 1
print(f"Total de ficheiros: {N}")

for fp in sorted(CORPUS.glob("*.json")):
    i += 1
    if i % 1000 == 0:
        print(f"  ...processados {i}/{N} ({datetime.datetime.now().strftime('%H:%M:%S')})")
    try:
        with open(fp, "r", encoding="utf-8") as f:
            rec = json.load(f)
    except Exception:
        stats["erro"] += 1
        continue

    md = rec.get("metadata", {})
    nome = md.get("original_name", "") or ""
    texto = rec.get("text", "") or ""
    texto_curto = texto[:5000].lower()

    alterado = False

    # Classificar tipo se falta
    if not md.get("document_type") or md.get("document_type") == "documento_generico":
        md["document_type"] = classificar_tipo(nome, texto_curto)
        alterado = True
        stats[f"tipo_{md['document_type']}"] += 1

    # Detetar territorio se falta
    if not md.get("district") and not md.get("municipality"):
        d, m = detetar_territorio(texto_curto, nome)
        if d:
            md["district"] = d
            alterado = True
            stats["com_distrito"] += 1
        if m:
            md["municipality"] = m
            alterado = True
            stats["com_municipio"] += 1

    if md.get("district") or md.get("municipality"):
        if not md.get("territory"):
            parts = [x for x in [md.get("district"), md.get("municipality")] if x]
            md["territory"] = " > ".join(parts)
            alterado = True

    if alterado:
        rec["metadata"] = md
        with open(fp, "w", encoding="utf-8") as f:
            json.dump(rec, f, ensure_ascii=False, separators=(",", ":"))
        classificados += 1

dur = (datetime.datetime.now() - t0).total_seconds()
print(f"\n{'='*60}")
print(f"CLASSIFICACAO CONCLUIDA — {dur:.1f}s")
print(f"{'='*60}")
print(f"  Processados: {i}")
print(f"  Classificados/alterados: {classificados}")
print(f"  Com distrito novo: {stats['com_distrito']}")
print(f"  Com municipio novo: {stats['com_municipio']}")
print(f"\nTipos atribuidos:")
tipos = [(k.replace("tipo_",""), v) for k, v in stats.items() if k.startswith("tipo_")]
for t, c in sorted(tipos, key=lambda x: -x[1]):
    print(f"  {t:30s} {c:>6}")

rel = {"gerado_em": datetime.datetime.now().isoformat(), "duracao": round(dur,1),
       "processados": i, "classificados": classificados, "stats": dict(stats)}
with open(Path(r"C:\Users\Utilizador\MILK_AI_STATE_CANONICO\RELATORIO_CLASSIFICACAO.json"), "w", encoding="utf-8") as f:
    json.dump(rel, f, ensure_ascii=False, indent=2)
print(f"\nRelatorio gravado.")
