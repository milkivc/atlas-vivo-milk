#!/usr/bin/env python3
"""Classificacao territorial e tipologica automatica dos 10.535 documentos.

Deteta:
- district, municipality, parish: procura nomes no texto (gazetteer PT)
- document_type: classifica por padroes no nome/conteudo
- actualiza consent_status/rgpd_status/rights_status quando aplicavel

Usa o autor Eduardo Mauricio Vieira Cabral e Araujo (Eduardo Mauer).
"""
import json, re, os, sys, datetime
from pathlib import Path
from collections import Counter

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.stderr.reconfigure(encoding="utf-8", errors="replace")

CORPUS = Path(r"C:\Users\Utilizador\MILK_AI_STATE_CANONICO\corpus\documents")
AUTOR = "Eduardo Mauricio Vieira Cabral e Araujo"

# === GAZETTEER: Distritos -> Municipios (top nomes) ===
# Completado com os 18 distritos de Portugal continental + Acores + Madeira
DISTRITOS = {
    "Aveiro", "Beja", "Braga", "Braganca", "Castelo Branco", "Coimbra",
    "Evora", "Faro", "Guarda", "Leiria", "Lisboa", "Portalegre", "Porto",
    "Santarem", "Setubal", "Viana do Castelo", "Vila Real", "Viseu",
    "Ponta Delgada", "Angra do Heroismo", "Horta", "Funchal",
}

# Municipios mais comuns por distrito (gazetteer condensado)
MUNICIPIOS = {
    # Lisboa
    "Lisboa", "Sintra", "Cascais", "Loures", "Amadora", "Oeiras", "Vila Franca de Xira",
    "Mafra", " Torres Novas",
    # Porto
    "Porto", "Vila Nova de Gaia", "Matosinhos", "Gondomar", "Maia", "Valongo", "Paredes",
    "Santo Tirso", "Trofa", "Felgueiras", "Lousada", "Paços de Ferreira", "Penafiel",
    # Braga
    "Braga", "Guimaraes", "Barcelos", "Vila Nova de Famalicao", "Esposende", "Vieira do Minho",
    "Cabeceiras de Basto", "Fafe", "Povoa de Lanhoso", "Terras de Bouro", "Amares",
    # Aveiro
    "Aveiro", "Ovar", "Espinho", "Santa Maria da Feira", "Oliveira de Azemeis",
    "Vale de Cambra", "Sever do Vouga", "Arouca", "Oliveira do Bairro", "Anadia",
    "Murtosa", "Estarreja", "Albergaria-a-Velha", "Sao Joao da Madeira", "Ilhavo",
    "Vagos", "Aveiro",
    # Coimbra
    "Coimbra", "Figueira da Foz", "Cantanhede", "Miranda do Corvo", "Montemor-o-Velho",
    "Pombal", "Lousa", "Condeixa-a-Nova", "Penacova", "Mealhada", "Soure", "Arganil",
    # Setubal
    "Setubal", "Almada", "Seixal", "Barreiro", "Montijo", "Alcochete", "Sesimbra",
    "Palmela", "Moita", "Sines", "Santiago do Cacem", "Alcacer do Sal", "Grandola",
    # Faro (Algarve)
    "Faro", "Loulé", "Albufeira", "Portimao", "Lagos", "Tavira", "Olhao",
    "Silves", "Lagoa", "Faro", "Vila Real de Santo Antonio", "Sao Bras de Alportel",
    "Vila do Bispo", "Aljezur", "Monchique", "Castro Marim",
    # Leiria
    "Leiria", "Caldas da Rainha", "Alcobaca", "Nazare", "Peniche", "Marinha Grande",
    "Porto de Mos", "Batalha", "Ourém", "Pombal",
    # Santarem
    "Santarem", "Tomar", "Abrantes", "Torres Novas", "Almeirim", "Coruche",
    "Cartaxo", "Ferreira do Zezere", "Entroncamento", "Ourém",
    # Viseu
    "Viseu", "Lamego", "Mangualde", "Penafiel", "Seia", "Gouveia", "Tondela",
    "Santa Comba Dao", "Sao Pedro do Sul", "Oliveira de Frades", "Vouzela",
    # Guarda
    "Guarda", "Covilha", "Sabugal", "Pinhel", "Trancoso", "Figueira de Castelo Rodrigo",
    "Almeida", "Manteigas", "Gouveia", "Seia", "Celorico da Beira", "Fornos de Algodres",
    # Beja
    "Beja", "Serpa", "Moura", "Odemira", "Castro Verde", "Almodovar", "Vidigueira",
    "Cuba", "Ferreira do Alentejo", "Mertola",
    # Evora
    "Evora", "Estremoz", "Elvas", "Montemor-o-Novo", "Vila Vicosa", "Redondo",
    "Reguengos de Monsaraz", "Arraiolos", "Alandroal", "Portel", "Mora",
    # Portalegre
    "Portalegre", "Elvas", "Ponte de Sor", "Campo Maior", "Marvao", "Arronches",
    "Alter do Chao", "Avis", "Crato", "Gaviao", "Nisa", "Castelo de Vide",
    # Castelo Branco
    "Castelo Branco", "Covilha", "Fundao", "Idanha-a-Nova", "Penamacor",
    "Proenca-a-Nova", "Sertã", "Vila de Rei", "Vila Velha de Rodao", "Oleiros",
    # Braganca
    "Braganca", "Mirandela", "Macedo de Cavaleiros", "Miranda do Douro",
    "Vinhais", "Mogadouro", "Carrazeda de Ansiaes", "Freixo de Espada a Cinta",
    # Viana do Castelo
    "Viana do Castelo", "Valenca", "Ponte de Lima", "Vila Nova de Cerveira",
    "Caminha", "Paredes de Coura", "Arcos de Valdevez", "Melgaco", "Moncao",
    # Vila Real
    "Vila Real", "Chaves", "Peso da Regua", "Sabrosa", "Alijo", "Murca",
    "Mesao Frio", "Santa Marta de Penaguiao", "Povoas", "Ribeira de Pena",
    # Acores
    "Ponta Delgada", "Ribeira Grande", "Lagoa", "Angra do Heroismo", "Praia da Vitoria",
    "Horta", "Velas", "Calheta", "Vila Franca do Campo",
    # Madeira
    "Funchal", "Câmara de Lobos", "Santa Cruz", "Machico", "Santana",
    "Porto Santo", "Ribeira Brava", "Ponta do Sol", "Calheta", "Sao Vicente",
}

# Freguesias mais frequentes (subset — seria impossivel listar todas as 3092)
# Vamos confiar na deteccao por distrito/municipio principalmente
FREGUESIAS_CONHECIDAS = {
    # Lisboa
    "Alfama", "Bairro Alto", "Belém", "Lumiar", "Carnide", "Olivais", "Marvila",
    "Alvalade", "Areeiro", "Arroios", "Campolide", "Estrela", "Ajuda", "Benfica",
    "Lumiar", "Santa Maria dos Olivais",
    # Porto
    "Cedofeita", "Bonfim", "Paranhos", "Campanha", "Lordelo do Ouro", "Massarelos",
    "Ramalde", "Aldoar", "Foz do Douro", "Nevogilde",
    # Braga
    "Sao Vicente", "Sao Joao do Souto", "Maximinos", "Real", "Gualtar", "Nogueira",
    # Outras
    "Sao Pedro", "Sao Sebastiao", "Nossa Senhora da Assuncao", "Santa Maria",
    "Sao Joao", "Sao Paulo", "Sao Jorge", "Trindade",
}

# === CLASSIFICACAO TIPOLOGICA ===
# Padroes no nome do ficheiro e no texto
TIPO_PATTERNS = [
    # (document_type, padroes_regex_no_nome, padroes_regex_no_texto)
    ("ata", [r"\bata\b", r"\bacta\b"], []),
    ("relatorio", [r"relatorio", r"report", r"resultado", r"\bboletim\b"], [r"relatorio\s+(de|tecnico|final)"]),
    ("parecer", [r"parecer"], []),
    ("estatuto", [r"estatuto"], [r"estatutos?\s+(da|do|de)"]),
    ("contrato", [r"contrato", r"acordo"], [r"contrato\s+de"]),
    ("proposta", [r"proposta", r"candidatura", r"project.?"], [r"proposta\s+(de|para)"]),
    ("manual", [r"manual", r"guia", r"handbook"], []),
    ("artigo_academico", [r"tese", r"dissertacao", r"paper", r"artigo", r"article"], [r"abstract", r"keywords", r"bibliograph", r"referenc.?as"]),
    ("apresentacao", [r"\.pptx?$", r"slides", r"apresentacao", r"presentation"], []),
    ("folheto", [r"folheto", r"flyer", r"brochura"], []),
    ("correspondencia", [r"email", r"carta", r"oficio", r"\.eml$", r"fwd_"], []),
    ("legislacao", [r"decreto", r"lei", r"portaria", r"diario.da.republica", r"\bdr\b"], [r"diario da republica", r"assembleia da republica"]),
    ("geografico", [r"\.geojson", r"\.kml", r"\.shp", r"mapa", r"carta"], []),
    ("dados_estruturados", [r"\.json$", r"\.csv$", r"\.yaml$", r"\.yml$", r"\.toml$"], []),
    ("codigo_fonte", [r"\.py$", r"\.js$", r"\.gs$", r"\.html$", r"\.css$", r"\.java$", r"\.go$"], []),
    ("planilha", [r"\.xlsx?$", r"\.csv$", r"spreadsheet", r"folha"], []),
    ("documento_texto", [r"\.docx?$", r"\.md$", r"\.txt$", r"\.rtf$"], []),
    ("pagina_web", [r"\.html$", r"\.htm$", r"\.php$"], []),
    ("imagem", [r"\.jpg$", r"\.jpeg$", r"\.png$", r"\.gif$", r"\.svg$"], []),
    ("audio", [r"\.mp3$", r"\.wav$", r"\.ogg$"], []),
    ("configuracao", [r"\.env", r"config", r"settings", r"\.ini$"], []),
    ("manifesto", [r"manifesto", r"declaracao", r"carta"], [r"manifesto", r"declaracao\s+(de|dos)"]),
    ("estudo", [r"estudo", r"analise", r"diagnostico", r"research"], [r"estudo\s+(de|sobre)"]),
    ("roteiro", [r"roteiro", r"rota", r"percurso", r"itinerario"], []),
    ("entrevista", [r"entrevista", r"transcricao"], [r"entrevist", r"inquirid"]),
    ("etnografia", [r"etnograf", r"folclor", r"etnolog"], [r"folclore", r"etnografia", r"tradicional"]),
    ("metodologia", [r"metodolog", r"arcabouco", r"framework"], [r"metodologia", r"metodo\s+de"]),
    ("estrutura_dados", [r"estrutura", r"schema", r"modelo"], [r"schema", r"modelo\s+de\s+dados"]),
    ("financiamento", [r"financ", r"orcamento", r"custo", r"budget", r"horizon", r"norte.?2030"], [r"financiamento", r"orcament"]),
    ("curadoria", [r"curador", r"exposicao", r"artist"], [r"curador", r"exposic"]),
    ("audiovisual", [r"\.mp4$", r"video", r"documentario"], []),
    ("bibliografia", [r"bibliograf", r"referenc"], [r"bibliografia"]),
]

def classificar_tipo(original_name, text):
    nome_lower = (original_name or "").lower()
    texto_lower = (text or "")[:5000].lower()  # so primeiros 5000 chars para performance
    for doc_type, pat_nome, pat_texto in TIPO_PATTERNS:
        for p in pat_nome:
            if re.search(p, nome_lower):
                return doc_type
    for doc_type, pat_nome, pat_texto in TIPO_PATTERNS:
        for p in pat_texto:
            if re.search(p, texto_lower):
                return doc_type
    # fallback: por extensao
    ext = os.path.splitext(nome_lower)[1]
    ext_map = {".pdf":"documento_pdf","html":"pagina_web",".htm":"pagina_web",
               ".md":"documento_texto",".txt":"documento_texto",".docx":"documento_texto",".doc":"documento_texto",
               ".py":"codigo_fonte",".js":"codigo_fonte",".gs":"codigo_fonte",".css":"codigo_fonte",
               ".json":"dados_estruturados",".csv":"planilha",".xlsx":"planilha",".pptx":"apresentacao",
               ".xml":"dados_estruturados",".yaml":"configuracao",".yml":"configuracao",".toml":"configuracao"}
    return ext_map.get(ext, "documento_generico")

def detetar_territorio(text, nome):
    """Deteta distrito, municipio e freguesia no texto e nome."""
    texto = (text or "")[:20000]  # primeiros 20k chars
    combined = f"{nome} {texto}".lower()

    distrito = None
    municipio = None
    freguesia = None

    # Distrito
    for d in DISTRITOS:
        if re.search(r'\b' + re.escape(d.lower()) + r'\b', combined):
            distrito = d
            break

    # Municipio
    for m in MUNICIPIOS:
        if re.search(r'\b' + re.escape(m.lower()) + r'\b', combined):
            municipio = m
            break

    # Freguesia
    for f in FREGUESIAS_CONHECIDAS:
        if re.search(r'\b' + re.escape(f.lower()) + r'\b', combined):
            freguesia = f
            break

    return distrito, municipio, freguesia

# === EXECUCAO ===
t0 = datetime.datetime.now()
stats = Counter()
novos_classificados = 0
sem_alteracao = 0
amostras = []

for fp in sorted(CORPUS.glob("*.json")):
    try:
        with open(fp, "r", encoding="utf-8") as f:
            rec = json.load(f)
    except Exception:
        stats["erro_leitura"] += 1
        continue

    md = rec.get("metadata", {})
    nome = md.get("original_name", "") or ""
    texto = rec.get("text", "") or ""

    alterado = False

    # Classificar tipo
    if not md.get("document_type") or md.get("document_type") in (None, "documento_generico"):
        doc_type = classificar_tipo(nome, texto)
        md["document_type"] = doc_type
        alterado = True
        stats[f"tipo_{doc_type}"] += 1

    # Detetar territorio
    if not md.get("district") and not md.get("municipality"):
        d, m, p = detetar_territorio(texto, nome)
        if d:
            md["district"] = d
            alterado = True
            stats["com_distrito"] += 1
        if m:
            md["municipality"] = m
            alterado = True
            stats["com_municipio"] += 1
        if p:
            md["parish"] = p
            alterado = True
            stats["com_freguesia"] += 1
        if not d and not m and not p:
            stats["sem_territorio_detectado"] += 1

    # Se territorio foi detetado, marcar territory
    if md.get("district") or md.get("municipality"):
        if not md.get("territory"):
            parts = [x for x in [md.get("district"), md.get("municipality"), md.get("parish")] if x]
            md["territory"] = " > ".join(parts)
            alterado = True

    if alterado:
        rec["metadata"] = md
        # Propagar para chunks
        for c in rec.get("chunks", []) or []:
            cmd = c.get("metadata", {}) or {}
            if md.get("district") and not cmd.get("district"):
                cmd["district"] = md.get("district")
            if md.get("municipality") and not cmd.get("municipality"):
                cmd["municipality"] = md.get("municipality")
            if md.get("parish") and not cmd.get("parish"):
                cmd["parish"] = md.get("parish")
            c["metadata"] = cmd
        with open(fp, "w", encoding="utf-8") as f:
            json.dump(rec, f, ensure_ascii=False, separators=(",", ":"))
        novos_classificados += 1
        if len(amostras) < 20 and (md.get("district") or md.get("municipality")):
            amostras.append({"nome": nome[:50], "tipo": md.get("document_type"),
                           "distrito": md.get("district"), "municipio": md.get("municipality"),
                           "freguesia": md.get("parish")})
    else:
        sem_alteracao += 1

dur = (datetime.datetime.now() - t0).total_seconds()

print(f"\n{'='*60}")
print(f"CLASSIFICACAO COMPLETA — {dur:.1f}s")
print(f"{'='*60}")
print(f"  Documentos classificados:     {novos_classificados}")
print(f"  Sem alteracao possivel:       {sem_alteracao}")
print(f"  Com distrito detetado:        {stats['com_distrito']}")
print(f"  Com municipio detetado:       {stats['com_municipio']}")
print(f"  Com freguesia detetada:       {stats['com_freguesia']}")
print(f"  Sem territorio no texto:      {stats['sem_territorio_detectado']}")
print(f"\nDistribuicao por tipo (top 15):")
tipos = [(k.replace("tipo_",""), v) for k, v in stats.items() if k.startswith("tipo_")]
tipos.sort(key=lambda x: -x[1])
for t, c in tipos[:15]:
    print(f"  {t:30s} {c:>6}")
print(f"\nAmostras de documentos classificados territorialmente:")
for a in amostras:
    print(f"  {a['nome']:50s} tipo={a['tipo']} dist={a['distrito']} mun={a['municipio']}")

# Gravar relatorio
relatorio = {
    "gerado_em": datetime.datetime.now().isoformat(),
    "duracao_segundos": round(dur, 1),
    "documentos_classificados": novos_classificados,
    "com_distrito": stats["com_distrito"],
    "com_municipio": stats["com_municipio"],
    "com_freguesia": stats["com_freguesia"],
    "sem_territorio": stats["sem_territorio_detectado"],
    "distribuicao_tipos": {k.replace("tipo_",""): v for k, v in stats.items() if k.startswith("tipo_")},
    "amostras": amostras,
}
rel_path = Path(r"C:\Users\Utilizador\MILK_AI_STATE_CANONICO\RELATORIO_CLASSIFICACAO.json")
with open(rel_path, "w", encoding="utf-8") as f:
    json.dump(relatorio, f, ensure_ascii=False, indent=2)
print(f"\nRelatorio gravado em: {rel_path}")
