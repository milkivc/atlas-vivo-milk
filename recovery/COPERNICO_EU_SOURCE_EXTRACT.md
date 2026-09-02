# COPÉRNICO — extracto canónico EU para a WebApp

Estado: RECUPERADO DO CORPUS / NÃO PUBLICAR DIRECTAMENTE
Fonte primária no Drive: `Diplomacia Cultural: Contrabando Positivo`, documentId `1jVr-9BxxKqyaQaZkXAp1aoob7OmCTq_4fCaLgD895L4`.

## Decisão autoral posterior que prevalece

O corpus contém uma versão anterior baseada em Three.js/DAT.Globe. Mais tarde, a instrução autoral rejeita explicitamente código de Google ou de plataformas não europeias e ordena usar COPÉRNICO e recursos/documentação europeus. Portanto, a versão Three.js/DAT.Globe é genealogia histórica, não base de implementação pública.

A versão posterior especifica como direcção técnica:
- Copernicus Data Space Ecosystem / Sentinel;
- iTowns como motor do globo;
- dados territoriais em GeoJSON / NGSI-LD;
- integração na WebApp Atlas Vivo MILK, não num site paralelo;
- dados reais já existentes, sem coordenadas ou conteúdos fictícios.

## Núcleo funcional recuperado

O código histórico posterior cria:

```js
const viewerDiv = document.getElementById('viewerDiv');
const placement = {
  coord: new itowns.Coordinates('EPSG:4326', -9.1399, 38.7167),
  range: 5000000,
  tilt: 30,
};
const view = new itowns.GlobeView(viewerDiv, placement);

const copernicusWMS = new itowns.ColorLayer('Copernicus_Sentinel2', {
  source: new itowns.WMSSource({
    url: 'https://sh.dataspace.copernicus.eu/ogc/wms/<INSTANCE_ID>',
    name: 'TRUE_COLOR',
    format: 'image/jpeg',
    crs: 'EPSG:4326',
    extent: { west: -180, east: 180, south: -90, north: 90 },
  }),
});
view.addLayer(copernicusWMS);
```

A integração territorial histórica usa pontos GeoJSON/NGSI-LD sobre o globo. Na WebApp actual, esses pontos NÃO devem ser hard-coded; devem vir exclusivamente do export público validado.

## Correcções verificadas em documentação oficial

1. O corpus histórico escrevia `EPSG:4386`. A documentação oficial do iTowns para GlobeView usa WGS84 `EPSG:4326`; a WebApp deve usar `EPSG:4326`.
2. O WMS do Copernicus Data Space usa `https://sh.dataspace.copernicus.eu/ogc/wms/<INSTANCE_ID>` e requer uma configuração/instância própria. Não colocar client secret, access token ou credencial no frontend.
3. iTowns é projecto originado no IGN francês e actualmente mantido pelo IGN e CIRIL Group. A licença oficial do iTowns é dupla: CeCILL-B v1.0 OU MIT. A alegação histórica de que o iTowns é licenciado em EUPL v1.2 não deve ser repetida como facto.
4. A release estável verificada no upstream é iTowns v2.46.0. Para produção MILK, usar bundle auto-hospedado no PTServidor; não depender de jsDelivr/unpkg no browser público.
5. A própria documentação do iTowns usa `GlobeView`, `WMSSource`/`WMTSSource`, `ColorLayer` e `view.addLayer(...)`. Não usar `itowns.HtmlElement` como se fosse uma layer sem confirmação de API; preferir integração de pontos por source/layer suportado.

## Integração com a máquina pública actual

A branch já possui `experience-machine.js` com a sequência:
COSMICOXES -> COSMIC_WORDS -> WORLD_GESTURE -> DISSOLVE -> GLOBE -> TERRITORIAL_MILKS -> TICKET -> DISCOVERY/CURATORIAL_DEVICE.

A integração COPÉRNICO deve substituir apenas a materialização visual vazia do estado `GLOBE`; não deve apagar a dramaturgia anterior nem converter o Atlas numa homepage/mapa convencional.

No estado `GLOBE`:
- montar iTowns dentro de um container dedicado;
- mostrar o globo real;
- activar camada Copernicus apenas se configuração pública segura estiver disponível;
- sem configuração WMS, o GlobeView continua funcional com fallback explícito e sem dados simulados;
- depois de o globo estar pronto, carregar somente o dataset territorial PUBLIC-ONLY validado e então emitir `territory_ready`.

## Fronteira pública absoluta

Não entram no bundle público:
- Camada Invisível;
- heurísticas internas, hifas de análise, prompts ou motores privados;
- dados pessoais, emails, tokens, client secrets;
- exemplos inventados de Marvila/Campo de Ourique usados em protótipos históricos;
- alegações legais/financiabilidade não verificadas.

## Dados públicos já existentes

O adaptador territorial deve consumir um ficheiro estático PUBLIC-ONLY produzido a partir das bases já aprovadas, contendo apenas campos necessários à experiência: id público, título/convite quando autorizado, freguesia/município/distrito validados, latitude, longitude, estado de publicação, asset MILK autorizado e acções de bilhete validadas.

## Critério da próxima build

O Mistral Code só pode gravar código se:
- conservar a máquina de estados e os portais autorais;
- criar um módulo COPÉRNICO separado e auditável;
- não inventar `INSTANCE_ID`;
- não expor segredo no frontend;
- não hard-code pontos territoriais fictícios;
- não tocar em produção;
- passar gates determinísticos + conselho Mistral de fonte, runtime, dados, acessibilidade e fronteira pública.
