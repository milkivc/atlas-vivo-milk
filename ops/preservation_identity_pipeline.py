import hashlib
import json
import os
import pathlib
import time
import urllib.parse
import urllib.request

OUT = pathlib.Path("artifacts/preservation-identity")
OUT.mkdir(parents=True, exist_ok=True)
ORIGIN = "https://github.com/milkivc/atlas-vivo-milk"
SWH_BASE = "https://archive.softwareheritage.org/api/1"


def http(method, url, payload=None, headers=None, timeout=90):
    body = None if payload is None else json.dumps(payload, ensure_ascii=False).encode("utf-8")
    h = {"Accept": "application/json", "User-Agent": "Atlas-Vivo-MILK-Preservation/1.0"}
    if body is not None:
        h["Content-Type"] = "application/json"
    if headers:
        h.update(headers)
    req = urllib.request.Request(url, data=body, headers=h, method=method)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            raw = r.read()
            return r.status, json.loads(raw.decode("utf-8")) if raw else {}
    except urllib.error.HTTPError as e:
        raw = e.read().decode("utf-8", errors="replace")
        try:
            data = json.loads(raw)
        except Exception:
            data = {"raw": raw}
        return e.code, data


def load(path):
    return json.loads(pathlib.Path(path).read_text(encoding="utf-8"))


def sha256(path):
    return hashlib.sha256(pathlib.Path(path).read_bytes()).hexdigest()

# Validate metadata identity consistency before any publication-related call.
codemeta = load("codemeta.json")
zenodo = load(".zenodo.json")
metadata = load("metadata.json")
expected_orcids = {"0009-0009-1781-4020", "0009-0007-6892-6570"}
zenodo_orcids = {x.get("orcid") for x in zenodo["metadata"].get("creators", []) if x.get("orcid")}
metadata_orcids = {x.get("orcid") for x in metadata.get("creators", []) if x.get("orcid")}
if zenodo_orcids != expected_orcids or metadata_orcids != expected_orcids:
    raise SystemExit(f"ORCID consistency gate failed: zenodo={zenodo_orcids} metadata={metadata_orcids}")

# DataCite metadata draft: no DOI claim until reserved/minted by an authorised registration path.
datacite = {
    "data": {
        "type": "dois",
        "attributes": {
            "event": "publish",
            "prefix": "TO_BE_ASSIGNED_BY_REGISTRATION_AGENCY",
            "creators": [
                {"name":"Araujo, Nuno Filipe Fernandes Vieira Cabral e","nameType":"Personal","givenName":"Nuno Filipe Fernandes Vieira Cabral e","familyName":"Araujo","nameIdentifiers":[{"nameIdentifier":"https://orcid.org/0009-0009-1781-4020","nameIdentifierScheme":"ORCID","schemeUri":"https://orcid.org"}]},
                {"name":"Araujo, Eduardo Mauricio Vieira Cabral e","nameType":"Personal","givenName":"Eduardo Mauricio Vieira Cabral e","familyName":"Araujo","nameIdentifiers":[{"nameIdentifier":"https://orcid.org/0009-0007-6892-6570","nameIdentifierScheme":"ORCID","schemeUri":"https://orcid.org"}]}
            ],
            "titles": [{"title":"Atlas Vivo MILK"}],
            "publisher": "Associação MILK - Movimento de Intervenções e Linguagens Kulturais e Arte",
            "publicationYear": 2026,
            "types": {"resourceTypeGeneral":"Software","resourceType":"Web application and cultural infrastructure"},
            "url": ORIGIN,
            "schemaVersion": "http://datacite.org/schema/kernel-4",
            "descriptions": [{"description": codemeta["description"], "descriptionType":"Abstract"}],
            "subjects": [{"subject":x} for x in codemeta.get("keywords", [])],
            "rightsList": [{"rights":"European Union Public Licence 1.2","rightsIdentifier":"EUPL-1.2","rightsIdentifierScheme":"SPDX"}],
        }
    }
}
(OUT / "datacite-metadata-draft.json").write_text(json.dumps(datacite, indent=2, ensure_ascii=False), encoding="utf-8")

# Software Heritage: request archival of the public Git origin, then attempt to obtain snapshot SWHID.
encoded = urllib.parse.quote(ORIGIN, safe="")
save_url = f"{SWH_BASE}/origin/save/git/url/{encoded}/"
status, save = http("POST", save_url)
(OUT / "software-heritage-save-request.json").write_text(json.dumps({"http_status":status,"response":save}, indent=2, ensure_ascii=False), encoding="utf-8")

request_id = save.get("id") or save.get("save_request_id") if isinstance(save, dict) else None
save_state = save.get("save_task_status") or save.get("status") if isinstance(save, dict) else None
if request_id:
    for _ in range(20):
        s, check = http("GET", f"{SWH_BASE}/origin/save/{request_id}/")
        save_state = check.get("save_task_status") or check.get("status") or save_state
        (OUT / "software-heritage-save-status.json").write_text(json.dumps({"http_status":s,"response":check}, indent=2, ensure_ascii=False), encoding="utf-8")
        if str(save_state).lower() in {"succeeded", "failed", "rejected"}:
            break
        time.sleep(15)

latest_url = f"{SWH_BASE}/origin/{encoded}/visit/latest/?require_snapshot=true"
latest_status, latest = http("GET", latest_url)
snapshot = latest.get("snapshot") if isinstance(latest, dict) else None
swhid = f"swh:1:snp:{snapshot}" if snapshot else None
(OUT / "software-heritage-identity.json").write_text(json.dumps({
    "origin": ORIGIN,
    "save_http_status": status,
    "save_state": save_state,
    "latest_visit_http_status": latest_status,
    "latest_visit": latest,
    "snapshot": snapshot,
    "swhid": swhid,
}, indent=2, ensure_ascii=False), encoding="utf-8")

# Zenodo: if an authorised token already exists, re-use an existing unpublished Atlas Vivo MILK draft; otherwise create one draft only.
# Do NOT publish here. A draft can provide a pre-reserved DOI while preserving the release gate.
zenodo_token = os.environ.get("ZENODO_TOKEN", "").strip()
zenodo_result = {"state":"TOKEN_NOT_AVAILABLE", "prereserved_doi":None, "deposit_id":None, "published":False}
if zenodo_token:
    auth = {"Authorization": "Bearer " + zenodo_token}
    qstatus, deposits = http("GET", "https://zenodo.org/api/deposit/depositions?size=100", headers=auth)
    candidate = None
    if qstatus == 200 and isinstance(deposits, list):
        for dep in deposits:
            md = dep.get("metadata") or {}
            if md.get("title") == "Atlas Vivo MILK" and not dep.get("submitted", False):
                candidate = dep
                break
    if candidate is None:
        zstatus, candidate = http("POST", "https://zenodo.org/api/deposit/depositions", {"metadata": zenodo["metadata"]}, headers=auth)
        if zstatus != 201:
            candidate = None
            zenodo_result = {"state":"DRAFT_CREATE_FAILED", "http_status":zstatus, "response":candidate, "published":False}
    if candidate:
        prere = (candidate.get("metadata") or {}).get("prereserve_doi") or {}
        zenodo_result = {
            "state":"DRAFT_READY",
            "deposit_id":candidate.get("id"),
            "prereserved_doi":prere.get("doi"),
            "prereserved_recid":prere.get("recid"),
            "published":bool(candidate.get("submitted", False)),
        }
(OUT / "zenodo-doi-reservation.json").write_text(json.dumps(zenodo_result, indent=2, ensure_ascii=False), encoding="utf-8")

# IGAC registration dossier preparation. Actual submission requires authenticated Balcão Digital / legitimate requester and payment.
repo_files = []
for p in pathlib.Path(".").rglob("*"):
    if p.is_file() and ".git" not in p.parts and "artifacts" not in p.parts:
        try:
            repo_files.append({"path": p.as_posix(), "sha256": sha256(p), "bytes": p.stat().st_size})
        except Exception:
            pass
repo_files.sort(key=lambda x: x["path"])
igac = {
    "work_title":"Atlas Vivo MILK",
    "work_type":"Programa de computador / base de dados / documentação técnica — classificação final a confirmar no requerimento",
    "authors":[
        {"name":"Nuno Filipe Fernandes Vieira Cabral e Araujo","orcid":"0009-0009-1781-4020"},
        {"name":"Eduardo Mauricio Vieira Cabral e Araujo","orcid":"0009-0007-6892-6570"}
    ],
    "source_repository":ORIGIN,
    "source_code_requirement":"Totalidade do código fonte a apresentar como exemplar, mais executável quando aplicável, descrição, linguagem, compatibilidade e lista de ficheiros.",
    "database_requirement":"Memória descritiva, critérios de ordenação, sistema e modo de acesso, e exemplar verificável quando a base de dados integrar o pedido.",
    "swhid":swhid,
    "zenodo_prereserved_doi":zenodo_result.get("prereserved_doi"),
    "codemeta_sha256":sha256("codemeta.json"),
    "citation_sha256":sha256("CITATION.cff"),
    "file_count":len(repo_files),
    "files":repo_files,
    "submission_state":"DOSSIER_PREPARED_NOT_SUBMITTED",
    "submission_gate":"IGAC Balcão Digital requires authenticated legitimate applicant/representative and payment; no API credential is present in this workflow.",
}
(OUT / "igac-registration-dossier.json").write_text(json.dumps(igac, indent=2, ensure_ascii=False), encoding="utf-8")

receipt = {
    "state":"PRESERVATION_IDENTITY_PIPELINE_EXECUTED",
    "metadata_consistency":True,
    "swh_save_requested": status in {200, 201},
    "swh_save_state":save_state,
    "swhid":swhid,
    "zenodo":zenodo_result,
    "datacite_metadata":"PREPARED_NOT_REGISTERED",
    "igac":"DOSSIER_PREPARED_NOT_SUBMITTED",
    "drive_writes":0,
    "master_writes":0,
}
(OUT / "execution-receipt.json").write_text(json.dumps(receipt, indent=2, ensure_ascii=False), encoding="utf-8")
print(json.dumps(receipt, ensure_ascii=False, sort_keys=True))
