<?php
include_once 'database/db_connect.php';
include_once 'helper.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (isset($data['item_id']) && !empty($data['item_id'])) {
        $item_id = escape_string($data['item_id']);

        if (check_item_exists($item_id)) {
            update_item_state($item_id, 'deleted');
            echo json_encode(['status' => 'success', 'message' => 'Item deleted successfully']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Item does not exist']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid or missing item_id']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}

function check_item_exists($item_id) {
    return check_tb_col_value_exist("items", "item_id", $item_id);
}

function update_item_state($item_id, $state) {
    update_tb_col_value_where("items", "item_state", "'$state'", "item_id = $item_id");
}

?>