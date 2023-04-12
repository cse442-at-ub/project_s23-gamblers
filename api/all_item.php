<?php
include_once 'user.php';
$method = $_SERVER['REQUEST_METHOD'];
if ($method == 'GET'){
    $sql = "SELECT * FROM items";
    $result = get($sql,true);
    echo json_encode($result);
    die();
}
header('HTTP/1.0 405 Method Not Allowed');
?>