<?php

declare(strict_types=1);

/**
 * Falarte Curadoria - Withdraw Endpoint
 * Apenas POST com JSON ou form data contendo receipt_id e withdrawal_code
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

// ============================================================================
// INPUT HANDLING (JSON or form data)
// ============================================================================

$input = [];

// Try to parse as JSON first
$json_body = file_get_contents('php://input');
if ($json_body !== false && !empty(trim($json_body))) {
    $decoded = json_decode($json_body, true);
    if (is_array($decoded)) {
        $input = $decoded;
    }
}

// Fallback to form data
if (empty($input)) {
    $input = $_POST;
}

// ============================================================================
// REQUIRED FIELDS VALIDATION
// ============================================================================

if (!isset($input['receipt_id']) || !is_string($input['receipt_id']) || empty(trim($input['receipt_id']))) {
    send_error(400, 'receipt_id is required');
}

if (!isset($input['withdrawal_code']) || !is_string($input['withdrawal_code']) || empty(trim($input['withdrawal_code']))) {
    send_error(400, 'withdrawal_code is required');
}

$receipt_id = trim($input['receipt_id']);
$withdrawal_code = trim($input['withdrawal_code']);

// ============================================================================
// VALIDATE RECEIPT AND STORAGE PATH
// ============================================================================

// Get storage path
$storage_path = get_storage_path();

// Check if metadata file exists for this receipt
$metadata_path = $storage_path . '/' . $receipt_id . '.json';
if (!file_exists($metadata_path)) {
    send_error(404, 'Receipt not found');
}

// Verify that the receipt is under the private storage directory (security check)
$real_metadata_path = realpath($metadata_path);
$real_storage_path = realpath($storage_path);

if (strpos($real_metadata_path, $real_storage_path) !== 0) {
    send_error(403, 'Invalid receipt path');
}

// ============================================================================
// VERIFY WITHDRAWAL CODE
// ============================================================================

if (!verify_withdrawal_code($storage_path, $receipt_id, $withdrawal_code)) {
    // Constant-time comparison is handled by password_verify in helpers.php
    send_error(401, 'Invalid withdrawal code');
}

// ============================================================================
// CHECK CURRENT STATUS
// ============================================================================

$metadata = load_metadata($storage_path, $receipt_id);
if ($metadata === null) {
    send_error(404, 'Receipt metadata not found');
}

// Check if already withdrawn
if (isset($metadata['status']) && $metadata['status'] === 'RETIRADA_SOLICITADA') {
    send_error(400, 'Withdrawal already requested for this receipt');
}

// ============================================================================
// PROCESS WITHDRAWAL REQUEST
// ============================================================================

// Update metadata status
if (!update_metadata_status($storage_path, $receipt_id, 'RETIRADA_SOLICITADA')) {
    send_error(500, 'Failed to update metadata status');
}

// ============================================================================
// RESPONSE
// ============================================================================

send_json([
    'receipt_id' => $receipt_id,
    'status' => 'RETIRADA_SOLICITADA',
    'withdrawal_requested_at' => $metadata['withdrawal_requested_at'] ?? gmdate('c')
]);
