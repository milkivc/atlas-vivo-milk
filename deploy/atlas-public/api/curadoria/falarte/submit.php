<?php

declare(strict_types=1);

/**
 * Falarte Curadoria - Submit Endpoint
 * Apenas POST multipart/form-data
 * Não altera frontend, catálogo, workflows ou outras curadorias
 */

require_once __DIR__ . '/helpers.php';

// ============================================================================
// REQUEST VALIDATION
// ============================================================================

// Only POST method allowed
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send_error(405, 'Method not allowed - only POST is accepted');
}

// Check content type - must be multipart/form-data
$content_type = $_SERVER['CONTENT_TYPE'] ?? '';
if (strpos($content_type, 'multipart/form-data') !== 0) {
    send_error(415, 'Content type must be multipart/form-data');
}

// ============================================================================
// REQUIRED FIELDS VALIDATION
// ============================================================================

// mechanic_id validation
if (!isset($_POST['mechanic_id']) || !is_string($_POST['mechanic_id'])) {
    send_error(400, 'mechanic_id is required');
}

$mechanic_id = $_POST['mechanic_id'];
if (!validate_mechanic_id($mechanic_id)) {
    send_error(400, 'Invalid mechanic_id');
}

// age13 validation - must be true
$age13 = filter_var($_POST['age13'] ?? '', FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
if ($age13 !== true) {
    send_error(400, 'age13 must be true');
}

// consent_curatorial validation - must be true
$consent_curatorial = filter_var($_POST['consent_curatorial'] ?? '', FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
if ($consent_curatorial !== true) {
    send_error(400, 'consent_curatorial must be true');
}

// author_mode validation
if (!isset($_POST['author_mode']) || !is_string($_POST['author_mode'])) {
    send_error(400, 'author_mode is required');
}

$author_mode = $_POST['author_mode'];
if (!validate_author_mode($author_mode)) {
    send_error(400, 'Invalid author_mode - must be one of: nome_real, nome_inventado, anonimo');
}

// publication_scope validation
if (!isset($_POST['publication_scope']) || !is_string($_POST['publication_scope'])) {
    send_error(400, 'publication_scope is required');
}

$publication_scope = $_POST['publication_scope'];
if (!validate_publication_scope($publication_scope)) {
    send_error(400, 'Invalid publication_scope - must be one of: integral, trechos, nao_publicar');
}

// consent_public validation
$consent_public = filter_var($_POST['consent_public'] ?? '', FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false;
if (!validate_consent_public($publication_scope, $consent_public)) {
    send_error(400, 'consent_public is required when publication_scope is integral or trechos');
}

// texto (optional)
$texto = null;
if (isset($_POST['texto']) && is_string($_POST['texto']) && $_POST['texto'] !== '') {
    $texto = sanitize_text($_POST['texto']);
}

// ============================================================================
// FILE UPLOAD HANDLING (optional)
// ============================================================================

$file_metadata = null;

if (isset($_FILES['arquivo']) && $_FILES['arquivo']['error'] === UPLOAD_ERR_OK) {
    $file = $_FILES['arquivo'];

    // Validate file was uploaded via HTTP POST
    if (!is_uploaded_file($file['tmp_name'])) {
        send_error(400, 'File was not uploaded via HTTP POST');
    }

    $file_info = get_file_metadata($file);

    if (!$file_info['valid']) {
        send_error(400, $file_info['error'] ?? 'Invalid file');
    }

    // Generate storage path
    $storage_path = get_storage_path();

    // Generate random stored name
    $stored_name = generate_random_token(24);

    // Store the file
    $store_result = store_file($file, $storage_path, $stored_name);

    if (!$store_result['success']) {
        send_error(500, $store_result['error'] ?? 'Failed to store file');
    }

    // Prepare file metadata
    $file_metadata = [
        'mime' => $file_info['mime'],
        'size' => $store_result['size'],
        'sha256' => $store_result['sha256'],
        'stored_name' => $stored_name
    ];
}

// ============================================================================
// GENERATE IDS AND CODES
// ============================================================================

$receipt_id = generate_random_token(24);
$withdrawal_code = generate_withdrawal_code();

// ============================================================================
// STORAGE PATH
// ============================================================================

if ($file_metadata === null) {
    // Still need to get storage path for metadata and withdrawal code
    $storage_path = get_storage_path();
}

// ============================================================================
// CREATE AND SAVE METADATA
// ============================================================================

$metadata = create_metadata_array(
    $receipt_id,
    $mechanic_id,
    $consent_curatorial,
    $consent_public,
    $age13,
    $author_mode,
    $publication_scope,
    $texto,
    $file_metadata
);

if (!save_metadata($storage_path, $receipt_id, $metadata)) {
    // Cleanup stored file if metadata save fails
    if ($file_metadata !== null) {
        $file_path = $storage_path . '/' . $file_metadata['stored_name'];
        if (file_exists($file_path)) {
            @unlink($file_path);
        }
    }
    send_error(500, 'Failed to save metadata');
}

// ============================================================================
// STORE WITHDRAWAL CODE (hashed)
// ============================================================================

if (!store_withdrawal_code($storage_path, $receipt_id, $withdrawal_code)) {
    // Cleanup
    @unlink($storage_path . '/' . $receipt_id . '.json');
    if ($file_metadata !== null) {
        $file_path = $storage_path . '/' . $file_metadata['stored_name'];
        if (file_exists($file_path)) {
            @unlink($file_path);
        }
    }
    send_error(500, 'Failed to store withdrawal code');
}

// ============================================================================
// RESPONSE
// ============================================================================

send_json([
    'receipt_id' => $receipt_id,
    'withdrawal_code' => $withdrawal_code,
    'status' => 'PENDENTE_CURADORIA',
    'received_at' => $metadata['received_at']
]);
