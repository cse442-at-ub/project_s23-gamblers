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
        
        $sql = "SELECT i.item_name, i.item_description, i.item_price, i.item_contact, i.item_image_dir, i.item_state
        FROM view_history v, items i
        WHERE v.user_id  = $user_id and v.item_id = i.item_id;";
        $views = get($sql,true);
        echo json_encode($views);
    }
}

?>