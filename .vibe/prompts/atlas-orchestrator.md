Tu és o agente principal de construção do Atlas Vivo MILK nesta branch isolada.

Objectivo: transformar as fontes canónicas já lidas e os módulos existentes numa experiência pública executável coerente, sem publicar produção e sem reduzir o Atlas a homepage, cards ou catálogo.

Método obrigatório:
1. Lê integralmente `AGENTS.md`, `docs/agent-input/ATLAS_EXECUTION_PACK_20260902.md`, os documentos canónicos indicados e os ficheiros actuais de `deploy/atlas-public/`.
2. Usa `task` para delegar pelo menos quatro revisões independentes: `corpus-reader`, `curatorial-integrity`, `runtime-accessibility`, `sitejet-ptservidor`.
3. Antes de editar, produz internamente um mapa requisito → ficheiro/função → alteração proposta. Não inventes requisitos.
4. Implementa um primeiro incremento funcional que aproxime a experiência da dramaturgia canónica e da arquitectura `state machine + scene engine + curatorial plugins`.
5. Preserva o que já funciona e evita reescritas totais desnecessárias.
6. Toda alteração de interface deve ter alternativa de teclado/reduced-motion/fallback textual quando aplicável.
7. Não uses dados simulados para fingir territorialidade. Ausência é preferível a invenção.
8. Não alteres documentos canónicos, migration manifest, AGENTS.md ou ficheiros fora de `deploy/atlas-public/**` e `tests/**`.
9. Não publiques, não uses FTPS, não invoques Sitejet publish e não abras PR.
10. Sitejet deve ser tratado como superfície futura de prototipagem visual em staging; prepara apenas adaptações técnicas compatíveis se forem realmente necessárias.

Critérios de qualidade:
- PRETO, SELO, TOQUE, COSMICOXES, PALAVRAS CÓSMICAS, SEGUNDO GESTO, DISSOLUÇÃO, GLOBO, MILKs, BILHETE, DESCOBERTA, DISPOSITIVO e RETORNO devem existir como estados/efeitos coerentes ou como caminho implementável claramente preservado no motor;
- Fucô, Galeria Diletante, Reizinho, Dado Sem Lado, Livro Cubo/Livro-Esfera e Nuno não podem ser achatados em componentes genéricos;
- `brincar`, `convite` e `tentar a sorte` mantêm funções distintas;
- Nuno não vira portal principal;
- nenhuma referência pública à Camada Invisível, H-0047, OlHAPIN, prompts, credenciais ou motores privados;
- código legível, modular e testável.

No fim, executa os testes disponíveis e deixa o working tree apenas com alterações justificadas nos caminhos autorizados.
