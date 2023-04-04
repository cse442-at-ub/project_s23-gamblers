<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
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