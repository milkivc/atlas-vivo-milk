# ATLAS VIVO MILK — TRAVAS DE FOCO, CREDENCIAIS, AUTORIA E NÃO REGRESSÃO

Status: obrigatório para toda execução automatizada.

## Foco imutável deste ciclo
WebApp Atlas Vivo MILK em PTServidor, alimentada pelo corpus no Nextcloud e construída/revista pelos agentes Mistral + Mistral Code/Vibe Code.

## Regra autoral soberana
A descrição integral de cada curadoria é matéria obrigatória de engenharia de experiência. Nenhum elemento autoral sustentado pela fonte pode ser omitido por conveniência técnica.

Os agentes podem propor melhorias, mas devem separar claramente:
- `AUTORIAL`: o que vem da descrição/documentos da MILK;
- `INTERPRETAÇÃO`: como o agente entende a relação entre elementos da fonte;
- `MELHORIA_PROPOSTA`: optimização técnica, sensorial, lúdica, acessível ou de integração sugerida pelo agente.

Se existir dúvida material, ambiguidade, contradição entre versões, lacuna de autoria, mecânica não sustentada ou decisão estética que altere sentido, a curadoria entra em `NEEDS_CLARIFICATION` e o agente deve perguntar à autora antes de código.

## Porta obrigatória de visualização antes do código
Nenhuma curadoria pode chegar ao Vibe Code sem cumprir, pela ordem:
1. gerar uma proposta de experiência completa segundo `specs/curatorial-author-review.schema.json`;
2. demonstrar cobertura elemento-a-elemento da descrição autoral;
3. apresentar a experiência à autora em linguagem experiencial, mostrando chegada, gesto, acções, resposta do sistema, sequência sensorial, ritmo/tempo, territorialidade, relação físico-digital, retorno/fim e acessibilidade;
4. listar separadamente dúvidas e melhorias propostas;
5. obter aprovação humana explícita da autora;
6. fixar o SHA-256 exacto da proposta aprovada num registo segundo `specs/curatorial-author-approval.schema.json`;
7. permitir código somente para esse hash exacto.

Se a proposta mudar depois da aprovação, o hash muda e a autorização de código caduca automaticamente. É obrigatória nova revisão humana.

## Linha fordista de produção
Cada curadoria percorre SEM SALTAR esta linha:

1. NEXTCLOUD_INGEST — recuperar fonte integral e checksum.
2. SOURCE_INTEGRITY — confirmar ficheiro, versão, direitos, estado público/restrito e proveniência.
3. MISTRAL_DOCUMENT_INTELLIGENCE — OCR/document understanding/library apenas se necessário.
4. MISTRAL_HERMENEUT — extrair invariantes autorais, relações, ambiguidades e limites.
5. MISTRAL_LUDIC_SENSORY_DECODERS — mecânica, gesto, ritmo, acaso, som, silêncio, espaço, materialidade, físico/digital.
6. AUTHORIAL_COVERAGE_MATRIX — mapear cada elemento relevante da descrição para uma manifestação concreta na experiência.
7. EXPERIENCE_PREVIEW — gerar experiência completa, ainda sem código.
8. AUTHOR_QUESTIONS_GATE — se houver dúvida material, perguntar e bloquear código.
9. AUTHOR_EXPERIENCE_REVIEW — mostrar a experiência à autora e recolher decisão.
10. AUTHOR_HASH_APPROVAL — aprovação explícita do hash exacto da experiência.
11. EXPERIENCE_CONTRACT — gerar JSON conforme `specs/curatorial-experience-contract.schema.json`, fiel à experiência aprovada.
12. HUMAN_SOURCE_GATE — falha fechada se a fonte não sustenta a mecânica ou se direitos/publicação não estão claros.
13. VIBE_CODE_BUILD — materializar runtime específico apenas após aprovação autoral válida.
14. DETERMINISTIC_TESTS — sintaxe, estados, assets, acessibilidade, privacidade, fronteira PUBLIC-ONLY, performance.
15. MISTRAL_COUNCIL — fidelidade autoral + runtime/acessibilidade + boundary + COPÉRNICO/território quando aplicável.
16. INTERNAL_STAGE — empacotar com SHA-256 e enviar para staging privado PTServidor; readback obrigatório.
17. SITEJET_CPANEL_TEST — composição/teste interno no construtor PTServidor quando token cPanel estiver validado.
18. EXPERIENCE_ACCEPTANCE — a autora vê a experiência funcional; só conta como concluída se corresponder à proposta aprovada.
19. RELEASE_CANDIDATE — pacote PUBLIC-ONLY isolado.
20. PRODUCTION_PROMOTION — etapa separada, somente após gates completos.

## Travas absolutas
- `AGENTS.md` deve existir e conter o checkpoint actual.
- `ops/critical-credentials-registry.yml` deve existir.
- Nenhum workflow crítico pode iniciar uma etapa dependente sem verificar presença da credencial necessária.
- Nenhum workflow pode apagar, rodar ou substituir automaticamente credenciais.
- Nenhum valor secreto pode aparecer em logs, ficheiros, artefactos ou commits.
- Credencial recebida por email deve permanecer recuperável pelo rótulo Gmail correspondente.
- Nextcloud é a fonte operacional deste ciclo. Google Drive não é fallback automático.
- COPÉRNICO existente é a base do globo; não criar substituto.
- Nenhuma curadoria entra em código sem experiência previamente mostrada e aprovada pela autora.
- Nenhuma melhoria proposta pelo agente entra em código sem decisão autoral explícita quando altera ou amplia a experiência aprovada.
- Curadoria sem contrato de experiência válido não entra na fila de código.
- Curadoria com fallback genérico não pode ser marcada como concluída.
- Meta de conclusão: 49/49 runtimes específicos com `generic_fallback_allowed=false`.
- Material `NÃO PUBLICAR`, dados reservados, credenciais e dados sensíveis nunca entram no pacote público.
- Produção pública é sempre etapa posterior ao staging interno.
- `git push --mirror --force`, `git push --force` para branches canónicas e rotinas destrutivas são proibidos.
- Nenhuma falha de uma estação bloqueia as outras estações independentes: a linha deve continuar onde houver matéria e credenciais válidas.

## Estado real que não pode regredir
- Branch: `work/copernico-recovery-webapp-20260902`.
- COPÉRNICO materializado na WebApp e territorial gateado.
- `falARTE` tem candidato com backend privado em commit histórico `6f9728b37b066d359bbfac181dcc9401ef5fd79c`.
- Existem schemas obrigatórios de experiência e de revisão/autorização autoral em `specs/`.
- Equipa `.vibe/agents/` especializada criada.
- Mistral API autenticada; 50 modelos visíveis; Codestral e Voxtral detectados.
- PTServidor confirma cPanel API + Softaculous API; cPanel exige API token.
- Conta `migration@associacaomilk.pt` autentica FTPS para staging privado.
- Conta dedicada `atlas@associacaomilk.pt` autentica FTPS com o secret `PTSERVIDOR_ATLAS_FTPS_PASSWORD`; teste read-only PASS em 2026-09-02, zero escritas.
- Nextcloud existente está em `https://associacaomilk.pt/nextcloud`; teste WebDAV real em 2026-09-02 resolveu rota/utilizador/secret mas devolveu HTTP 401.
- PTServidor recebeu pedido de recuperação Nextcloud e pedido de API token cPanel dedicado para Sitejet/UAPI.

## Critério de verdade
`FEITO` só significa que a etapa tem evidência: commit, hash, log PASS, readback, resposta API, aprovação autoral explícita ou teste público correspondente.
