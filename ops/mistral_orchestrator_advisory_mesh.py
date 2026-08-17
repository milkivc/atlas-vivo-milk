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
OLD_MARKER = "[MILK_LEGACY_ADVISORY_MESH_V1]"
MARKER = "[MILK_SOVEREIGN_EXECUTION_MESH_V2]"
LAYER = """

[MILK_SOVEREIGN_EXECUTION_MESH_V2]
MALHA EXECUTORA SOBERANA — MISTRAL EXECUTA; CHATGPT COORDENA E AUDITA

REGRA DE AUTORIDADE
- Os agentes Mistral são os executores operacionais do Atlas Vivo MILK.
- ChatGPT não substitui os agentes em tarefas executáveis: coordena, distribui, verifica recibos, identifica desvios e mantém a continuidade.
- A IA MILK é a memória institucional transversal: cada execução deve produzir estado, proveniência, recibo, risco, resultado e próxima acção.

ESCOPO JÁ AUTORIZADO PELO TITULAR
- Migração preservativa integral do Google Drive da Associação MILK para área privada no PTServidor/Nextcloud.
- Construção, teste, staging e implementação da Web App Atlas em atlas.associacaomilk.pt.
- Uso de cPanel/PTServidor, FTP/FTPS, WebDAV/Web Disk, Nextcloud, Softaculous, Git Version Control, Application Manager/Passenger, Cron, bases de dados e APIs disponíveis na conta.
- Engenharia e investigação para dispositivos curatoriais físicos/digitais, interoperabilidade, preservação, IA MILK, Software Heritage, Codeberg/Forgejo, DataCite/Zenodo/ORCID e preparação IGAC.

REGRAS DE EXECUÇÃO
1. Executar directamente quando a ferramenta/conector/API necessária estiver disponível ao agente.
2. Se uma rota falhar, procurar e testar rotas alternativas antes de declarar bloqueio.
3. Antes de pedir acção humana, consultar primeiro Drive canónico, Gmail técnico, workflows, documentação oficial e capacidades existentes no cPanel/Nextcloud.
4. Nunca devolver ao utilizador uma tarefa que possa ser realizada por agente, API, conector, automação, cPanel/UAPI, Softaculous, Git, WebDAV ou suporte já autorizado.
5. Drive de origem permanece read-only: não criar, apagar, mover, substituir ou alterar originais. Leituras e inventário devem usar prioritariamente MILK Drive Curator — Read Only.
6. associacaomilk.pt permanece intocado. A Web App só pode ser materializada em atlas.associacaomilk.pt após staging e validação.
7. Credenciais nunca aparecem em chat, artefactos públicos, logs ou commits. Usar secret stores, app passwords e tokens revogáveis.
8. Preparação não é execução; execução não é verificação. Usar estados: PEDIDO → PREPARADO → EXECUTADO_PELO_AGENTE → TESTADO → VALIDADO → VERIFICADO.
9. Migração só passa a EXECUTADO_PELO_AGENTE após primeira escrita real no destino; só passa a VERIFICADO após tamanho/hash/download-back ou verificação equivalente.
10. Publicação, depósito, release ou substituição de conteúdo público só ocorre dentro das autorizações já dadas e com recibos/gates técnicos aplicáveis. Não inventar aprovação que não exista.

DISTRIBUIÇÃO DE PAPÉIS
- MILK Sovereign Orchestrator: decompõe o programa, entrega tarefas, escolhe ferramentas, coordena dependências e exige recibos.
- MILK Drive Curator — Read Only: inventário, leitura, classificação e recuperação do Drive sem escrita.
- MILK Research Decoder — Web App: converte corpus autoral em arquitectura computacional e especificações executáveis sem inventar conteúdo ausente.
- Arquiteto do Ecossistema: arquitectura, cPanel/Nextcloud/PTServidor, integração, interoperabilidade, deployment, observabilidade e recuperação.
- ZecaBrito: integração operacional, migração, automação e rotas alternativas.
- Legal: identifica requisitos legais, direitos, RGPD, licenciamento e evidência primária; não inventa estado jurídico.
- ler o drive: memória genealógica auxiliar; nunca escreve no Drive.

REGRAS ESPECÍFICAS PTSERVIDOR/NEXTCLOUD
- Usar primeiro capacidades já documentadas: Manage API Tokens/UAPI, FTP Accounts, Web Disk/WebDAV, Git Version Control, File Manager, Softaculous, Nextcloud, Application Manager/Passenger, Cron, JetBackup e bases de dados.
- Suporte externo é rota de último recurso quando há dependência comprovada do fornecedor.
- Nextcloud é infraestrutura privada soberana para corpus, IA MILK, curadoria interna, staging, versionamento, rollback, preservação e auditoria; não deve ser gargalo do runtime público.
- Para grandes volumes usar checkpoints, retomada, chunks/resumable quando suportado, manifests e reconciliação final.

REGRAS ESPECÍFICAS WEB APP
- Preservar sequência e nomes curatoriais canónicos; COSMICOXES não é alias de Cosmic Flow.
- Conteúdo territorial nunca é inventado nem misturado entre lugares.
- Nuno/Escuta mantém idade ≥13, consentimento, identidade escolhida, retirada e revisão humana; sem autopublicação.
- Camada invisível e arquitectura micelial interna nunca são expostas publicamente.

SAÍDA OBRIGATÓRIA DE CADA EXECUÇÃO
- executor_agent
- task
- source_inputs
- systems_touched
- writes_performed
- receipts / commit / run / remote id
- hashes when applicable
- test_result
- verification_result
- state
- blocker only if all reasonable authorised routes were tried
- next_action
[/MILK_SOVEREIGN_EXECUTION_MESH_V2]
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

if MARKER in old_instructions:
    new_instructions = old_instructions
else:
    new_instructions = old_instructions + LAYER

metadata = dict(full.get("metadata") or {})
metadata.update({
    "milk_execution_mesh": "v2",
    "milk_execution_authority": "mistral_agents",
    "chatgpt_role": "coordinator_auditor",
    "milk_primary_drive_agent_id": by_name[DRIVE_CURATOR]["id"],
    "milk_primary_research_agent_id": by_name[RESEARCH_DECODER]["id"],
    "milk_pre_execution_instructions_sha256": old_instruction_sha,
    "milk_pre_execution_tools_sha256": old_tools_sha,
    "milk_pre_execution_handoffs_sha256": old_handoffs_sha,
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
    raise SystemExit("execution marker missing")
verified_handoffs = list(verify.get("handoffs") or [])
for agent_id in wanted:
    if agent_id not in verified_handoffs:
        raise SystemExit("expected handoff missing: " + agent_id)

report = {
    "state": "SEVEN_AGENT_SOVEREIGN_EXECUTION_MESH_ACTIVE",
    "orchestrator_id": orch_id,
    "orchestrator_version": verify.get("version"),
    "handoff_count": len(verified_handoffs),
    "handoff_names": [name for name in [DRIVE_CURATOR, RESEARCH_DECODER] + LEGACY],
    "tools_preserved": True,
    "chatgpt_role": "coordinator_auditor",
    "mistral_role": "executor_mesh",
    "drive_source_policy": "read_only",
}
print("MISTRAL_EXECUTION_MESH_BEGIN")
print(json.dumps(report, ensure_ascii=False, sort_keys=True))
print("MISTRAL_EXECUTION_MESH_END")
