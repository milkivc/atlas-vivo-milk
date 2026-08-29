# IA MILK — Biblioteca Viva dos Treinamentos

**Estado:** regra operacional canónica da IA MILK.
**Data:** 2026-08-29
**Branch de trabalho:** `work/ia-milk-question-game-20260829`

## 0. Regra absoluta

Todo treinamento da IA MILK deve gerar uma biblioteca própria.

A biblioteca não é um resumo final, uma interpretação definitiva, uma conclusão, uma classificação de certo/errado nem uma síntese que substitua o corpo estudado.

Ela preserva o que o treinamento abriu.

Cada biblioteca deve poder ser retomada posteriormente por outros agentes, por outro treinamento, por outra curadoria ou por outra experiência sem obrigar o material a conservar o mesmo significado.

## 1. O que cada biblioteca preserva

Cada resultado de treinamento deve guardar, com proveniência:

- fontes e corpus estudados;
- conceitos de origem, separados por autor/obra/campo;
- núcleos contraditórios internos;
- mudanças e tensões dentro do próprio corpus;
- perguntas produzidas;
- perguntas deixadas sem resposta;
- silêncios escolhidos;
- perguntas abandonadas;
- perguntas que reapareceram sob outra forma;
- alegorias emergentes;
- imagens, gestos, sons, objectos ou situações que nasceram do encontro;
- conexões documentadas;
- conexões hipotéticas;
- desconexões relevantes;
- incompatibilidades preservadas;
- relações mínimas e relações remotas;
- momentos de auto-ironia;
- deslocamentos inesperados;
- coisas que deixaram de parecer relacionadas;
- coisas que só começaram a relacionar-se muito depois;
- zonas que permaneceram ilegíveis, incertas ou abertas;
- limites do próprio treinamento.

## 2. O que a biblioteca não deve fazer

Nunca converter automaticamente o treinamento em:

- moral;
- tese;
- resposta final;
- ranking;
- mapa de certo/errado;
- perfil psicológico;
- diagnóstico;
- interpretação totalizante;
- linha causal única;
- seleção obrigatória entre duas leituras;
- resumo que apague o material de origem.

## 3. Biblioteca por treinamento

Cada treinamento recebe um identificador estável e uma pasta própria:

```text
ia-milk/library/trainings/<training_id>/
  manifest.json
  sources.json
  concepts.json
  contradictions.json
  questions.jsonl
  silences.jsonl
  metamorphoses.jsonl
  allegories.jsonl
  connections.jsonl
  disconnections.jsonl
  unresolved.jsonl
  provenance.json
  session-notes.md
```

Nenhum destes ficheiros substitui o corpus original.

## 4. Proveniência

Toda entrada deve indicar, quando aplicável:

- fonte;
- autor;
- obra;
- edição ou origem;
- página/trecho/localização quando disponível;
- tipo de entrada: `SOURCE`, `DOCUMENTED_RELATION`, `INFERENCE`, `HYPOTHESIS`, `ALLEGORY`, `QUESTION`, `SILENCE`, `DISCONNECTION`, `UNRESOLVED`;
- agente que a produziu;
- data;
- treinamento de origem;
- nível de confiança apenas para proveniência factual, nunca para hierarquizar interpretações.

## 5. Perguntas como objetos vivos

Perguntas recebem IDs próprios.

Uma pergunta pode:

- reaparecer em outra biblioteca;
- mudar de forma;
- mudar de domínio;
- virar imagem, som, gesto, silêncio ou situação;
- perder a relação com a questão original;
- ser ignorada;
- nunca reaparecer.

Ao reaparecer, não é obrigatório manter um único significado canónico.

A biblioteca guarda genealogias possíveis, não identidades rígidas.

## 6. Silêncio como registro legítimo

Silêncio não é ausência de dado a preencher.

Pode ser registrado como acontecimento quando uma questão foi deliberadamente deixada sem continuidade.

O sistema não deve gerar automaticamente conteúdo para preencher esse vazio.

## 7. COSMICOXES na biblioteca

A biblioteca deve suportar relações não hierárquicas e não deterministas.

Uma mesma entrada pode participar de várias relações simultâneas sem que uma delas seja declarada central.

A biblioteca não precisa formar árvore.

Pode comportar rede, constelação, fragmento, ilha, intervalo e desconexão.

## 8. Regra da criança

O resultado do treinamento não deve ser organizado apenas por aquilo que parece intelectualmente importante.

Guardar também:

- desvios;
- pequenas perguntas;
- absurdos férteis;
- associações que pareciam brincadeira;
- coisas abandonadas porque outra coisa apareceu;
- detalhes sem função conhecida;
- aquilo que ninguém soube onde colocar.

O sistema não deve presumir que importância é visível no momento em que algo aparece.

## 9. Regra do meio

`Para o inteiro, entrego o meio.`

A biblioteca nunca precisa entregar um objeto acabado para ser válida.

Pode preservar fragmentos, começos sem origem, meios sem princípio e interrupções sem fecho.

`Quando encontrar, é aí que esqueceu de olhar.`

Encontrar uma categoria, nome ou explicação não encerra o registro. A biblioteca deve permitir que o mesmo objeto volte a ser visto fora da categoria que o tornou reconhecível.

## 10. Reuso

Outros treinamentos podem consultar bibliotecas anteriores, mas devem distinguir:

- material de fonte;
- resultado de treinamento anterior;
- hipótese antiga;
- pergunta herdada;
- nova transformação.

Nunca transformar uma hipótese antiga em facto por repetição.

## 11. Regra superior

> Cada treinamento deixa uma biblioteca, não uma conclusão.

> A biblioteca guarda o que abriu, inclusive o que não soube fechar.

> Nada é apagado por não ter encontrado lugar ainda.
