<?php

include_once '../database/db_connect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();
$method = $_SERVER['REQUEST_METHOD'];
$entityBody = file_get_contents('php://input');
switch($method){
    case "POST":
        if(empty($_POST)){
            $dump = json_decode($entityBody, true);
            if($dump['email'] == "" || $dump['username'] == "" || 
                $dump['password'] == "" || $dump['phone'] == ""){
                die("one of you information is empty");
            }
            $sql = "SELECT * FROM users WHERE username='".$dump['username']."'";
            $result = $conn->query($sql);
            $rows = $result->num_rows;
            if($rows!=0){
                die("username already exise");
            }
            $sql = 'INSERT INTO users (last_login, role, state, date_created,email, username, hash ,phone_number)
                    VALUES (?,?,?,?,?,?,?,?)';
            $process = $conn->prepare($sql);
            $pwd_hash = password_hash($dump['password'], PASSWORD_DEFAULT);
            $last_login = date("Y-m-d H:i:s");
            $role = '0';
            $state = 'user';
            $date_created = date("Y-m-d H:i:s");
            $process->bind_param("ssssssss", $last_login , $role, $state, $date_created, $dump['email'],$dump['username'],$pwd_hash,$dump['phone']);
            $process->execute();
            if($process){
                echo json_encode(['status' => 'success', 'message' => 'New user created']);
            }else{
                echo json_encode(['status' => 'error', 'message' => 'fail']);
            }
        }else{
            
        }
        
        break;
    default:
        echo " you should use POST";
}
?>