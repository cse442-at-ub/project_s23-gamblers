<?php
include_once 'database/db_connect.php';

// Handle GET request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM notice ORDER BY id DESC LIMIT 1";
    $result = get($sql);
    echo json_encode($result);
    exit();
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (isset($data['information'])) {
        $information = escape_string($data['information']);
        $sql = "INSERT INTO notice (information) VALUES ('$information')";
        $objDb = new DbConnect;
        $conn = $objDb->connect();
        $conn->query($sql);

        if ($conn->error) {
            die("Error: " . $conn->error);
        }
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
    }
    exit();
}
?>
