<?php
include_once 'user.php';
$method = $_SERVER['REQUEST_METHOD'];
$entityBody = file_get_contents('php://input');
echo $entityBody;
echo $method;
if ($method == 'POST'){
    $dump = json_decode($entityBody,true);
    $item_id = $dump['item_id'];
    $item = get_tb_col_value("items","item_id",$item_id);
    if(!$item || $item['item_state'] != 'active'){
        header("HTTP/1.0 404 Not Found");
        die();
    }
    echo json_encode($item);
    if(isset($_COOKIE['uid'])){
        $uid = $_COOKIE['uid'];
        $infor = get_tb_col_value("cookies","uid",$uid);
        if($infor){
            $a = new User($infor['id']);
            $likes = $a->likes($item['item_id']);
        }
    }
    else{
        header('HTTP/1.0 401 Unauthorized');
        die();
    }
    exit();
}

header('HTTP/1.0 405 Method Not Allowed');
?>