<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
	//retrieve data
	$name = $_POST["name"];
	$email = $_POST["email"];
	
	//insert data validation here
	
	//display
	echo "Name: " . $name . "<br>";
	echo "Email: " . $email . "<br>";
	
}
?>