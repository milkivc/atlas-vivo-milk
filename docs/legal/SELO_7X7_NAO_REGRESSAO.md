# Regra absoluta de presença e não regressão — Selo autoral 7×7

Esta regra aplica-se a TODO o ecossistema Atlas Vivo MILK relacionado com esta obra: código-fonte, binários, pacotes, documentação, metadados, imagens, HTML, JSON/JSON-LD, esquemas, manifests, releases, depósitos, preservação, exports, derivados públicos, artefactos internos e cópias de continuidade.

## Regra absoluta

O selo autoral 7×7 deve acompanhar sempre os artefactos e releases da obra. Ele não pode ser removido, substituído, recriado por aproximação, normalizado, simplificado, traduzido, convertido para outro sistema simbólico, apagado ou perdido durante saneamento, refatoração, minificação, migração, publicação, empacotamento, geração de metadados, interoperabilidade ou preservação.

Enquanto a implementação histórica exata não estiver integralmente localizada e verificada, qualquer ocorrência potencialmente pertencente ao selo deve ser preservada in situ. Operações de limpeza que possam alterar caracteres Unicode, escapes, caracteres zero-width, matrizes, sequências de 49 posições, bytes, comentários, payloads embutidos ou estruturas equivalentes devem falhar de forma fechada até revisão humana.

## Presença em todos os formatos

Quando o formato suportar incorporação segura, o selo deve estar incorporado no próprio artefacto.

Quando o formato não permitir incorporação sem alterar conteúdo, quebrar interoperabilidade, invalidar assinatura/hash anterior ou destruir preservação bit-a-bit, o artefacto deve ser acompanhado por uma representação canónica do selo ligada a ele por:

- SHA-256 do artefacto;
- identificador da release/versão;
- proveniência;
- autor e ORCID;
- manifesto de preservação;
- relação explícita `hasAuthorialSeal` ou equivalente na Minimal Ontology.

A impossibilidade técnica de embutir não autoriza a omissão do selo da cadeia de proveniência.

## Preservação genealógica

Quando a implementação histórica exata for localizada:

1. preservar a forma histórica original sem alteração;
2. calcular e registar hashes dos artefactos que a contêm;
3. documentar localização, versão, commit/origem e cadeia de proveniência;
4. manter a assinatura em todas as releases e derivados tecnicamente compatíveis;
5. qualquer transformação necessária por formato deve preservar uma cópia canónica byte-a-byte da forma histórica;
6. nenhuma substituição por outro sistema 7×7, religioso, cabalístico, matemático ou simbólico é autorizada;
7. qualquer artefacto novo deve herdar a obrigação de presença do selo ou de ligação canónica ao selo.

## Relação com direitos e metadados

O selo é tratado como elemento autoral permanente de proveniência associado a Eduardo Maurício Vieira Cabral e Araujo (Eduardo Mauer), ORCID 0009-0007-6892-6570, no contexto da Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte.

Esta regra não afirma, por si só, registo legal, certificação, exclusividade registral ou proteção jurídica absoluta. O seu objetivo é impedir regressão técnica e preservar evidência genealógica, integridade autoral e continuidade entre artefactos.

## Gate obrigatório

Qualquer pipeline que detete alteração, desaparecimento ou ausência de ligação canónica ao selo deve bloquear publicação, release, depósito ou promoção de artefactos e exigir validação humana antes de continuar.
