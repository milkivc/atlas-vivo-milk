import hashlib
import json
import os
import urllib.parse
import urllib.request

raw = os.environ.get("MISTRAL_API_KEY", "").strip()
if raw.startswith("MISTRAL_API_KEY="):
    raw = raw.split("=", 1)[1].strip().strip('"').strip("'")
key = "".join(raw.split())
if not key:
    raise SystemExit("MISTRAL_API_KEY missing")

BASE = "https://api.mistral.ai"
HEADERS = {"Authorization": "Bearer " + key, "Accept": "application/json", "Content-Type": "application/json"}


def request(method, path, payload=None):
    data = None if payload is None else json.dumps(payload, ensure_ascii=False).encode("utf-8")
    req = urllib.request.Request(BASE + path, headers=HEADERS, data=data, method=method)
    with urllib.request.urlopen(req, timeout=60) as response:
        body = response.read()
    return json.loads(body.decode("utf-8")) if body else {}


def all_agents():
    out = []
    token = None
    seen = set()
    while True:
        path = "/v1/agents/pages?page_size=100"
        if token:
            path += "&" + urllib.parse.urlencode({"page_token": token})
        body = request("GET", path)
        out.extend(item for item in body.get("data", []) if isinstance(item, dict))
        token = body.get("next_page_token")
        if not token:
            return out
        if token in seen:
            raise RuntimeError("repeated page token")
        seen.add(token)


def digest(value):
    return hashlib.sha256(json.dumps(value, sort_keys=True, ensure_ascii=False).encode("utf-8")).hexdigest()


ORCHESTRATOR = "MILK Sovereign Orchestrator"
DRIVE_CURATOR = "MILK Drive Curator — Read Only"
RESEARCH_DECODER = "MILK Research Decoder — Web App"
LEGACY = ["ZecaBrito", "Arquiteto do Ecossistema", "Legal", "ler o drive"]
MARKER = "[MILK_LEGACY_ADVISORY_MESH_V1]"
LAYER = """

[MILK_LEGACY_ADVISORY_MESH_V1]
MALHA CONSULTIVA SOBERANA — SETE AGENTES, UMA ÚNICA GOVERNAÇÃO
- O orquestrador continua a ser a autoridade de coordenação. Handoffs são consultas especializadas, não autorização para mutação externa.
- Para qualquer leitura do Google Drive, usar prioritariamente MILK Drive Curator — Read Only. O agente histórico 'ler o drive' é apenas consultivo/genealógico e nunca substitui o Curador seguro.
- MILK Research Decoder — Web App é a via principal para converter corpus autoral em arquitectura computacional, preservando lacunas e genealogia conceptual.
- Arquiteto do Ecossistema é consultor de arquitectura, ontologia, interoperabilidade e relações históricas. Afirmações antigas ou temporais ficam NÃO_VERIFICADAS até prova actual/primária.
- ZecaBrito é consultor para padrões históricos de integração e operacionalização. Funções externas existentes não recebem autorização implícita; LOW leitura/análise pode prosseguir, HIGH/CRITICAL exige gate humano e executor autorizado.
- Legal é consultor de identificação de questões jurídicas e requisitos de fonte. Nunca conclui obrigação, conformidade ou estado jurídico sem fonte primária verificável.
- 'ler o drive' preserva memória histórica de leitura, mas qualquer pedido de alteração do Drive é rejeitado ou transformado em proposta sujeita a gate humano.
- Nenhum handoff pode revelar segredos, criar memória oculta, treinar modelos, criar dataset de treino ou alterar originais do Drive.
- Todos os resultados devem distinguir FACTO, INFERÊNCIA, HIPÓTESE, PROPOSTA e NÃO_VERIFICADO e regressar ao orquestrador com evidência e risco.
- PUBLICAÇÃO CANÓNICA, DELETE, ASSINATURA, CREDENCIAIS e qualquer mutação HIGH/CRITICAL nunca são autorizadas por esta malha; exigem autorização humana específica e recibo verificável.
[/MILK_LEGACY_ADVISORY_MESH_V1]
"""

by_name = {agent.get("name"): agent for agent in all_agents()}
required = [ORCHESTRATOR, DRIVE_CURATOR, RESEARCH_DECODER] + LEGACY
missing = [name for name in required if name not in by_name]
if missing:
    raise SystemExit("missing agents: " + ", ".join(missing))

orch_id = by_name[ORCHESTRATOR]["id"]
full = request("GET", "/v1/agents/" + orch_id)
old_instructions = full.get("instructions") or ""
old_tools = full.get("tools") or []
old_handoffs = list(full.get("handoffs") or [])
old_instruction_sha = hashlib.sha256(old_instructions.encode("utf-8")).hexdigest()
old_tools_sha = digest(old_tools)
old_handoffs_sha = digest(old_handoffs)

wanted = [by_name[DRIVE_CURATOR]["id"], by_name[RESEARCH_DECODER]["id"]] + [by_name[name]["id"] for name in LEGACY]
merged_handoffs = []
for item in old_handoffs + wanted:
    if item and item not in merged_handoffs:
        merged_handoffs.append(item)

new_instructions = old_instructions if MARKER in old_instructions else old_instructions + LAYER
metadata = dict(full.get("metadata") or {})
metadata.update({
    "milk_advisory_mesh": "v1",
    "milk_primary_drive_agent_id": by_name[DRIVE_CURATOR]["id"],
    "milk_primary_research_agent_id": by_name[RESEARCH_DECODER]["id"],
    "milk_pre_mesh_instructions_sha256": old_instruction_sha,
    "milk_pre_mesh_tools_sha256": old_tools_sha,
    "milk_pre_mesh_handoffs_sha256": old_handoffs_sha,
})

request("PATCH", "/v1/agents/" + orch_id, {
    "instructions": new_instructions,
    "handoffs": merged_handoffs,
    "metadata": metadata,
})

verify = request("GET", "/v1/agents/" + orch_id)
if digest(verify.get("tools") or []) != old_tools_sha:
    raise SystemExit("orchestrator tools changed")
if MARKER not in (verify.get("instructions") or ""):
    raise SystemExit("advisory marker missing")
if not (verify.get("instructions") or "").startswith(old_instructions):
    raise SystemExit("pre-existing orchestrator instructions not preserved")
verified_handoffs = list(verify.get("handoffs") or [])
for agent_id in wanted:
    if agent_id not in verified_handoffs:
        raise SystemExit("expected handoff missing: " + agent_id)

report = {
    "state": "SEVEN_AGENT_SOVEREIGN_ADVISORY_MESH_ACTIVE",
    "orchestrator_id": orch_id,
    "orchestrator_version": verify.get("version"),
    "handoff_count": len(verified_handoffs),
    "handoff_names": [name for name in [DRIVE_CURATOR, RESEARCH_DECODER] + LEGACY],
    "tools_preserved": True,
    "prior_instructions_preserved": True,
    "drive_writes": 0,
    "library_writes": 0,
    "fine_tuning_started": 0,
}
print("MISTRAL_ADVISORY_MESH_BEGIN")
print(json.dumps(report, ensure_ascii=False, sort_keys=True))
print("MISTRAL_ADVISORY_MESH_END")
