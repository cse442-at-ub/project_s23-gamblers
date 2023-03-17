<?php
include_once '../database/db_connect.php';
function check_user_password($username, $password){

    if($username == "" || $password == ""){
        return false;
    }
    if(!have_username($username)){
        return false;
    }else{
        $row = get_by_username($username);
        if(password_verify($password, $row['hash'])){
            return true;
        }
        return false;
    }
}
function randomStr($len){
    echo $len;
    if($len<=0) return "";
    $set = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $setlen = strlen($set);
    for ($i = 0; $i < $len; $i++) {
        $str = $str.$set[rand(0, $setlen)];
    }
    return $str;
}
function get_by_username($username){
    $objDb = new DbConnect;
    $conn = $objDb->connect();
    $sql = "SELECT * FROM users WHERE username='".$username."'";
    $result = $conn->query($sql);
    return $result->fetch_assoc();
}
function have_username($username){
    if($username == ""){
        die("empty uername");
    }
    $objDb = new DbConnect;
    $conn = $objDb->connect();
    $sql = "SELECT * FROM users WHERE username='".$username."'";
    $result = $conn->query($sql);
    $rows = $result->num_rows;
    if($rows == 0){
        return false;
    }else{
        return true;
    }
}

?>