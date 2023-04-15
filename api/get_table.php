<?php
    include_once 'database/db_connect.php';

    function get_all_reports() {
        $objDb = new DbConnect;
        $conn = $objDb->connect();
        $sql = "SELECT * FROM report";
        $result = $conn->query($sql);
        if ($conn->error){
            echo "Error: " . $conn->error;
            die();
        }

        $reports = array();
        while($row = $result->fetch_assoc()){
            array_push($reports, $row);
        }
        return $reports;
    }
    $reports = get_all_reports();
    header('Content-Type: application/json');
    echo json_encode($reports);
?>
