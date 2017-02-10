<?php
header("Access-Control-Allow-Origin: *");

$email = $_POST['email'];


$connection = mysql_connect("mysql4.000webhost.com", "a8784539_admin", "9826414207memo"); // Establishing Connection with Server..
$db = mysql_select_db("a8784539_memo", $connection); // Selecting Database

$query = mysql_query("SELECT status FROM mydb WHERE email =' " $email " '"); //Insert Query
echo $query;
mysql_close($connection); // Connection Closed
?>
