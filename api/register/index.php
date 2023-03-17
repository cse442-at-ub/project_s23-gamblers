<?php

include_once '../database/db_connect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();
$method = $_SERVER['REQUEST_METHOD'];
$entityBody = file_get_contents('php://input');
echo $entityBody;
switch($method){
    case "POST":
        if(empty($_POST)){
            $dump = json_decode($entityBody, true);
            if($dump['email'] == "" || $dump['username'] == "" || 
                $dump['password'] == "" || $dump['phone'] == ""){
                die("one of you information is empty");
            }
            $sql = 'INSERT INTO users (email, username, hash ,phoneNumber)
                    VALUES (?,?,?,?)';
            $process = $conn->prepare($sql);
            $process->bind_param("ssss",$dump['email'],$dump['username'],$dump['password'],$dump['phone']);
            $process->execute();
            echo "New user created";
            $process->close();
            $conn->close();
        }else{
            
        }
        
        break;
    default:
        echo " you should use POST";
}
?>