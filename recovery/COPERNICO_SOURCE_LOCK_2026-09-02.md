# COPÉRNICO — source lock de recuperação da WebApp

Estado: RECUPERAÇÃO / NÃO PUBLICAR
Objectivo: localizar e reintegrar a implementação COPÉRNICO já existente. Não criar globo substituto.

## Evidência recuperada do corpus MILK

Fonte documental: `Projeto Semântica Da OblEquidade 6/7/8.pdf` preservado no Drive/File Library.

Código recuperado literalmente como referência de genealogia:

```python
@app.get("/api/v1/visualizar_globo")
async def gerar_globo_copernico():
    wms_endpoint = "https://sh.dataspace.copernicus.eu/ogc/wms/"
    js_globe_script = f"""
document.addEventListener('DOMContentLoaded', () => {{
  const atlasGlobe = new CopernicusGlobe('seer-container', {{
    wmsUrl: '{wms_endpoint}',
    theme: 'immersive-curation',
    accessibleControls: true
  }});
  atlasGlobe.loadMicelialData('/api/v1/geojson_export');
  atlasGlobe.render();
}});
"""
    return {"script_js": js_globe_script}
```

## Regras de recuperação

1. Procurar em TODAS as refs/histórico Git por: `CopernicusGlobe`, `/api/v1/visualizar_globo`, `sh.dataspace.copernicus.eu/ogc/wms/`, `seer-container`, `geojson_export`.
2. Não substituir COPÉRNICO por globo negro, canvas genérico, esfera CSS, Three.js improvisado ou dados simulados.
3. Não inventar implementação de `CopernicusGlobe`; primeiro localizar a definição/genealogia real.
4. O corpus também fixa a sequência pública: Copernicus/Copérnico e globo → Cosmic Flow → selo → Fucô/Galeria → MILKs territoriais → bilhete com `brincar — convite — tentar a sorte`.
5. Dados territoriais já existem; integração deve consumir dados públicos aprovados, não criar coordenadas fictícias.
6. Não publicar nesta branch. Não tocar em `main` nem na webroot do PTServidor durante a recuperação.
7. Camada Invisível permanece excluída da superfície pública.

## Critério de sucesso desta fase

Só marcar `COPERNICO_FOUND=1` se existir evidência concreta de implementação recuperada (ficheiro/commit/ref) para além da referência documental acima. Se apenas o endpoint/pseudocódigo documental existir, marcar `COPERNICO_FOUND=0` e listar exactamente o que falta localizar.
