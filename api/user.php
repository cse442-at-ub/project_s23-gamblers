<?php
include_once 'database/db_connect.php';

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
        $info = ['username' =>$_info['username'],'eamil'=>$_info['email'],"phone_number"=>$_info["phone_number"]]; 
        echo json_encode($info);        
    }
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
        $filename = '/path/to/image.jpg';
        $path_parts = pathinfo( $filename );
        $image_name = sql_dots('/uploads/items/'.randomStr(20).'.'.$path_parts['extension']);
        $item_description = sql_dots('This is an example item description.');
        $item_price = sql_dots('99');
        $seller = sql_dots('seller@example.com');
        $date_posted = sql_dots(date("Y-m-d H:i:s"));
        $item_name = sql_dots("example i");
        $poster_id = sql_dots('1');
        $item_state = sql_dots('active');
        $val = "($poster_id, $date_posted, $item_state , $date_posted, $item_name, $image_name, $item_description, $item_price, $seller)";
        insert_tb_cols_values($tb,$col,$val);
    }
    public function change_profile($json){
        if(!$this->is_vaild){
            return;
        }
    }
    public function view_history(){
        if(!$this->is_vaild){
            return;
        }
        $user_id = $this->information['id'];
        
        $sql = "SELECT i.item_name, i.item_price, i.item_image_dir, i.item_id
        FROM view_history v, items i
        WHERE v.user_id  = $user_id and v.item_id = i.item_id;";
        $views = get($sql,true);
        echo json_encode($views);
    }
}

?>