<?php
$to = "rvz2@njit.edu";
$subject = $_POST['subject'];
$message = "First name: " . $_POST['firstName'] . "\nLast name: " . $_POST['lastName'] . "\nMessage: " . $_POST['message'];

$headers = "From: " . $_POST['email'] . "\r\n";

if (mail($to, $subject, $message, $headers)) {
	echo "<p>Message sent!</p>";
}
else {
	echo "<p>Message not sent.</p>";
}