<?php
include_once 'user.php';
$method = $_SERVER['REQUEST_METHOD'];
if ($method == 'GET'){
    $query = array();
    parse_str($_SERVER['QUERY_STRING'], $query);
    
    $item = get_tb_col_value("items","item_id",$query['var']);
    if(!$item || $item['item_state'] != 'acitve'){
        header("HTTP/1.0 404 Not Found");
        die();
    }
    $sql = "UPDATE items SET view_count = view_count+1 WHERE item_id = ?";
    get($sql,array($query['var']));
    echo json_encode($item);
    if(isset($_COOKIE['uid'])){
        $uid = $_COOKIE['uid'];
        $infor = get_tb_col_value("cookies","uid",$uid);
        if($infor){
            $a = new User($infor['id']);
            if($a->is_auth()){
                $a->view_items($query['var']); // need to parese argument late
            }
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