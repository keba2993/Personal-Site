<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate form fields
    if (empty($name) || empty($email) || empty($message)) {
        // Handle empty fields
        echo "Please fill in all fields.";
        exit;
    }

    // Set recipient email address
    $to = "kevin_barone@comcast.net";

    // Set email subject
    $subject = "New Message from Portfolio Contact Form";

    // Compose email message
    $emailContent = "Name: $name\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Message: $message";

    // Set email headers
    $headers = "From: $name <$email>";

    // Send email
    if (mail($to, $subject, $emailContent, $headers)) {
        // Email sent successfully
        echo "Message sent successfully.";
    } else {
        // Error sending email
        echo "Error sending message.";
    }
} else {
    // If the request method is not POST, redirect back to the form page
    header("Location: index.html");
    exit;
}
?>