# Regra de não regressão — Selo autoral 7×7

Esta regra aplica-se ao código e aos artefactos do Atlas Vivo MILK associados à release territorial em desenvolvimento.

## Regra absoluta

O selo autoral 7×7 existente nas versões históricas do código não pode ser removido, substituído, recriado por aproximação, normalizado, simplificado, ofuscado de forma diferente, traduzido, convertido ou apagado durante saneamento, refatoração, minificação, migração, publicação, empacotamento, geração de metadados, depósito, preservação ou interoperabilidade.

Enquanto a implementação histórica exata não estiver integralmente localizada e verificada, qualquer ocorrência potencialmente pertencente ao selo deve ser preservada in situ. Operações de limpeza que possam alterar caracteres Unicode, escapes, caracteres zero-width, matrizes, sequências de 49 posições, bytes, comentários, payloads embutidos ou estruturas equivalentes devem falhar de forma fechada até revisão humana.

## Preservação genealógica

Quando a implementação exata for localizada:

1. preservar a forma histórica original sem alteração;
2. calcular e registar hashes dos artefactos que a contêm;
3. documentar localização, versão, commit/origem e cadeia de proveniência;
4. manter a assinatura em releases derivadas quando tecnicamente compatível;
5. qualquer transformação necessária por formato deve preservar uma cópia canónica byte-a-byte da forma histórica;
6. nenhuma substituição por outro sistema 7×7, religioso, cabalístico, matemático ou simbólico é autorizada.

## Relação com direitos e metadados

O selo é tratado como elemento autoral de proveniência associado a Eduardo Maurício Vieira Cabral e Araujo (Eduardo Mauer), ORCID 0009-0007-6892-6570, no contexto da Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte.

Esta regra não afirma, por si só, registo legal, certificação, exclusividade registral ou proteção jurídica absoluta. O seu objetivo é impedir regressão técnica e preservar evidência genealógica e integridade autoral.

## Gate obrigatório

Qualquer pipeline que detete alteração ou desaparecimento do selo deve bloquear a publicação/release e exigir validação humana antes de continuar.
