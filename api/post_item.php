<?php
include_once 'user.php';
$method = $_SERVER['REQUEST_METHOD'];
print_r($_FILES);
print_r ($_POST);
if ($method == 'POST'){
    if(isset($_COOKIE['uid'])){
        $uid = $_COOKIE['uid'];
        $infor = get_tb_col_value("cookies","uid",$uid);
        if(!$infor){
            header('HTTP/1.0 401 Unauthorized');
            die();
        }
        if($_FILES["image"]["error"] == UPLOAD_ERR_OK){
            $uploads_dir = '../uploads';
            $tmp_name = $_FILES["image"]["tmp_name"];
            // basename() may prevent filesystem traversal attacks;
            // further validation/sanitation of the filename may be appropriate
            $name = 'example.png'; // TODO: now is dummy name, need to be choose by server late
            $a = new User($infor['id']);
            $json = '{"item_name":"hlin","price":"123","contact":"123","description":"hlin"}';
            $json_obj = json_decode($json,true);
            $json_obj['item_image'] = $name; // add item_image name 
            $json = json_encode($json_obj);
            $a->post_item($json); // need to parese argument late
            move_uploaded_file($tmp_name, "$uploads_dir/$name"); // save in disk after insert record to database
        }
        
        die();
    }else{
        header('HTTP/1.0 401 Unauthorized');
        die();
    }
}
header('HTTP/1.0 405 Method Not Allowed');
?>