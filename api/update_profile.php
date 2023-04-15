<?php
include_once 'user.php';
$method = $_SERVER['REQUEST_METHOD'];
echo $method;
if ($method == 'POST'){
    if(isset($_COOKIE['uid'])){
        $uid = $_COOKIE['uid'];
        $infor = get_tb_col_value("cookies","uid",$uid);
        if(!$infor){
            header('HTTP/1.0 401 Unauthorized');
            die();
        }
        $entityBody = file_get_contents('php://input');
        $dump = json_decode($entityBody, true);
        $a = new User($infor['id']);
        $a->change_profile($dump);
        die();
    }else{
        header('HTTP/1.0 401 Unauthorized');
        die();
    }
}
header('HTTP/1.0 405 Method Not Allowed');
?>