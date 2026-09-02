# Atlas Vivo MILK — contrato de dados territoriais PUBLIC-ONLY para a WebApp

Estado: preparação de integração; NÃO é dataset público final.

Fonte canónica de trabalho no Drive:
`ATLAS_VIVO_MILK — ESQUEMA_CANÓNICO_INTEGRADO — FESTAS_827`
Spreadsheet ID: `1d4jJEk-g4O1qewxjJ_TQFQqKcRbsSDcFW2t8W1vfwbU`

## Folhas que podem alimentar a projecção pública

- `42_PORTA_PUBLICACAO_FESTAS`: gate humano e de conformidade por `id_mestre`.
- `43_EXPORTACAO_PUBLICA_FESTAS`: campos de exportação pública já separados.
- `46_GEO_MILKS_ILUMINACAO`: georreferência e asset MILK com regra de integridade visual.
- `18_DIREITOS_LICENCAS`: direitos por objecto; ficha textual não autoriza automaticamente imagem/áudio/objecto visual.
- `02_JUNTAS_FREGUESIAS` / `03_TERRITORIOS_GEORREF`: base territorial real; não substituir por coordenadas simuladas.

## Gate mínimo para uma festa entrar no globo

Um registo só pode tornar-se uma MILK territorial se:
1. `resultado_gate == APROVADO_PARA_EXPORTACAO` na folha 42;
2. existir exactamente um registo público correspondente na folha 43;
3. latitude/longitude forem numéricas e geograficamente coerentes com freguesia/município/distrito;
4. o `id`/`id_mestre` mantiver correspondência 1:1;
5. a ficha textual estiver autorizada em `18_DIREITOS_LICENCAS`;
6. qualquer asset visual usado tiver direito específico; não herdar autorização da ficha textual;
7. o asset MILK respeitar `SEM RECONSTRUÇÃO; SEM RECOLORAÇÃO; SEM PLACEHOLDER` quando essa regra estiver presente;
8. nenhuma incongruência territorial sobreviver à validação.

## Campos mínimos do artefacto PUBLIC-ONLY

```json
{
  "id": "public-id",
  "titulo": "texto aprovado",
  "local": "texto público",
  "freguesia": "freguesia validada",
  "municipio": "município validado",
  "distrito": "distrito validado",
  "latitude": 0.0,
  "longitude": 0.0,
  "convite_atlas": "texto aprovado",
  "estado_publicacao": "APROVADO_PARA_EXPORTACAO",
  "territorio_chave": "chave validada ou null",
  "milk_asset": "asset local autorizado",
  "ticket": {
    "brincar": null,
    "convite": null,
    "tentar_a_sorte": null
  },
  "validated": true
}
```

Nenhuma acção de bilhete é inventada para preencher `null`.

## Estado quantitativo observado

A configuração pública espera 827 festas. O gate `42_PORTA_PUBLICACAO_FESTAS`, na varredura actual, devolveu 826 registos com `APROVADO_PARA_EXPORTACAO`. A WebApp não deve converter essa diferença em conteúdo sintético; a reconciliação deve ser feita por ID.

## Inconsistência real já detectada e que o validador deve apanhar

No export público observado, `Festa do Senhor Jesus das Chagas` aparece com local/município de Sesimbra, mas com distrito/chave territorial associados a Guarda/Seia/Santiago. Isto demonstra que `APROVADO_PARA_EXPORTACAO` por si só não basta para posicionar uma MILK no globo. O adaptador deve cruzar a base territorial e rejeitar conflito antes da materialização visual.

## Integração COPÉRNICO

O módulo COPÉRNICO recebe apenas o artefacto PUBLIC-ONLY já validado. Ele não conhece Sheets, Drive OAuth, Camada Invisível, motores internos ou direitos completos. A projecção no globo é uma operação de apresentação, não de decisão de publicação.

A transição `GLOBE -> TERRITORIAL_MILKS` só pode ocorrer depois de:
- o GlobeView estar pronto;
- o dataset público ter sido carregado;
- todos os objectos presentes no payload terem `validated: true`;
- o boundary gate rejeitar campos privados/proibidos.

## Regra de runtime final

Drive/Sheets não são runtime público. A produção deverá consumir um ficheiro/endpoint PUBLIC-ONLY materializado e versionado no PTServidor. A origem Drive permanece evidência, arquivo e fonte de preparação/validação.
