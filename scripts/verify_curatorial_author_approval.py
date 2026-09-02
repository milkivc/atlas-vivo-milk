#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]


def canonical_sha256(obj) -> str:
    payload = json.dumps(obj, ensure_ascii=False, sort_keys=True, separators=(',', ':')).encode('utf-8')
    return hashlib.sha256(payload).hexdigest()


def fail(message: str, code: int = 1) -> None:
    print('AUTHOR_EXPERIENCE_GATE=BLOCKED')
    print('BLOCKER=' + message)
    raise SystemExit(code)


def main() -> None:
    if len(sys.argv) != 2:
        fail('CURATORIAL_SLUG_REQUIRED', 2)
    slug = sys.argv[1].strip()
    if not slug or slug == '__QUEUE__':
        fail('SPECIFIC_CURATORIAL_SLUG_REQUIRED_BEFORE_CODE', 3)

    review_path = ROOT / 'curatorial-factory' / 'previews' / f'{slug}.review.json'
    approval_path = ROOT / 'curatorial-factory' / 'approvals' / f'{slug}.approval.json'
    if not review_path.is_file():
        fail(f'EXPERIENCE_PREVIEW_NOT_FOUND:{review_path.relative_to(ROOT)}', 4)
    if not approval_path.is_file():
        fail(f'EXPLICIT_AUTHOR_APPROVAL_NOT_FOUND:{approval_path.relative_to(ROOT)}', 5)

    review = json.loads(review_path.read_text(encoding='utf-8'))
    approval = json.loads(approval_path.read_text(encoding='utf-8'))

    if review.get('curatorial_slug') != slug or approval.get('curatorial_slug') != slug:
        fail('CURATORIAL_SLUG_MISMATCH', 6)

    coverage = review.get('description_coverage') or []
    if not coverage:
        fail('AUTHORIAL_DESCRIPTION_COVERAGE_EMPTY', 7)
    uncovered = [x for x in coverage if x.get('coverage_status') != 'covered']
    if uncovered:
        fail('AUTHORIAL_DESCRIPTION_NOT_100_PERCENT_COVERED', 8)

    ambiguities = review.get('ambiguities') or []
    blocking_questions = [x for x in ambiguities if x.get('blocks_code') is True]
    if blocking_questions:
        fail('UNRESOLVED_AUTHOR_QUESTIONS', 9)

    preview = review.get('experience_preview')
    if not isinstance(preview, dict):
        fail('EXPERIENCE_PREVIEW_INVALID', 10)
    computed = canonical_sha256(preview)
    if review.get('experience_preview_sha256') != computed:
        fail('EXPERIENCE_PREVIEW_HASH_INVALID', 11)
    if approval.get('experience_preview_sha256') != computed:
        fail('AUTHOR_APPROVAL_HASH_DOES_NOT_MATCH_PREVIEW', 12)

    if approval.get('author_decision') != 'approved':
        fail('AUTHOR_DECISION_NOT_APPROVED', 13)
    if approval.get('approved_for_code') is not True:
        fail('APPROVED_FOR_CODE_NOT_TRUE', 14)
    if approval.get('approval_scope') != 'implement_exact_approved_experience_only':
        fail('APPROVAL_SCOPE_INVALID', 15)

    improvements = {x.get('id'): x for x in (review.get('improvement_proposals') or []) if x.get('id')}
    accepted = set(approval.get('accepted_improvement_ids') or [])
    unknown = accepted - set(improvements)
    if unknown:
        fail('APPROVAL_REFERENCES_UNKNOWN_IMPROVEMENT:' + ','.join(sorted(unknown)), 16)
    for improvement_id in accepted:
        if improvements[improvement_id].get('author_decision') not in ('accept', 'modify'):
            fail('IMPROVEMENT_NOT_EXPLICITLY_ACCEPTED:' + improvement_id, 17)

    print('AUTHOR_EXPERIENCE_GATE=PASS')
    print('CURATORIAL_SLUG=' + slug)
    print('AUTHORIAL_DESCRIPTION_COVERAGE=100_PERCENT')
    print('UNRESOLVED_BLOCKING_QUESTIONS=0')
    print('EXPERIENCE_PREVIEW_SHA256=' + computed)
    print('CODE_SCOPE=EXACT_APPROVED_EXPERIENCE_ONLY')


if __name__ == '__main__':
    main()
