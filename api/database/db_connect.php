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
        public function connect() {
            try{
                $conn = new mysqli($this->hn, $this->un, $this->pw, $this->db);
                return $conn;
            } catch (Exception $e) {
                $e->getMessage();
            }
        }
    }

?>