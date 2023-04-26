<?php
include_once 'user.php';
$method = $_SERVER['REQUEST_METHOD'];
$entityBody = file_get_contents('php://input');
if ($method == 'POST'){
    $dump = json_decode($entityBody,true);
    $item_id = $dump['item_id'];
    $item = get_tb_col_value("items","item_id",$item_id);
    if(!$item || $item['item_state'] != 'active'){
        header("HTTP/1.0 404 Not Found");
        die();
    }
    if(isset($_COOKIE['uid'])){
        $uid = $_COOKIE['uid'];
        $infor = get_tb_col_value("cookies","uid",$uid);
        if($infor){
            $a = new User($infor['id']);
            $likes = $a->likes($item['item_id']);
            echo "success";
        }

    }
    else{
        header('HTTP/1.0 401 Unauthorized');
        die();
    }
    }
else if ($method == 'GET'){
    if(isset($_COOKIE['uid'])){
        $uid = $_COOKIE['uid'];
        $infor = get_tb_col_value("cookies","uid",$uid);
        if($infor){
            $a = new User($infor['id']);
            $likes = $a->like_items_id();
            if($likes == NULL || $likes == ''){
                header("HTTP/1.0 404 Not Found");
                die();
            }
            $likes = trim($likes,",");
            $sql = "SELECT * 
                    FROM items 
                    WHERE item_state = 'active' AND
                    item_id IN ($likes)";
            $result = get($sql,array(),true);
            echo json_encode($result);
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