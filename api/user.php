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
        
    }
    public function postitem(){
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
        $views = get_tb_col_value("view_history","user_id",$this->information['id'],true);
        echo json_encode($views);
    }
}

?>