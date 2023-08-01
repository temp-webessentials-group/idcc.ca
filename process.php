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

    // String to save form data
    $formData = "Name: $name\nEmail: $email\nMessage: $message\n";

    $filePath = "form_data.txt";

    // Save contents to form data file
    if (file_put_contents($filePath, $formData, FILE_APPEND)) {
        // Data saved successfully
        echo "Message received\n";
    } else {
        // Failed to save data
        echo "Failed to save the message.\n";
    }

    // Display the submitted data
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Message: " . $message . "<br>";
}
?>
