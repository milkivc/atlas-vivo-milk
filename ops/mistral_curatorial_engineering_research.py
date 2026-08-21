import json
import os
import pathlib
import urllib.request

BASE = "https://api.mistral.ai"
KEY = "".join(os.environ.get("MISTRAL_API_KEY", "").strip().split())
if not KEY:
    raise SystemExit("MISTRAL_API_KEY missing")

HEADERS = {
    "Authorization": "Bearer " + KEY,
    "Accept": "application/json",
    "Content-Type": "application/json",
}


def request(method, path, payload=None):
    data = None if payload is None else json.dumps(payload, ensure_ascii=False).encode("utf-8")
    req = urllib.request.Request(BASE + path, headers=HEADERS, data=data, method=method)
    with urllib.request.urlopen(req, timeout=180) as response:
        raw = response.read()
    return json.loads(raw.decode("utf-8")) if raw else {}


def all_agents():
    out, token, seen = [], None, set()
    while True:
        path = "/v1/agents/pages?page_size=100"
        if token:
            from urllib.parse import urlencode
            path += "&" + urlencode({"page_token": token})
        body = request("GET", path)
        out.extend(x for x in body.get("data", []) if isinstance(x, dict))
        token = body.get("next_page_token")
        if not token:
            return out
        if token in seen:
            raise RuntimeError("repeated agent page token")
        seen.add(token)


def message_text(response):
    chunks = []
    for output in response.get("outputs", []) or []:
        if output.get("type") == "message.output":
            content = output.get("content")
            if isinstance(content, str):
                chunks.append(content)
            elif isinstance(content, list):
                for part in content:
                    if isinstance(part, dict):
                        chunks.append(str(part.get("text") or part.get("content") or ""))
                    else:
                        chunks.append(str(part))
    return "\n".join(x for x in chunks if x).strip()


def make_ephemeral_agent(base_agent, suffix, extra_instructions):
    full = request("GET", "/v1/agents/" + base_agent["id"])
    model = full.get("model") or "mistral-medium-latest"
    instructions = (full.get("instructions") or "") + "\n\n" + extra_instructions
    payload = {
        "model": model,
        "name": "MILK TEMP " + suffix,
        "description": "Ephemeral source-grounded engineering research agent. Delete after run.",
        "instructions": instructions,
        "tools": [{"type": "web_search"}],
        "completion_args": {"temperature": 0.15, "top_p": 0.9},
        "metadata": {"milk_ephemeral": "true", "milk_purpose": "curatorial_engineering_research"},
    }
    return request("POST", "/v1/agents", payload)


def run_agent(agent_id, prompt):
    response = request("POST", "/v1/conversations", {
        "agent_id": agent_id,
        "inputs": [{"role": "user", "content": prompt}],
        "store": False,
        "handoff_execution": "client",
    })
    return {"text": message_text(response), "raw": response}


by_name = {a.get("name"): a for a in all_agents()}
required = ["MILK Research Decoder — Web App", "Arquiteto do Ecossistema", "Legal"]
missing = [x for x in required if x not in by_name]
if missing:
    raise SystemExit("Missing required Mistral agents: " + ", ".join(missing))

source_path = pathlib.Path("ops/curatorial_engineering_input_2026-08-17.md")
source = source_path.read_text(encoding="utf-8")
out_dir = pathlib.Path("artifacts/curatorial-engineering")
out_dir.mkdir(parents=True, exist_ok=True)

ephemeral = []
try:
    research_agent = make_ephemeral_agent(
        by_name["MILK Research Decoder — Web App"],
        "Curatorial Engineering Researcher",
        "Use web_search only for external engineering precedents and primary/authoritative technical sources. "
        "Never rewrite authorial gaps as facts. Separate SOURCE_FACT, EXTERNAL_RESEARCH, ENGINEERING_PROPOSAL and NOT_VERIFIED. "
        "The physical encounter remains primary; digital components support interaction, access, documentation and interoperability."
    )
    ephemeral.append(research_agent["id"])

    research_prompt = """You are executing engineering research for Atlas Vivo MILK.
Read the canonical input below. Search the web for technically credible mechanisms that can turn the documented curatorial devices into real hybrid physical/digital interactions.
Prioritize: accessible physical computing, WebXR only where justified, Web Audio, geospatial interaction, haptics without surveillance, low-cost sensors/actuators, offline-first patterns, local network installations, projection/lighting, mechanical/optical toys, retro arcade interaction patterns, participatory museum interaction and street/ancestral play mechanics.
For each documented curatorial proposal/device you touch, produce a structured design with:
- source_status
- preserved authorial premise
- external engineering precedents with URLs/source names
- physical mechanism
- digital mechanism
- state machine
- event/data contract
- optional sensors/actuators and a non-instrumented alternative
- accessibility modes
- privacy/RGPD constraints
- territorial binding rules
- offline/degraded mode
- test cases
- maintainability/replacement strategy
- interoperability/preservation outputs
- material/BOM categories, no invented prices
- unresolved authorial questions
Do NOT invent missing curatorial content and do NOT use personal scoring, biometrics, psychological inference or behavioural prediction.

CANONICAL INPUT:\n""" + source
    research = run_agent(research_agent["id"], research_prompt)
    (out_dir / "01-research-decoder.md").write_text(research["text"], encoding="utf-8")

    architect_agent = make_ephemeral_agent(
        by_name["Arquiteto do Ecossistema"],
        "Engineering Architecture Reviewer",
        "Review source-grounded proposals for modularity, interoperability, replaceability, offline operation, PTServidor feasibility, Codeberg/Forgejo portability and non-regression. Never invent authorial content."
    )
    ephemeral.append(architect_agent["id"])
    architect = run_agent(architect_agent["id"],
        "Review the following engineering research for Atlas Vivo MILK. Identify architecture defects, vendor lock-in, unnecessary surveillance, accessibility gaps, non-portable components, weak tests, and improvements for the Web App + physical installations. Return an implementation backlog grouped P0/P1/P2 and explicitly preserve COSMICOXES != Cosmic Flow.\n\n" + research["text"])
    (out_dir / "02-architecture-review.md").write_text(architect["text"], encoding="utf-8")

    legal_agent = make_ephemeral_agent(
        by_name["Legal"],
        "Rights Privacy Preservation Reviewer",
        "Use web_search only for primary official/legal sources where needed. Do not declare compliance without evidence. Review privacy, authorship, licensing, accessibility, archival and registration implications."
    )
    ephemeral.append(legal_agent["id"])
    legal = run_agent(legal_agent["id"],
        "Review the following Atlas Vivo MILK engineering material for rights/privacy/publication/archival risks. Distinguish legal fact, requirement to verify, and engineering recommendation. Include what evidence is needed before IGAC registration, DOI publication, Software Heritage archival, ORCID linkage or DataCite metadata release.\n\nRESEARCH:\n" + research["text"] + "\n\nARCHITECTURE REVIEW:\n" + architect["text"])
    (out_dir / "03-rights-privacy-preservation-review.md").write_text(legal["text"], encoding="utf-8")

    report = {
        "state": "MISTRAL_CURATORIAL_ENGINEERING_PANEL_EXECUTED",
        "base_agents": required,
        "web_search_enabled_on_ephemeral_agents": True,
        "conversation_storage": False,
        "drive_writes": 0,
        "external_publication_writes": 0,
        "outputs": [
            "01-research-decoder.md",
            "02-architecture-review.md",
            "03-rights-privacy-preservation-review.md",
        ],
    }
    (out_dir / "execution-receipt.json").write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, sort_keys=True))
finally:
    for agent_id in ephemeral:
        try:
            request("DELETE", "/v1/agents/" + agent_id)
        except Exception as exc:
            print("warning: could not delete ephemeral agent", agent_id, repr(exc))
