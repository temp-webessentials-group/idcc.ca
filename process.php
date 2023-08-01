<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve data and sanitize it to prevent potential security issues
    $name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : "";
    $email = isset($_POST["email"]) ? htmlspecialchars($_POST["email"]) : "";
    $message = isset($_POST["message"]) ? htmlspecialchars($_POST["message"]) : "";

    // Validate the data (you can add more validation checks as needed)
    if (empty($name) || empty($email) || empty($message)) {
        // Handle empty form fields
        echo "Please fill out all the required fields.";
        exit; // Stop execution to prevent saving empty data and further processing
    }


    // Display the submitted data
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Message: " . $message . "<br>";

	// "Go back" button
    echo '<br><a href="javascript:history.go(-1)">Go back</a>';
} else {
    echo "<p>No form data submitted yet.</p>";
}
?>
