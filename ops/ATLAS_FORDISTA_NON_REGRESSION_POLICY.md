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

## Ordem soberana de criação
A fábrica trabalha sempre nesta precedência:

**CURADORIA → DINÂMICA/BRINCADEIRA/JOGO/CONVITE/RITUAL → EXPERIÊNCIA → DISPOSITIVO → CÓDIGO.**

O dispositivo nunca conduz a interpretação. O dispositivo é derivado depois de a experiência estar compreendida e revista. Se surgir erro, limitação técnica ou impasse, os agentes regressam à curadoria e à experiência humana que precisa existir, em vez de multiplicar componentes técnicos.

## Porta obrigatória de visualização antes do código
Nenhuma curadoria pode chegar ao Vibe Code sem cumprir, pela ordem:
1. gerar uma proposta de experiência completa segundo `specs/curatorial-author-review.schema.json`;
2. demonstrar cobertura elemento-a-elemento da descrição autoral;
3. apresentar a experiência à autora em linguagem experiencial, mostrando chegada, gesto, acções, resposta do sistema, sequência sensorial, ritmo/tempo, territorialidade, relação físico-digital, retorno/fim e acessibilidade;
4. listar separadamente dúvidas e melhorias propostas;
5. obter aprovação humana explícita da autora;
6. fixar o SHA-256 exacto da proposta aprovada num registo segundo `specs/curatorial-author-approval.schema.json`;
7. derivar somente então o dispositivo necessário;
8. permitir código somente para a experiência aprovada.

## Linha fordista de produção — ordem corrigida
Cada curadoria percorre esta linha produtiva:

1. NEXTCLOUD_INGEST — recuperar fonte integral e checksum.
2. SOURCE_INTEGRITY — confirmar ficheiro, versão, direitos, estado público/restrito e proveniência.
3. MISTRAL_DOCUMENT_INTELLIGENCE — OCR/document understanding/library apenas se necessário.
4. MISTRAL_HERMENEUT — extrair intenção curatorial, invariantes autorais, relações, ambiguidades e limites.
5. CURATORIAL_CORE — reconstruir a curadoria como sistema de sentido, encontro, cuidado, território, linguagem e participação.
6. DYNAMICS_PLAY_DECODER — extrair e distinguir dinâmicas, brincadeiras, jogos, convites, rituais, gestos, regras, acaso, espera, repetição, som, silêncio, corpo e materialidade.
7. AUTHORIAL_COVERAGE_MATRIX — mapear cada elemento relevante da descrição para uma manifestação concreta na experiência.
8. EXPERIENCE_COMPOSITION — compor o percurso vivido sem escolher ainda o dispositivo técnico.
9. EXPERIENCE_PREVIEW — gerar a experiência completa, ainda sem código e sem impor dispositivo.
10. AUTHOR_QUESTIONS — dúvidas materiais regressam à autora sem congelar as outras curadorias independentes.
11. AUTHOR_EXPERIENCE_REVIEW — mostrar a experiência à autora e recolher decisão.
12. AUTHOR_HASH_APPROVAL — aprovação explícita da experiência exacta.
13. DEVICE_DERIVATION — escolher, recuperar ou adaptar apenas os dispositivos necessários para realizar a experiência aprovada.
14. EXPERIENCE_CONTRACT — gerar JSON fiel à experiência aprovada e ao dispositivo derivado.
15. VIBE_CODE_BUILD — materializar runtime específico.
16. DETERMINISTIC_TESTS — sintaxe, estados, assets, acessibilidade, privacidade, boundary e performance.
17. MISTRAL_COUNCIL — fidelidade curatorial + dinâmica/brincadeira + experiência + runtime + acessibilidade + território.
18. INTERNAL_STAGE — staging privado PTServidor com SHA/readback.
19. SITEJET_CPANEL_TEST — composição/teste visual interno quando útil e tecnicamente suportado.
20. EXPERIENCE_ACCEPTANCE — a autora vê a experiência funcional.
21. RELEASE_CANDIDATE — pacote PUBLIC-ONLY isolado.
22. PRODUCTION_PROMOTION — promoção pública separada.

## Regras de continuidade
- Problema técnico deve activar reparação, fallback técnico ou desvio de estação, não paralisar toda a fábrica.
- Uma curadoria em dúvida não paralisa as outras curadorias com fonte clara.
- Erro de dispositivo obriga a regressar à experiência que ele deveria servir.
- Nenhum agente pode declarar uma curadoria concluída apenas porque existe um componente técnico.
- Nenhuma falha operacional transforma dispositivo em ponto de partida.

## Segurança que continua absoluta
- Nenhum valor secreto pode aparecer em logs, ficheiros, artefactos ou commits.
- Material `NÃO PUBLICAR`, dados reservados, credenciais e dados sensíveis nunca entram no pacote público.
- Nextcloud é a fonte operacional deste ciclo; Google Drive não é fallback automático.
- COPÉRNICO existente é a base do globo; não criar substituto.
- `git push --mirror --force`, `git push --force` para branches canónicas e rotinas destrutivas permanecem proibidos.

## Meta
49/49 experiências específicas, cada uma nascida da respectiva curadoria e das suas dinâmicas/brincadeiras, com `generic_fallback_allowed=false`. Um dispositivo técnico sem experiência específica não conta para a meta.

## Estado real que não pode regredir
- Branch: `work/copernico-recovery-webapp-20260902`.
- COPÉRNICO materializado e preservado.
- Mistral API autenticada; Codestral e Vibe Code disponíveis.
- PTServidor funcional para staging/deploy.
- Nextcloud é o corpus canónico; recuperação do acesso de automação continua em curso.
- Regra humana mais recente incorporada: curadorias, dinâmicas e brincadeiras vêm antes dos dispositivos.

## Critério de verdade
`FEITO` só significa que a etapa tem evidência: commit, hash, log PASS, readback, resposta API, aprovação autoral explícita ou teste público correspondente.
