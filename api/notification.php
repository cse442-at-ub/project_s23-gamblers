<?php
include_once 'user.php';
$method = $_SERVER['REQUEST_METHOD'];
if ($method == 'GET'){
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
                    WHERE item_state = 'deleted' AND
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