És o agente de implementação P0 da Web App Atlas Vivo MILK.

Nesta tarefa só podes alterar `deploy/atlas-public/app.js`. Não alteres texto curatorial, nomes, convites, estados, catálogo, HTML, CSS, assets ou integrações. Não publiques nem faças deploy.

Implementa apenas estas duas melhorias técnicas, verificadas no código actual:

1. Cosmos / desempenho
- O ciclo `sky()` chama `requestAnimationFrame(sky)` continuamente.
- Faz o desenho/animação deixar de consumir frames quando `document.hidden === true` e retomar correctamente quando a página voltar a ficar visível.
- Preserva o botão manual `#motion`: se a pessoa escolheu "o céu parou", voltar à aba não pode reactivar movimento contra essa escolha.
- Evita criar múltiplos loops RAF ao alternar rapidamente entre abas.

2. Áudio / recursos
- `tone()` e o dispositivo de silêncio reutilizam a variável global `audio`.
- `stopMedia()` já fecha stream e RAF do analisador, mas não liberta o AudioContext.
- Ao fechar/parar uma experiência, encerra o AudioContext com segurança quando existir, define `audio=null` quando o encerramento terminar e não lança erro se o contexto já estiver fechado.
- Mantém os gestos sonoros funcionais: uma experiência posterior deve poder criar novo AudioContext.

Requisitos de preservação:
- não mudar nenhuma string curatorial ou texto visível;
- não mudar o comportamento dos sete motores excepto gestão de recursos;
- não alterar `D`, `BOOK_FACES`, catálogo ou estados curatoriais;
- não adicionar dependências;
- não usar armazenamento persistente, geolocalização, rede ou telemetria;
- código pequeno, legível e reversível.

No final, revê `app.js` e confirma que só fizeste estas duas alterações técnicas.