<?php
include_once 'database/db_connect.php';
include_once 'helper.php';
class User{
    private $is_vaild;
    public $information;
    public function __construct($id) {
        $this->information = get_tb_col_value("users","id",$id);
        if($this->information ==NULL){
            $this->is_vaild = false;
        }else{
            $this->is_vaild = true;
        }
    }
    /*
        return userinfomation as json string
    */
    public function info(){
        if(!$this->is_vaild){
            return;
        }
        $_info = $this->information;
        $info = ['username' =>$_info['username'],
                'email'=>$_info['email'],
                "phone_number"=>$_info["phone_number"],
                "bg_image"=>$_info['bg_image']
            ]; 
        echo json_encode($info);        
    }
    public function my_items(){
        if(!$this->is_vaild){
            return;
        }
        $user_id = $this->information['id']; 
        $result = get_tb_col_value("items","user_id",$user_id,true);
        echo json_encode($result);
    }
    public function items(){
        if(!$this->is_vaild){
            return;
        }
        $user_id = $this->information['id']; 
        $sql = "SELECT * FROM items";
        $result = get($sql,true);
        echo json_encode($result);
    }
    // user class save the item to database;
    public function post_item($json){
        if(!$this->is_vaild){
            return;
        }
        $tb = 'items';
        $col = '(
                `user_id`, 
                `date_posted`, 
                `item_state`,
                `last_modify`,
                `item_name`,
                `item_image_dir`,
                `item_description`,
                `item_price`,
                `item_contact`)';
        // dummy 
        $json_obj = json_decode($json,true);
        print_r($json_obj);
        $filename = '/path/to/image.jpg';
        $path_parts = pathinfo( $filename );
        // $image_name = sql_dots('/uploads/items/'.randomStr(20).'.'.$path_parts['extension']);
        $image_name = sql_dots($json_obj['item_image']);
        $item_description = sql_dots($json_obj['description']);
        $item_price = sql_dots($json_obj['price']);
        $seller = sql_dots($json_obj['contact']);
        $date_posted = sql_dots(date("Y-m-d H:i:s"));
        $item_name = sql_dots($json_obj['item_name']);
        $poster_id = sql_dots($this->information['id']);
        $item_state = sql_dots('active');
        $val = "($poster_id, $date_posted, $item_state , $date_posted, $item_name, $image_name, $item_description, $item_price, $seller)";
        echo $val;
        insert_tb_cols_values($tb,$col,$val);
    }
    public function is_auth(){
        return $this->is_vaild;
    }
    // TODO: user sent request to update his profile
    public function change_profile($json){
        if(!$this->is_vaild){
            return;
        }
    }
    public function change_bg_image($img_name){
        if(!$this->is_vaild){
            return;
        }
        $_id = $this->information['id'];
        $error = update_tb_col_value_where("users","bg_image",$img_name,"id = $_id");
        if($error){
            die($error);
        }
    }
    // save the views in view history 
    public function view_items($item_id){
        if(!$this->is_vaild){
            return;
        }

        $user_id = $this->information['id'];
        $col = '(`user_id`, `item_id`, `time_created`)';
        $time_created = date("Y-m-d H:i:s");
        $condition = "user_id = '$user_id' AND item_id = '$item_id'";
        if(check_tb_condition_exist("view_history",$condition)){
            update_tb_col_value_where("view_history","time_created",sql_dots($time_created),$condition);
        }else{
            $val = "('$user_id','$item_id','$time_created')";
            insert_tb_cols_values("view_history",$col,$val);
        }
        
    }
    // join two table items and view_history to get user's history
    public function view_history(){
        if(!$this->is_vaild){
            return;
        }
        $user_id = $this->information['id'];
        
        $sql = "SELECT i.item_name, i.item_price, i.item_image_dir, i.item_id, v.time_created
        FROM view_history v, items i
        WHERE v.user_id  = $user_id and v.item_id = i.item_id
        ORDER BY v.time_created DESC;";
        $views = get($sql,true);
        echo json_encode($views);
    }
}

?>