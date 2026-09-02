# Atlas Vivo MILK — instruções para Vibe Code

Este repositório contém a camada pública e integrações técnicas do Atlas Vivo MILK.

## Regras absolutas
- Trabalhar em PT-PT quando produzir texto de interface ou documentação destinada à MILK.
- Preservar integralmente a autoria e a densidade curatorial; não simplificar, comercializar nem neutralizar o texto MILK.
- Não misturar camada pública com Camada Invisível, investigação privada, credenciais, dados pessoais ou motores confidenciais.
- Nunca tocar em `associacaomilk.pt`; qualquer publicação web deste projecto tem como alvo exclusivo `atlas.associacaomilk.pt`.
- Não apagar, mover ou substituir dados de origem do Drive/Nextcloud durante tarefas de saneamento ou migração.
- Segredos nunca entram em ficheiros, prompts, logs, diffs ou comentários.
- Qualquer deploy deve ser preservativo: validar pacote, criar backup, promover apenas ficheiros do Atlas, fazer readback/hash e smoke test; em falha, rollback.
- Não declarar publicação, migração ou validação concluída sem evidência determinística.

## Invariantes públicos verificados — não inferir de novo sem teste
- `deploy/atlas-public/catalogo-curatorial.json` contém actualmente **49 entradas**, numeradas de 1 a 49.
- As sete entradas `inventario-meu-mundo`, `catastrofe-produtiva`, `ponto-kusama`, `corpo-percebe`, `escutar-silencio`, `rizoma-interior` e `cubo-interior` existem no catálogo como `implementado_especifico`.
- `app.js` renderiza esses sete motores específicos.
- `curadorias.js` mantém exactamente esses sete IDs no conjunto `known` e filtra-os antes de renderizar os cartões dinâmicos. Portanto **não existe duplicação desses sete cartões no estado actual apenas por coexistirem no JSON e em app.js**.
- Qualquer agente que proponha remover os sete jogos por alegada duplicação deve primeiro demonstrar a duplicação com uma contagem/DOM testável; não aceitar essa hipótese como facto.
- Não alterar número, texto, ordem, família, convite ou estado das 49 entradas sem validação humana explícita.

## Web App pública
Prioridades de engenharia:
1. experiência viva e não meramente explicativa;
2. mínimo de cliques;
3. dispositivos curatoriais como experiências sensoriais/lúdicas, não como catálogo comercial;
4. desempenho, acessibilidade WCAG 2.2 AA e comportamento responsivo;
5. separação clara entre dados públicos, lógica de interface e integrações privadas;
6. HTML/JS/CSS auditáveis e progressivamente modularizáveis sem regressão visual;
7. manter compatibilidade com `deploy/atlas-public/manifest.sha256` e validações existentes.

## Método de trabalho do agente
- Primeiro ler e mapear antes de editar.
- Verificar contagens, selecções e hipóteses contra o código real antes de as chamar falhas.
- Identificar dependências e invariantes antes de propor refactor.
- Preferir mudanças pequenas, reversíveis e testáveis.
- Em auditorias, distinguir: facto observado, risco, proposta e teste de aceitação.
- Em implementação, não inventar conteúdo curatorial ausente.
- Quando houver dúvida sobre intenção curatorial, preservar o estado actual e marcar para validação humana.
