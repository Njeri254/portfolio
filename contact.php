<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Set the recipient email address
    $to = "maureennjeri118@gmail.com";

    // Get the form fields and sanitize them
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);
    

    // Set the email subject
    $subject = "New Contact Form Submission";

    // Build the email message
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Set additional headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $name <$email>\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent successfully! I will get back to you soon";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>

