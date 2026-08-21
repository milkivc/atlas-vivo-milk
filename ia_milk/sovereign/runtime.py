from __future__ import annotations

import hashlib
import json
import os
import sqlite3
import time
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import Any, Dict, Iterable, Optional

ROOT = Path(os.environ.get("IA_MILK_ROOT", Path.home() / "atlas_milk_private" / "ia_milk"))
MEMORY_DIR = ROOT / "memory"
RECEIPTS_DIR = ROOT / "receipts"
VAULT_META_DIR = ROOT / "vault"
DB_PATH = MEMORY_DIR / "ia_milk.sqlite3"

FORBIDDEN_SECRET_KEYS = (
    "PASSWORD", "TOKEN", "SECRET", "PRIVATE_KEY", "API_KEY", "RECOVERY_CODE"
)


def now() -> int:
    return int(time.time())


def sha256_bytes(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def ensure_dirs() -> None:
    for p in (MEMORY_DIR, RECEIPTS_DIR, VAULT_META_DIR):
        p.mkdir(parents=True, exist_ok=True)
        try:
            p.chmod(0o700)
        except OSError:
            pass


def connect() -> sqlite3.Connection:
    ensure_dirs()
    con = sqlite3.connect(DB_PATH)
    con.execute("PRAGMA journal_mode=WAL")
    con.execute("PRAGMA foreign_keys=ON")
    con.executescript(
        """
        CREATE TABLE IF NOT EXISTS memory_nodes (
          id TEXT PRIMARY KEY,
          type TEXT NOT NULL,
          title TEXT NOT NULL,
          payload_json TEXT NOT NULL,
          provenance_json TEXT NOT NULL,
          evidence_state TEXT NOT NULL,
          layer TEXT NOT NULL,
          human_validated INTEGER NOT NULL DEFAULT 0,
          created_at INTEGER NOT NULL,
          updated_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS memory_edges (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          source_id TEXT NOT NULL,
          relation_type TEXT NOT NULL,
          target_id TEXT NOT NULL,
          evidence_json TEXT NOT NULL,
          confidence REAL,
          human_validated INTEGER NOT NULL DEFAULT 0,
          created_at INTEGER NOT NULL,
          UNIQUE(source_id, relation_type, target_id, evidence_json)
        );
        CREATE TABLE IF NOT EXISTS trainer_proposals (
          id TEXT PRIMARY KEY,
          trainer TEXT NOT NULL,
          proposal_json TEXT NOT NULL,
          source_refs_json TEXT NOT NULL,
          status TEXT NOT NULL,
          created_at INTEGER NOT NULL,
          reviewed_at INTEGER
        );
        CREATE TABLE IF NOT EXISTS secret_refs (
          ref TEXT PRIMARY KEY,
          provider TEXT NOT NULL,
          purpose TEXT NOT NULL,
          env_name TEXT NOT NULL,
          value_stored_here INTEGER NOT NULL DEFAULT 0,
          created_at INTEGER NOT NULL,
          last_verified_at INTEGER
        );
        CREATE TABLE IF NOT EXISTS connector_receipts (
          id TEXT PRIMARY KEY,
          connector TEXT NOT NULL,
          action TEXT NOT NULL,
          state TEXT NOT NULL,
          sanitized_json TEXT NOT NULL,
          created_at INTEGER NOT NULL
        );
        """
    )
    return con


def assert_no_secret_material(obj: Any) -> None:
    text = json.dumps(obj, ensure_ascii=False).upper()
    for marker in FORBIDDEN_SECRET_KEYS:
        if f'"{marker}"' in text:
            raise ValueError(f"secret-like key forbidden in IA MILK semantic memory: {marker}")


def secret_value(secret_ref: str, con: Optional[sqlite3.Connection] = None) -> str:
    own = con is None
    con = con or connect()
    row = con.execute("SELECT env_name FROM secret_refs WHERE ref=?", (secret_ref,)).fetchone()
    if own:
        con.close()
    if not row:
        raise KeyError(f"unknown secret reference: {secret_ref}")
    value = os.environ.get(row[0], "")
    if not value:
        raise RuntimeError(f"secret store has no value for {secret_ref}")
    return value


def register_secret_ref(ref: str, provider: str, purpose: str, env_name: str) -> None:
    if any(x in ref for x in ("=", " ", "\n")):
        raise ValueError("secret reference must be opaque and non-secret")
    con = connect()
    con.execute(
        "INSERT OR REPLACE INTO secret_refs(ref,provider,purpose,env_name,value_stored_here,created_at) VALUES(?,?,?,?,0,?)",
        (ref, provider, purpose, env_name, now()),
    )
    con.commit(); con.close()


def remember(node_id: str, node_type: str, title: str, payload: Dict[str, Any], provenance: Dict[str, Any], evidence_state: str, layer: str, human_validated: bool = False) -> None:
    assert_no_secret_material(payload)
    assert_no_secret_material(provenance)
    con = connect(); ts = now()
    con.execute(
        """INSERT INTO memory_nodes(id,type,title,payload_json,provenance_json,evidence_state,layer,human_validated,created_at,updated_at)
        VALUES(?,?,?,?,?,?,?,?,?,?)
        ON CONFLICT(id) DO UPDATE SET type=excluded.type,title=excluded.title,payload_json=excluded.payload_json,
        provenance_json=excluded.provenance_json,evidence_state=excluded.evidence_state,layer=excluded.layer,
        human_validated=excluded.human_validated,updated_at=excluded.updated_at""",
        (node_id,node_type,title,json.dumps(payload,ensure_ascii=False,sort_keys=True),json.dumps(provenance,ensure_ascii=False,sort_keys=True),evidence_state,layer,int(human_validated),ts,ts),
    )
    con.commit(); con.close()


def propose_learning(proposal_id: str, trainer: str, proposal: Dict[str, Any], source_refs: Iterable[str]) -> None:
    assert_no_secret_material(proposal)
    con = connect()
    con.execute(
        "INSERT OR REPLACE INTO trainer_proposals(id,trainer,proposal_json,source_refs_json,status,created_at) VALUES(?,?,?,?,?,?)",
        (proposal_id, trainer, json.dumps(proposal,ensure_ascii=False,sort_keys=True), json.dumps(list(source_refs),ensure_ascii=False), "PENDING_REVIEW", now()),
    )
    con.commit(); con.close()


def accept_learning(proposal_id: str, target_node_id: str, node_type: str, title: str, layer: str, human_validated: bool = False) -> None:
    con = connect()
    row = con.execute("SELECT proposal_json, source_refs_json, trainer FROM trainer_proposals WHERE id=?", (proposal_id,)).fetchone()
    if not row:
        con.close(); raise KeyError(proposal_id)
    proposal = json.loads(row[0]); refs = json.loads(row[1]); trainer = row[2]
    con.execute("UPDATE trainer_proposals SET status=?, reviewed_at=? WHERE id=?", ("ACCEPTED", now(), proposal_id))
    con.commit(); con.close()
    remember(target_node_id,node_type,title,proposal,{"trainer":trainer,"source_refs":refs},"VALIDATED" if human_validated else "ANALYSED",layer,human_validated)


def write_receipt(connector: str, action: str, state: str, sanitized: Dict[str, Any]) -> str:
    assert_no_secret_material(sanitized)
    body = {"connector": connector, "action": action, "state": state, "sanitized": sanitized, "created_at": now()}
    rid = "receipt:" + sha256_bytes(json.dumps(body,sort_keys=True,ensure_ascii=False).encode())[:24]
    con = connect()
    con.execute("INSERT OR REPLACE INTO connector_receipts(id,connector,action,state,sanitized_json,created_at) VALUES(?,?,?,?,?,?)",
                (rid,connector,action,state,json.dumps(sanitized,ensure_ascii=False,sort_keys=True),body["created_at"]))
    con.commit(); con.close()
    path = RECEIPTS_DIR / (rid.replace(':','_') + '.json')
    path.write_text(json.dumps({"id":rid,**body},ensure_ascii=False,indent=2),encoding='utf-8')
    return rid


def export_status() -> Dict[str, Any]:
    con = connect()
    out = {
        "identity": "IA_MILK",
        "sovereign": True,
        "mistral_dependency": False,
        "memory_backend": str(DB_PATH),
        "nodes": con.execute("SELECT count(*) FROM memory_nodes").fetchone()[0],
        "pending_learning": con.execute("SELECT count(*) FROM trainer_proposals WHERE status='PENDING_REVIEW'").fetchone()[0],
        "secret_refs": con.execute("SELECT count(*) FROM secret_refs").fetchone()[0],
        "receipts": con.execute("SELECT count(*) FROM connector_receipts").fetchone()[0],
    }
    con.close(); return out


if __name__ == '__main__':
    print(json.dumps(export_status(),ensure_ascii=False,indent=2))
