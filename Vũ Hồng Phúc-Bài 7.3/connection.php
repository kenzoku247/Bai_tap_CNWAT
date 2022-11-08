<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "my_profile";

if(!$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname))
{
    die("failed to connect!");
} else {
    // var_dump($con);  
    // echo("Success!");
}

?>