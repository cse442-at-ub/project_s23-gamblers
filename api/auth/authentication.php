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
        if($password == $row['hash']){
            return true;
        }
        if(password_verify($password, $row['hash'])){
            return true;
        }
        return false;
    }
}
function get_id_by_uid($uid){
    
}
function check_auth_cookie($auth_cookie){
    $row = get_tb_col_value("cookies","auth_id",$auth_cookie);
    
}
function escape_string($string){
    $objDb = new DbConnect;
    $conn = $objDb->connect();
    return $conn->real_escape_string($string);
}
function saveuid($uid,$id){
    
    if(!check_tb_col_value_exist("cookies","id",$id)){
        insert_tb_cols_values("cookies","(id, uid)", "($id, $uid)");
        
    }else{
        update_tb_col_value_where("cookies","uid",$uid,"id = $id");
    }
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
function get_by_id($id){
    return get_tb_col_value("users","id",$id);
}
function get_by_uid($uid){
    return get_tb_col_value("cookies","uid",$uid);
}



################## basic function ########################
function get_tb_col_value($tb,$col,$value){
    $objDb = new DbConnect;
    $conn = $objDb->connect();
    $sql = "SELECT * FROM ".$tb." WHERE ".$col."='".$value."'";
    $result = $conn->query($sql);
    if ($conn->error){
        echo "Error: " . $conn->error;
    }
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
function update_tb_col_value_where($tb,$col,$value,$where){
    $objDb = new DbConnect;
    $conn = $objDb->connect();
    $sql = "UPDATE $tb SET $col = $value
                WHERE $where";
    $conn->query($sql);
}
function insert_tb_cols_values($tb, $cols ,$values){
    $objDb = new DbConnect;
    $conn = $objDb->connect();
    $sql = "INSERT INTO $tb $cols
    VALUES $values";
    echo "here";
    if ($conn->error){
        die( "Error: " . $conn->error );
    }
}