<?php
include_once 'user.php';
$method = $_SERVER['REQUEST_METHOD'];
if ($method == 'GET'){
    if(isset($_COOKIE['uid'])){
        $uid = $_COOKIE['uid'];
        $infor = get_tb_col_value("cookies","uid",$uid);
        if(!$infor){
            header('HTTP/1.0 401 Unauthorized');
            die();
        }
        $a = new User($infor['id']);
        $a->info();
        
        exit;
    }else{
        header('HTTP/1.0 401 Unauthorized');
        die();
    }
    
}
header('HTTP/1.0 405 Method Not Allowed');
?>