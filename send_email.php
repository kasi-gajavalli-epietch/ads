<?php
$to = "kasi.gajavalli@gmail.com, kasi.gajavalli@alchimiedatasolutions.com";
$subject = "New Message from Website";
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$emailMessage = "
<html>
<head>
  <title>New Message</title>
</head>
<body>
  <h2>New Message from Website</h2>
  <p><strong>Name:</strong> $name</p>
  <p><strong>Email:</strong> $email</p>
  <p><strong>Phone:</strong> $phone</p>
  <p><strong>Message:</strong></p>
  <p>$message</p>
</body>
</html>
";

$headers = "From: $name <$email>" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

$mailSent = mail($to, $subject, $emailMessage, $headers);

if ($mailSent) {
  echo "Message sent successfully.";
} else {
  echo "An error occurred. Please try again later.";
}
?>
