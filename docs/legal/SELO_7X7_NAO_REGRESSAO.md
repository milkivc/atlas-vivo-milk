# Regra absoluta de presença e não regressão — Selo autoral 7×7 + selo visual MAUER

Esta regra aplica-se a TODO o ecossistema Atlas Vivo MILK relacionado com esta obra: código-fonte, binários, pacotes, documentação, metadados, imagens, HTML, JSON/JSON-LD, esquemas, manifests, releases, depósitos, preservação, exports, derivados públicos, artefactos internos e cópias de continuidade.

## Dois selos, uma única cadeia autoral

A obra contém dois elementos autorais permanentes e cumulativos:

1. **selo invisível 7×7**, já existente historicamente no código e que deve ser recuperado e preservado na sua implementação exata;
2. **selo visual MAUER**, cuja referência visual canónica foi fornecida pelo autor e está registada em `metadata/territorial-reader/canonical-seal-mauer.json`.

O selo visual MAUER **não substitui** o selo invisível 7×7. O selo invisível 7×7 **não substitui** o selo visual MAUER. Ambos devem coexistir e permanecer associados à obra, às releases e aos depósitos.

## Referência visual canónica

A imagem canónica fornecida pelo autor é identificada por:

- asset ID: `canonical_seal_mauer`;
- ficheiro de origem: `4156C24F-9AF4-4F15-A675-04CAEE0BF64F.jpeg`;
- media type: `image/jpeg`;
- tamanho: `901545` bytes;
- SHA-256: `4e53ef384efb2b23bf2bce11cea8c854b92d427e3cbbbbc7d107966f4681c78e`.

Qualquer derivado visual usado para interoperabilidade, transparência, redimensionamento ou incorporação deve manter ligação explícita a este hash e à imagem canónica. Nenhum derivado se torna novo original.

## Regra absoluta

O selo autoral 7×7 e o selo visual MAUER devem acompanhar sempre os artefactos e releases da obra. Eles não podem ser removidos, substituídos, recriados por aproximação, normalizados, simplificados, traduzidos, convertidos para outro sistema simbólico, apagados ou perdidos durante saneamento, refatoração, minificação, migração, publicação, empacotamento, geração de metadados, interoperabilidade ou preservação.

Enquanto a implementação histórica exata do 7×7 não estiver integralmente localizada e verificada, qualquer ocorrência potencialmente pertencente ao selo deve ser preservada in situ. Operações de limpeza que possam alterar caracteres Unicode, escapes, caracteres zero-width, matrizes, sequências de 49 posições, bytes, comentários, payloads embutidos ou estruturas equivalentes devem falhar de forma fechada até revisão humana.

## Presença em todos os formatos

Quando o formato suportar incorporação segura, os selos devem estar incorporados no próprio artefacto.

Quando o formato não permitir incorporação sem alterar conteúdo, quebrar interoperabilidade, invalidar assinatura/hash anterior ou destruir preservação bit-a-bit, o artefacto deve ser acompanhado por uma representação canónica dos selos ligada a ele por:

- SHA-256 do artefacto;
- identificador da release/versão;
- proveniência;
- autor e ORCID;
- manifesto de preservação;
- relação explícita `hasAuthorialSeal` ou equivalente na Minimal Ontology.

A impossibilidade técnica de embutir não autoriza a omissão do selo da cadeia de proveniência.

## Preservação genealógica

Quando a implementação histórica exata do 7×7 for localizada:

1. preservar a forma histórica original sem alteração;
2. calcular e registar hashes dos artefactos que a contêm;
3. documentar localização, versão, commit/origem e cadeia de proveniência;
4. manter a assinatura em todas as releases e derivados tecnicamente compatíveis;
5. qualquer transformação necessária por formato deve preservar uma cópia canónica byte-a-byte da forma histórica;
6. nenhuma substituição por outro sistema 7×7, religioso, cabalístico, matemático ou simbólico é autorizada;
7. qualquer artefacto novo deve herdar a obrigação de presença dos dois selos ou de ligação canónica a ambos.

## Relação com direitos e metadados

Os selos são tratados como elementos autorais permanentes de proveniência associados a Eduardo Maurício Vieira Cabral e Araujo (Eduardo Mauer), ORCID 0009-0007-6892-6570, no contexto da Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte.

O selo visual, sinal gráfico e identidade visual não são licenciados automaticamente pela EUPL-1.2 do código. Uso comercial ou de marca depende de autorização separada do titular.

Esta regra não afirma, por si só, registo legal, certificação, exclusividade registral ou proteção jurídica absoluta. O seu objetivo é impedir regressão técnica e preservar evidência genealógica, integridade autoral e continuidade entre artefactos.

## Gate obrigatório

Qualquer pipeline que detete alteração, desaparecimento ou ausência de ligação canónica a qualquer um dos dois selos deve bloquear publicação, release, depósito ou promoção de artefactos e exigir validação humana antes de continuar.
