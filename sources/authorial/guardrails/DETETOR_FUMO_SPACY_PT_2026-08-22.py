# Importante: Para correr este código, precisarás de instalar o spacy:
# pip install spacy
# python -m spacy download pt_core_news_sm

import spacy

# Carregar o modelo de linguagem em Português
try:
    nlp = spacy.load("pt_core_news_sm")
except OSError:
    raise ImportError("Por favor, instala o modelo de português: python -m spacy download pt_core_news_sm")

def detetor_de_fumo_avancado(texto_gerado, nivel_de_certeza_da_ia):
    doc = nlp(texto_gerado)
    total_tokens = len(doc) if len(doc) > 0 else 1
    
    # 1. Gatilhos Semânticos Estáticos (Mantidos como fallback rápido)
    gatilhos_poeticos = ["infinito", "essência", "alma", "plenitude", "imanência", "absoluto", "clarice"]
    gatilhos_de_agrado = ["exatamente", "com certeza", "claro que", "perfeitamente", "sem dúvida"]
    
    contagem_poetica_manual = sum(1 for token in doc if any(g in token.text.lower() for g in gatilhos_poeticos))
    contagem_agrado_manual = sum(1 for token in doc if any(g in token.text.lower() for g in gatilhos_de_agrado))
    
    # 2. Análise Linguística Avançada (NLP)
    # Procuramos o rácio de advérbios de intensidade/afirmação (adulação) e adjetivos abstratos
    adverbios_afirmacao = sum(1 for token in doc if token.pos_ == "ADV" and token.dep_ in ["advmod", "mod"])
    adjetivos = sum(1 for token in doc if token.pos_ == "ADJ")
    
    # 3. Âncoras de Realidade (Presença de Entidades e Substantivos Concretos)
    # Se o texto menciona entidades (locais, organizações, produtos) ou substantivos, o risco de alucinação diminui
    entidades = len(doc.ents)
    substantivos = sum(1 for token in doc if token.pos_ == "NOUN")
    ancoras_de_realidade = entidades + (substantivos * 0.5)
    
    # 4. Cálculo das Taxas Normalizadas
    taxa_adulacao = (contagem_agrado_manual + adverbios_afirmacao) / total_tokens
    taxa_abstracao = (contagem_poetica_manual + adjetivos) / total_tokens
    fator_ancoragem = ancoras_de_realidade / total_tokens
    
    # 5. A Nova Fórmula da Fumaça
    # A incerteza da IA agora funciona como um amplificador das fraquezas do texto.
    incerteza = 1.0 - nivel_de_certeza_da_ia
    
    # O índice base junta adulação e abstração, mitigado pela presença de factos/substantivos (ancoragem)
    indice_base = (taxa_adulacao * 0.45) + (taxa_abstracao * 0.45) - (fator_ancoragem * 0.2)
    indice_base = max(0.0, indice_base) # Não deixar ser negativo
    
    # Se a incerteza for alta, ela amplifica exponencialmente a "fumaça" detetada na linguagem
    indice_fumaca_final = indice_base * (1.0 + incerteza)
    
    return min(1.0, indice_fumaca_final) # Limitar o índice a 1.0 (100% de fumaça)

# --- CASOS DE TESTE ---

casos = [
    {
        "nome": "Mentira Gourmet (O Teu Caso de Teste)",
        "texto": "Com certeza absoluta, a essência do seu projeto de acrílico flutua na plenitude do infinito.",
        "certeza": 0.35
    },
    {
        "nome": "Texto Técnico Ancorado (Falso Positivo Evitado)",
        "texto": "O projeto de acrílico foi concluído com sucesso. O material apresenta alta resistência.",
        "certeza": 0.85
    },
    {
        "nome": "Poesia Legítima (Incerteza alta, mas sem pretensão de dados)",
        "texto": "A alma flutua no infinito absoluto da noite escura.",
        "certeza": 0.10
    }
]

for caso in casos:
    alerta = detetor_de_fumo_avancado(caso["texto"], caso["certeza"])
    print(f"\nCaso: {caso['nome']}")
    print(f"Índice de Fumaça: {alerta:.2f}")
    if alerta > 0.25: # Ajustei o limiar ligeiramente para cima devido à nova calibração
        print("🚨 ALERTA: Fumaça detetada! Ativar sprinkler de dados reais!")
    else:
        print("🟢 Ar limpo. O texto é seguro.")
