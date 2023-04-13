<?php
include_once 'user.php';
$method = $_SERVER['REQUEST_METHOD'];
$entityBody = file_get_contents('php://input');
if ($method == 'GET'){
    $dump = json_decode($entityBody, true);
    $sql = "SELECT u.username, c.comment_text, c.time_created 
            FROM item_comments c, users u
            WHERE c.user_id = u.id AND c.item_id = ?
            ORDER BY c.time_created DESC";
    if(!isset($dump['item_id'])){
        header('HTTP/1.0 403 Forbidden');
        die();
    }
    $item_id = $dump['item_id'];
    $result = get($sql,array($item_id),true);
    echo json_encode($result);
    die();
}
if  ($method == "POST"){
    if(isset($_COOKIE['uid'])){
        $uid = $_COOKIE['uid'];
        $dump = json_decode($entityBody, true);
        $item_id = $dump['item_id'];
        $comment = $dump['comment'];
        $infor = get_tb_col_value("cookies","uid",$uid);
        if($infor){
            $a = new User($infor['id']);
            if($a->is_auth()){
                $a->add_comment($item_id,$comment);
            }
        }
    }else{
        header('HTTP/1.0 401 Unauthorized');
        die();
    }
    exit();
}
header('HTTP/1.0 405 Method Not Allowed');
?>