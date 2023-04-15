<?php
include_once 'user.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    setcookie('uid', null, [
        'expires' => time() - 86400,
        'path' => '/',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'None',
    ]);
    echo "cookie moved";
}

?>