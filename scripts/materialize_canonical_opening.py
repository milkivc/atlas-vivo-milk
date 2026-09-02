from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

machine = ROOT / "deploy/atlas-public/experience-machine.js"
index = ROOT / "deploy/atlas-public/index.html"
atlas = ROOT / "deploy/atlas-public/atlas.js"
styles = ROOT / "deploy/atlas-public/styles.css"

s = machine.read_text(encoding="utf-8")
if "PRETO: 'preto'" not in s:
    anchor = "const PUBLIC_STATES = Object.freeze({\n  COSMICOXES: 'cosmicoxes',"
    if anchor not in s:
        raise SystemExit("MACHINE_STATES_ANCHOR_NOT_FOUND")
    s = s.replace(anchor, "const PUBLIC_STATES = Object.freeze({\n  PRETO: 'preto',\n  SELO: 'selo',\n  COSMICOXES: 'cosmicoxes',", 1)

if "[PUBLIC_STATES.PRETO]: new Set(['reveal_seal'])" not in s:
    anchor = "const TRANSITIONS = Object.freeze({\n  [PUBLIC_STATES.COSMICOXES]"
    if anchor not in s:
        raise SystemExit("MACHINE_TRANSITIONS_ANCHOR_NOT_FOUND")
    s = s.replace(anchor, "const TRANSITIONS = Object.freeze({\n  [PUBLIC_STATES.PRETO]: new Set(['reveal_seal']),\n  [PUBLIC_STATES.SELO]: new Set(['touch']),\n  [PUBLIC_STATES.COSMICOXES]", 1)

if "[`${PUBLIC_STATES.PRETO}:reveal_seal`]" not in s:
    anchor = "const NEXT = Object.freeze({\n  [`${PUBLIC_STATES.COSMICOXES}:gesture`]"
    if anchor not in s:
        raise SystemExit("MACHINE_NEXT_ANCHOR_NOT_FOUND")
    s = s.replace(anchor, "const NEXT = Object.freeze({\n  [`${PUBLIC_STATES.PRETO}:reveal_seal`]: PUBLIC_STATES.SELO,\n  [`${PUBLIC_STATES.SELO}:touch`]: PUBLIC_STATES.COSMICOXES,\n\n  [`${PUBLIC_STATES.COSMICOXES}:gesture`]", 1)

if "#state = PUBLIC_STATES.PRETO;" not in s:
    anchor = "  #state = PUBLIC_STATES.COSMICOXES;"
    if anchor not in s:
        raise SystemExit("MACHINE_INITIAL_STATE_ANCHOR_NOT_FOUND")
    s = s.replace(anchor, "  #state = PUBLIC_STATES.PRETO;", 1)
machine.write_text(s, encoding="utf-8")

s = index.read_text(encoding="utf-8")
if 'id="atlasSeal"' not in s:
    anchor = '<body><a class="skip" href="#atlas">Saltar para o Atlas</a><canvas id="cosmos" aria-hidden="true"></canvas>'
    replacement = '<body><a class="skip" href="#atlas">Saltar para o Atlas</a><div id="prelude" class="prelude"><button id="atlasSeal" class="atlas-seal" type="button" aria-label="Entrar no Atlas" hidden><img src="assets/selo-atlas.png" alt=""></button></div><canvas id="cosmos" aria-hidden="true" hidden></canvas>'
    if anchor not in s:
        raise SystemExit("INDEX_PRELUDE_ANCHOR_NOT_FOUND")
    s = s.replace(anchor, replacement, 1)
if 'id="opening" class="opening" aria-labelledby="opening-title" hidden' not in s:
    anchor = '<main id="atlas"><section id="opening" class="opening" aria-labelledby="opening-title">'
    replacement = '<main id="atlas"><section id="opening" class="opening" aria-labelledby="opening-title" hidden>'
    if anchor not in s:
        raise SystemExit("INDEX_OPENING_ANCHOR_NOT_FOUND")
    s = s.replace(anchor, replacement, 1)
index.write_text(s, encoding="utf-8")

s = atlas.read_text(encoding="utf-8")
if "const atlasSeal = document.querySelector('#atlasSeal');" not in s:
    anchor = "const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;\nconst opening = document.querySelector('#opening');"
    replacement = "const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;\nconst prelude = document.querySelector('#prelude');\nconst atlasSeal = document.querySelector('#atlasSeal');\nconst cosmos = document.querySelector('#cosmos');\nconst opening = document.querySelector('#opening');"
    if anchor not in s:
        raise SystemExit("ATLAS_CONST_ANCHOR_NOT_FOUND")
    s = s.replace(anchor, replacement, 1)

if "async function revealSeal()" not in s:
    anchor = "const wait = ms => new Promise(resolve => setTimeout(resolve, reduced ? 0 : ms));\n\n"
    insertion = """const wait = ms => new Promise(resolve => setTimeout(resolve, reduced ? 0 : ms));

async function revealSeal() {
  await wait(520);
  if (!experience.send('reveal_seal')) return;
  atlasSeal.hidden = false;
}

async function activateSeal() {
  if (atlasSeal.disabled || experience.state !== PUBLIC_STATES.SELO) return;
  atlasSeal.disabled = true;
  if (!experience.send('touch')) {
    atlasSeal.disabled = false;
    return;
  }
  prelude.classList.add('leaving');
  await wait(360);
  prelude.hidden = true;
  cosmos.hidden = false;
  opening.hidden = false;
  enter.focus({preventScroll: true});
}

atlasSeal.addEventListener('click', activateSeal);
requestAnimationFrame(() => revealSeal());

"""
    if anchor not in s:
        raise SystemExit("ATLAS_WAIT_ANCHOR_NOT_FOUND")
    s = s.replace(anchor, insertion, 1)
atlas.write_text(s, encoding="utf-8")

s = styles.read_text(encoding="utf-8")
if "Limiar canónico da abertura: PRETO" not in s:
    s += """

/* Limiar canónico da abertura: PRETO → SELO → TOQUE → COSMICOXES. */
.prelude{position:fixed;inset:0;z-index:50;display:grid;place-items:center;background:#000;transition:opacity .36s ease}
.prelude.leaving{opacity:0;pointer-events:none}
.atlas-seal{width:clamp(76px,14vw,150px);aspect-ratio:1;border:0;padding:0;background:transparent;opacity:.2;cursor:pointer;filter:drop-shadow(0 0 16px #fff2);transition:opacity .35s ease,filter .35s ease,transform .35s ease}
.atlas-seal img{display:block;width:100%;height:100%;object-fit:contain}
.atlas-seal:hover,.atlas-seal:focus-visible{opacity:.72;filter:drop-shadow(0 0 28px #fff5);transform:scale(1.025)}
@media(prefers-reduced-motion:reduce){.prelude,.atlas-seal{transition:none!important}}
"""
styles.write_text(s, encoding="utf-8")

print("CANONICAL_OPENING_MATERIALIZED=YES")
