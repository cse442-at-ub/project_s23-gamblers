<?php
include_once 'database/db_connect.php';

//$reporter = isset($_POST['reporter']) ? intval($_POST['reporter']) : null;
//$item_id = isset($_POST['item_id']) ? intval($_POST['item_id']) : null;
$entityBody = file_get_contents('php://input');
$dump = json_decode($entityBody,true);
//print_r($dump);
$reporter = $dump['reporter'];
$item_id = $dump['item_id'];
if ($reporter !== null && $item_id !== null) {
    $db = new DbConnect();
    $conn = $db->connect();
    $sql = "INSERT INTO report (item_id, reporter) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    //echo $reporter;
    //echo $item_id;
    $stmt->bind_param('is', $item_id, $reporter);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "nice."]);
    } else {
        echo json_encode(["status" => "error", "message" => "gg." . $stmt->error]);
    }

} else {
    echo json_encode(["status" => "error", "message" => "Missing reporter or item_id."]);
}
?>
