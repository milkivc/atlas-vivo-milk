#!/usr/bin/env bash
set -euo pipefail

VERSION="${VERSION:-2.1.0}"
OUT="${OUT_DIR:-$PWD/dist/territorial-release}"
ROOT="$OUT/root"
ZIP="$OUT/atlas-vivo-milk-territorial-hypothesis-engine-${VERSION}.zip"

rm -rf "$OUT"
mkdir -p "$ROOT/src" "$ROOT/metadata" "$ROOT/docs"
cp -a src/territorial-reader "$ROOT/src/"
cp -a metadata/territorial-reader/. "$ROOT/metadata/"
cp docs/territorial-reader/GENEALOGIA_EPISTEMICA_LEITURA_TERRITORIAL_2026-08-23.md "$ROOT/docs/"
[ -f docs/territorial-reader/METODOLOGIA_LEITURA_TERRITORIAL_VALIDACAO_HUMANA.md ] && cp docs/territorial-reader/METODOLOGIA_LEITURA_TERRITORIAL_VALIDACAO_HUMANA.md "$ROOT/docs/"
cp LICENSE "$ROOT/"
printf 'version=%s\ncommit=%s\nsource_date_epoch=%s\n' "$VERSION" "$(git rev-parse HEAD)" "$(git show -s --format=%ct HEAD)" > "$ROOT/RELEASE_RECEIPT.txt"

(
  cd "$ROOT"
  find . -type f ! -name MANIFEST_SHA256 -print0 | LC_ALL=C sort -z | xargs -0 sha256sum > MANIFEST_SHA256
)
find "$ROOT" -exec touch -h -t 202608230000.00 {} +
mkdir -p "$OUT"
(
  cd "$ROOT"
  find . -type f -print | LC_ALL=C sort | zip -X -q "$ZIP" -@
)
sha256sum "$ZIP" > "$OUT/PACKAGE_SHA256"
cat "$OUT/PACKAGE_SHA256"
