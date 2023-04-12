<?php
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Headers: Content-Type, Authorization,access-control-allow-origin");
    
    class DbConnect {
        ########## server #############
        // private $hn = 'oceanus.cse.buffalo.edu:3306';
        // private $un = 'jwu235';
        // private $pw = '50417183';
        // private $db = "cse442_2023_spring_team_m_db";
        ########## docker #############
        private $hn = 'db';
        private $un = 'root';
        private $pw = 'Password123#@!';  //password for my own machine
        private $db = "cse442_2023_spring_team_m_db";
        public $conn;
        function __destruct(){
            $this->conn->close();
        }
        public function connect() {
            try{
                $conn = new mysqli($this->hn, $this->un, $this->pw, $this->db);
                $this->conn = $conn;
                return $conn;
            } catch (Exception $e) {
                $e->getMessage();
            }
        }
    }

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
            $sql = "INSERT INTO cookies (id, uid) VALUES (?,?)";
            get($sql,array($id,$uid));
            // insert_tb_cols_values("cookies","(id, uid)", "('$id', '$uid')");
            
        }else{
            $sql = $sql = "UPDATE cookies SET uid = ? WHERE id = ?";
            get($sql,array($uid,$id));
            // update_tb_col_value_where("cookies","uid","'$uid'","id = $id");
        }
    }
    function randomStr($len){
        if($len<=0) return "";
        $set = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $setlen = strlen($set);
        $str = '';
        for ($i = 0; $i < $len; $i++) {
            $str = $str.$set[rand(0, $setlen-1)];
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
    function get_tb_col_value($tb,$col,$value, $muti=false){
        // $objDb = new DbConnect;
        // $conn = $objDb->connect();
        // $sql = "SELECT * FROM ".$tb." WHERE ".$col."='".$value."'";
        $sql = "SELECT * FROM $tb WHERE $col = ?";
        $args = array($value);
        return get($sql,$args,$muti);
        
    }
    function get($sql,$params,$muti=false){
        $objDb = new DbConnect;
        $conn = $objDb->connect();
        if ($conn->error){
            echo "Error: " . $conn->error;
            die();
        }
        $stmt = $conn->prepare($sql);
        $ss = str_repeat('s', count($params));
        if(count($params) != 0){
            $stmt->bind_param($ss, ...$params);
        }
        $stmt->execute();
        $result = $stmt->get_result();
        if(!$result){
            return array();
        }
        $stmt->close(); 
        if(!$muti)
            return $result->fetch_assoc();
        else{
            $ans = array();
            while($row = $result->fetch_assoc()){
                array_push($ans,$row);
            }
            return $ans;
        }
    }
    function check_tb_condition_exist($sql, $condition){
        $result = get($sql,$condition,true);
        $rows = count($result);
        if($rows == 0){
            return false;
        }else{
            return true;
        }
    }
    function check_tb_col_value_exist($tb,$col,$value){
        if($value == "" || $tb == "" || $col == ""){
            die("empty argments");
        }
        // $tb $col is not user input
        $sql = "SELECT * FROM $tb WHERE $col = ?";
        $result = get($sql,array($value),true);
        $rows = count($result);
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
        
        if ($conn->error){
            die( "Error: " . $conn->error );
        }
        return $conn->error;
    }
    function insert_tb_cols_values($tb, $cols ,$values){
        $objDb = new DbConnect;
        $conn = $objDb->connect();
        $sql = "INSERT INTO $tb $cols
        VALUES $values";
        $conn->query($sql);
        if ($conn->error){
            die( "Error: " . $conn->error );
        }
    }

?>