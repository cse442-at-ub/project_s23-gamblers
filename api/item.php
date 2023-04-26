<?php
include_once 'user.php';
$method = $_SERVER['REQUEST_METHOD'];
if ($method == 'GET'){
    $query = array();
    parse_str($_SERVER['QUERY_STRING'], $query);
    $item = get_tb_col_value("items","item_id",$query['var']);
    if(!$item || $item['item_state'] != 'active'){
        header("HTTP/1.0 404 Not Found");
        die();
    }

    $sql = "UPDATE items SET view_count = view_count+1 WHERE item_id = ?";
    get($sql,array($query['var']));
    if(isset($_COOKIE['uid'])){
        $uid = $_COOKIE['uid'];
        $infor = get_tb_col_value("cookies","uid",$uid);
        if($infor){
            $a = new User($infor['id']);
            if($a->is_auth()){
                $a->view_items($query['var']); // need to parese argument late
                $item['islike'] = $a->islike($item['item_id']);
            }
        }
    }
    // image_type 0 is item_type
    $sql = "SELECT image_name
            FROM images
            WHERE type_id = ? AND image_type = 0";
    $result = get($sql,array($item['item_id']),true);
    $item['item_images'] = $result;
    echo json_encode($item);
    exit();
}
if ($method == 'POST'){
    $entityBody = file_get_contents('php://input');
    $dump = json_decode($entityBody,true);
    if(isset($_COOKIE['uid'])){
        $uid = $_COOKIE['uid'];
        $infor = get_tb_col_value("cookies","uid",$uid);
        if(!$infor){
            header('HTTP/1.0 401 Unauthorized');
            die();
        }
        $query = array();
        parse_str($_SERVER['QUERY_STRING'], $query);
        $item = get_tb_col_value("items","item_id",$query['var']);
        if(!$item || $item['item_state'] != 'active'){
            header("HTTP/1.0 404 Not Found");
            die();
        }
        if($_FILES["add_image"]["error"] == UPLOAD_ERR_OK){
            $uploads_dir = '../uploads';
            $tmp_name = $_FILES["add_image"]["tmp_name"];
            $name = randomStr(20).'.png';
            $date_created = date("Y-m-d H:i:s");
            $image_type = 0; //0 for item_image
            $sql = "INSERT INTO images
            (`user_id`, `image_type`, `image_name`, `time_created`, `type_id`) 
            VALUES (?,?,?,?,?)";
            print_r(array($infor['id'],$image_type,$name,$date_created,$item['item_id']));
            get($sql,array($infor['id'],$image_type,$name,$date_created,$item['item_id']));
            move_uploaded_file($tmp_name, "$uploads_dir/$name"); // save in disk after insert record to database
            
        }else{
            header('HTTP/1.0 403 Forbidden');
        }
        die();
    }else{
        header('HTTP/1.0 401 Unauthorized');
        die();
    }
}
header('HTTP/1.0 405 Method Not Allowed');
?>