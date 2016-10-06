<?php
header("Content-Type:application/json");
$arr = array('user1' => array('firstName' => 'Jack','lastName' => 'Lawson'),'user4' => array('firstName' => 'John','lastName' => 'Smith'));
echo json_encode($arr);
?>