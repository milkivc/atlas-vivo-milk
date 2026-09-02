<?php

declare(strict_types=1);

/**
 * Falarte Curadoria - Helper Functions
 * Não altera frontend, catálogo, workflows ou outras curadorias
 */

// ============================================================================
// CONSTANTS
// ============================================================================

const FALARTE_MECHANIC_IDS = [
    'lugar-escondido',
    'trinta-dias',
    'antigo-novo',
    'embalagem-conta',
    'som-local',
    'ainda-resiste',
    'palavras-desapareceram',
    'nao-apagado',
    'so-memoria',
    'remetente-ausente'
];

const FALARTE_AUTHOR_MODES = ['nome_real', 'nome_inventado', 'anonimo'];
const FALARTE_PUBLICATION_SCOPES = ['integral', 'trechos', 'nao_publicar'];

const FALARTE_ALLOWED_MIMES = [
    'image/jpeg' => ['jpg', 'jpeg'],
    'image/png' => ['png'],
    'image/webp' => ['webp'],
    'audio/mpeg' => ['mp3'],
    'audio/ogg' => ['ogg'],
    'audio/wav' => ['wav'],
    'audio/webm' => ['webm'],
    'video/webm' => ['webm'],
    'application/pdf' => ['pdf']
];

const FALARTE_FORBIDDEN_MIMES = [
    'image/svg+xml',
    'text/html',
    'application/xhtml+xml',
    'application/x-sh',
    'application/x-bash',
    'application/x-python',
    'application/x-php',
    'application/x-perl',
    'application/x-ruby',
    'application/javascript',
    'text/javascript',
    'application/octet-stream'
];

const FALARTE_MAX_FILE_SIZE = 12 * 1024 * 1024; // 12 MiB
const FALARTE_SCHEMA_VERSION = '1.0';

// ============================================================================
// VALIDATION
// ============================================================================

function validate_mechanic_id(string $mechanic_id): bool
{
    return in_array($mechanic_id, FALARTE_MECHANIC_IDS, true);
}

function validate_author_mode(string $author_mode): bool
{
    return in_array($author_mode, FALARTE_AUTHOR_MODES, true);
}

function validate_publication_scope(string $publication_scope): bool
{
    return in_array($publication_scope, FALARTE_PUBLICATION_SCOPES, true);
}

function validate_consent_public(string $publication_scope, bool $consent_public): bool
{
    if (in_array($publication_scope, ['integral', 'trechos'], true)) {
        return $consent_public === true;
    }
    return true;
}

// ============================================================================
// SANITIZATION
// ============================================================================

function sanitize_text(string $text): string
{
    // Remove null bytes
    $text = str_replace("\0", '', $text);

    // Normalize line endings
    $text = str_replace(["\r\n", "\r"], "\n", $text);

    // Trim whitespace
    $text = trim($text);

    // Limit length to prevent abuse
    if (strlen($text) > 100000) {
        $text = substr($text, 0, 100000);
    }

    return $text;
}

// ============================================================================
// FILE HANDLING
// ============================================================================

function get_storage_path(): string
{
    $document_root = realpath($_SERVER['DOCUMENT_ROOT'] ?? '');

    if (empty($document_root) || !is_dir($document_root)) {
        http_response_code(500);
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Invalid document root']);
        exit(1);
    }

    $storage_path = dirname($document_root) . '/atlas-private/falarte-intake';

    if (!is_dir($storage_path)) {
        if (!mkdir($storage_path, 0750, true)) {
            http_response_code(500);
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Cannot create storage directory']);
            exit(1);
        }
    }

    if (!is_writable($storage_path)) {
        http_response_code(500);
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Storage directory is not writable']);
        exit(1);
    }

    return $storage_path;
}

function generate_random_token(int $length = 32): string
{
    return bin2hex(random_bytes($length));
}

function get_file_metadata(array $file): array
{
    $finfo = finfo_open(FILEINFO_MIME_TYPE | FILEINFO_COMPRESS);
    $detected_mime = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);

    if ($detected_mime === false) {
        return ['valid' => false, 'error' => 'Cannot detect MIME type'];
    }

    // Check if MIME is forbidden
    if (in_array($detected_mime, FALARTE_FORBIDDEN_MIMES, true)) {
        return ['valid' => false, 'error' => 'Forbidden MIME type: ' . $detected_mime];
    }

    // Check if MIME is in allowlist
    $mime_allowed = false;
    foreach (FALARTE_ALLOWED_MIMES as $allowed_mime => $extensions) {
        if (str_starts_with($detected_mime, $allowed_mime)) {
            $mime_allowed = true;
            break;
        }
    }

    if (!$mime_allowed) {
        return ['valid' => false, 'error' => 'MIME type not allowed: ' . $detected_mime];
    }

    // Check file size
    if ($file['size'] > FALARTE_MAX_FILE_SIZE) {
        return ['valid' => false, 'error' => 'File size exceeds maximum of 12 MiB'];
    }

    // Check for actual file content (magic bytes verification)
    $file_content = file_get_contents($file['tmp_name']);
    if ($file_content === false) {
        return ['valid' => false, 'error' => 'Cannot read file content'];
    }

    // Additional checks for specific types
    $is_valid = true;

    // Check for SVG (even if MIME is wrong)
    if (str_contains($file_content, '<svg') || str_contains($file_content, '<?xml')) {
        $is_valid = false;
    }

    // Check for HTML
    if (str_contains($file_content, '<html') || str_contains($file_content, '<!DOCTYPE html')) {
        $is_valid = false;
    }

    // Check for PHP
    if (str_contains($file_content, '<?php') || str_contains($file_content, '<?=')) {
        $is_valid = false;
    }

    if (!$is_valid) {
        return ['valid' => false, 'error' => 'File content contains forbidden patterns'];
    }

    // Calculate SHA-256
    $sha256 = hash_file('sha256', $file['tmp_name']);
    if ($sha256 === false) {
        return ['valid' => false, 'error' => 'Cannot calculate SHA-256 hash'];
    }

    return [
        'valid' => true,
        'mime' => $detected_mime,
        'size' => $file['size'],
        'sha256' => $sha256
    ];
}

function store_file(array $file, string $storage_path, string $stored_name): array
{
    $target_path = $storage_path . '/' . $stored_name;

    if (!move_uploaded_file($file['tmp_name'], $target_path)) {
        return ['success' => false, 'error' => 'Failed to move uploaded file'];
    }

    // Verify file was moved
    if (!file_exists($target_path)) {
        return ['success' => false, 'error' => 'File not found after move'];
    }

    // Verify file integrity
    $sha256 = hash_file('sha256', $target_path);
    if ($sha256 === false) {
        @unlink($target_path);
        return ['success' => false, 'error' => 'Cannot verify file integrity after move'];
    }

    return [
        'success' => true,
        'path' => $target_path,
        'sha256' => $sha256,
        'size' => filesize($target_path)
    ];
}

// ============================================================================
// METADATA HANDLING
// ============================================================================

function create_metadata_array(
    string $receipt_id,
    string $mechanic_id,
    bool $consent_curatorial,
    bool $consent_public,
    bool $age13,
    string $author_mode,
    string $publication_scope,
    ?string $texto,
    ?array $file_metadata
): array {
    $metadata = [
        'schema_version' => FALARTE_SCHEMA_VERSION,
        'receipt_id' => $receipt_id,
        'status' => 'PENDENTE_CURADORIA',
        'received_at' => gmdate('c'),
        'mechanic_id' => $mechanic_id,
        'consentimentos' => [
            'consent_curatorial' => $consent_curatorial,
            'consent_public' => $consent_public,
            'age13' => $age13
        ],
        'author_mode' => $author_mode,
        'publication_scope' => $publication_scope
    ];

    if ($texto !== null && $texto !== '') {
        $metadata['textos'] = [
            'conteudo' => $texto
        ];
    }

    if ($file_metadata !== null) {
        $metadata['arquivo'] = [
            'mime' => $file_metadata['mime'],
            'tamanho' => $file_metadata['size'],
            'sha256' => $file_metadata['sha256'],
            'stored_name' => $file_metadata['stored_name']
        ];
    }

    return $metadata;
}

function save_metadata(string $storage_path, string $receipt_id, array $metadata): bool
{
    $metadata_path = $storage_path . '/' . $receipt_id . '.json';

    $json = json_encode($metadata, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

    if ($json === false) {
        return false;
    }

    return file_put_contents($metadata_path, $json, LOCK_EX) !== false;
}

function load_metadata(string $storage_path, string $receipt_id): ?array
{
    $metadata_path = $storage_path . '/' . $receipt_id . '.json';

    if (!file_exists($metadata_path)) {
        return null;
    }

    $json = file_get_contents($metadata_path);
    if ($json === false) {
        return null;
    }

    $metadata = json_decode($json, true);
    if (!is_array($metadata)) {
        return null;
    }

    return $metadata;
}

function update_metadata_status(string $storage_path, string $receipt_id, string $new_status): bool
{
    $metadata = load_metadata($storage_path, $receipt_id);

    if ($metadata === null) {
        return false;
    }

    $metadata['status'] = $new_status;

    if ($new_status === 'RETIRADA_SOLICITADA') {
        $metadata['withdrawal_requested_at'] = gmdate('c');
    }

    $metadata_path = $storage_path . '/' . $receipt_id . '.json';

    $json = json_encode($metadata, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

    if ($json === false) {
        return false;
    }

    return file_put_contents($metadata_path, $json, LOCK_EX) !== false;
}

// ============================================================================
// WITHDRAWAL CODE HANDLING
// ============================================================================

function generate_withdrawal_code(): string
{
    return generate_random_token(16);
}

function store_withdrawal_code(string $storage_path, string $receipt_id, string $withdrawal_code): bool
{
    $withdrawal_path = $storage_path . '/' . $receipt_id . '.withdrawal';

    // Store only the hash, not the plain code
    $hash = password_hash($withdrawal_code, PASSWORD_ARGON2ID, ['memory_cost' => 65536, 'time_cost' => 4, 'threads' => 1]);

    if ($hash === false) {
        return false;
    }

    return file_put_contents($withdrawal_path, $hash, LOCK_EX) !== false;
}

function verify_withdrawal_code(string $storage_path, string $receipt_id, string $provided_code): bool
{
    $withdrawal_path = $storage_path . '/' . $receipt_id . '.withdrawal';

    if (!file_exists($withdrawal_path)) {
        return false;
    }

    $stored_hash = file_get_contents($withdrawal_path);
    if ($stored_hash === false) {
        return false;
    }

    return password_verify($provided_code, trim($stored_hash));
}

// ============================================================================
// ERROR HANDLING
// ============================================================================

function send_error(int $status_code, string $message): never
{
    http_response_code($status_code);
    header('Content-Type: application/json');
    echo json_encode(['error' => $message]);
    exit(1);
}

function send_json(array $data, int $status_code = 200): never
{
    http_response_code($status_code);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit(0);
}
