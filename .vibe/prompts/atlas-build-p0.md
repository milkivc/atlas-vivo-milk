És o agente de implementação P0 da Web App Atlas Vivo MILK.

Nesta tarefa só podes alterar `deploy/atlas-public/app.js`. Não alteres texto curatorial, nomes, convites, estados, catálogo, HTML, CSS, assets ou integrações. Não publiques nem faças deploy.

Implementa apenas estas duas melhorias técnicas, verificadas no código actual.

## 1. Cosmos / desempenho — UM ÚNICO RAF vivo

O código actual usa um `requestAnimationFrame` contínuo para o céu. A implementação correcta deve garantir estes invariantes:

- quando `document.hidden === true`, não existe RAF activo do Cosmos e não são consumidos frames;
- quando a página volta a ficar visível, o Cosmos retoma apenas se `move === true`;
- se a pessoa escolheu `o céu parou`, mudar de aba e voltar NÃO pode reactivar o movimento;
- nunca podem coexistir dois loops RAF do Cosmos;
- o identificador do RAF representa apenas um callback ainda pendente: quando o callback começa a executar, limpa imediatamente esse identificador para `0` antes de poder agendar o seguinte;
- quando `move` passa para `false`, cancela imediatamente qualquer RAF pendente e deixa a imagem actual estática;
- quando `move` passa novamente para `true`, deve ser possível iniciar um novo RAF, mesmo depois de ter parado anteriormente.

Prefere separar responsabilidades, mantendo o código pequeno:

- uma função apenas desenha um frame do Cosmos;
- uma função de tick consome o callback (`cosRaf = 0`), verifica `document.hidden` e `move`, desenha e só então agenda o próximo;
- uma função agenda apenas se `cosRaf === 0`, `!document.hidden` e `move === true`;
- uma função de stop cancela o RAF pendente, se houver, e depois fixa `cosRaf = 0`;
- `visibilitychange` chama stop quando hidden; ao voltar, desenha o estado e agenda somente se `move` estiver activo;
- o botão `#motion` chama stop ao desligar e agenda ao ligar.

Não ligues o lifecycle do Cosmos a `stopMedia()`: `stopMedia()` trata recursos das experiências/dialog; o Cosmos é o fundo global da página.

## 2. Áudio / recursos — libertar e permitir recriação

`tone()` e o dispositivo de silêncio reutilizam a variável global `audio`.

Em `stopMedia()`:

- se existir `audio`, captura a referência actual numa variável local (por exemplo `ctx`);
- define imediatamente a variável global `audio = null`, inclusive se o contexto já estiver `closed`;
- se o contexto capturado ainda não estiver fechado, chama `ctx.close()` e trata a Promise sem lançar erro;
- não deixes a variável global a apontar para um AudioContext já fechado;
- uma experiência posterior deve conseguir criar normalmente um novo AudioContext.

## Requisitos de preservação

- não mudar nenhuma string curatorial ou texto visível;
- não mudar o comportamento dos sete motores excepto gestão de recursos;
- não alterar `D`, `BOOK_FACES`, catálogo ou estados curatoriais;
- não adicionar dependências;
- não usar armazenamento persistente, geolocalização, rede ou telemetria;
- não alterar `index.html`, CSS, JSON ou assets;
- código pequeno, legível e reversível.

No final, revê o diff real de `app.js` e confirma que somente o lifecycle RAF do Cosmos e a libertação/recriação do AudioContext foram alterados.