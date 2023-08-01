<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
	//retrieve data
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	
	//string to save to form data
	$formData = "\nName: $name\nEmail: $email\nMessage: $message\n";
	
	$filePath ="form_data.txt";
	
	//save contents to form data
	if(file_put_contents($filePath, $formData, FILE_APPEND)){
		//data saved
		echo "Message recieved\n";
	} else {
		//failed save
		echo "Message lost\n";
	}
	
	
	//display
	echo "Name: " . $name . "<br>";
	echo "Email: " . $email . "<br>";
	echo "Message: " . $message . "<br>";
	
}
?>