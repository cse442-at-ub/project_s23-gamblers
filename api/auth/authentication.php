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
function get_id_by_uid($uid){
    
}
function saveuid($uid,$id){
    $objDb = new DbConnect;
    $conn = $objDb->connect();
    if(!have_id_in_cookies($id)){
        $sql = 'INSERT INTO cookies (id,uid)
                VALUES (?,?)';
        $process = $conn->prepare($sql);
        $process->bind_param("is",$id,$uid);
        $process->execute();
        
    }else{
        $sql = "UPDATE cookies SET uid = '$uid'
                WHERE id = '$id'";
        $conn->query($sql);
    }
}
function insert_one($tb, $value){
    
}
function randomStr($len){
    if($len<=0) return "";
    $set = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $setlen = strlen($set);
    for ($i = 0; $i < $len; $i++) {
        $str = $str.$set[rand(0, $setlen)];
    }
    return $str;
}
function have_username($username){
    return check_tb_col_value_exist("users","username",$username);
}
function have_id_in_cookies($id){
    return check_tb_col_value_exist("cookies","id",$id);
}
function get_by_username($username){
    return get_tb_col_value("users","username",$username);
}
function get_by_uid($uid){
    return get_tb_col_value("cookies","uid",$uid);
}
function get_tb_col_value($tb,$col,$value){
    $objDb = new DbConnect;
    $conn = $objDb->connect();
    $sql = "SELECT * FROM ".$tb." WHERE ".$col."='".$value."'";
    $result = $conn->query($sql);
    return $result->fetch_assoc();
}

function check_tb_col_value_exist($tb,$col,$value){
    if($value == "" || $tb == "" || $col == ""){
        die("empty argments");
    }
    $objDb = new DbConnect;
    $conn = $objDb->connect();
    $sql = "SELECT * FROM ".$tb." WHERE ".$col."='".$value."'";
    $result = $conn->query($sql);
    $rows = $result->num_rows;
    if($rows == 0){
        return false;
    }else{
        return true;
    }
}


?>