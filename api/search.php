<?php
include_once 'database/db_connect.php';

// $keyword = isset($_GET['keyword']) ? $_GET['keyword'] : '';
$entityBody = file_get_contents('php://input');
$dump = json_decode($entityBody,true);
$keyword = $dump['keyword'];
if (empty($keyword)) {
    echo json_encode(['error' => 'Keyword is required']);
    exit;
}
$result = search_items($keyword);
echo json_encode($result);
function search_items($keyword) {
    $objDb = new DbConnect;
    $conn = $objDb->connect();
    $escaped_keyword = $conn->real_escape_string($keyword);
    $sql = "SELECT * FROM items
            WHERE item_name LIKE '%$escaped_keyword%'
            OR item_description LIKE '%$escaped_keyword%'";
    $result = $conn->query($sql);
    if ($conn->error) {
        echo "Error: " . $conn->error;
        die();
    }
    $items = [];
    while ($row = $result->fetch_assoc()) {
        array_push($items, $row);
    }
    
    return $items;
}
?>
