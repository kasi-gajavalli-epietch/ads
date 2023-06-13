<!--?php
 
if(isset($_POST['email'])) {
$email_to = "digitalphymedia@gmail.com";
$email_subject = "Enquiry Form";
function died($error) {
        echo "We are very sorry, but there were error(s) found with the form you submitted. "; 
        echo "These errors appear below.<br /><br />"; 
        echo $error."<br /><br />"; 
        echo "Please go back and fix these errors.<br /><br />"; 
        die(); 
    }
	if(!isset($_POST['name']) ||  !isset($_POST['phone']) || !isset($_POST['email']) || !isset($_POST['service']) || !isset($_POST['msg'])) { 
        died('We are sorry, but there appears to be a problem with the form you submitted.');   
  }
   $name = $_POST['name']; $telephone = $_POST['phone'];  $email_from = $_POST['email'];$service = $_POST['service']; $message = $_POST['msg']; 
 $email_message = "Form details below.\n\n";   
  function clean_string($string) { 
      $bad = array("content-type","bcc:","to:","cc:","href"); 
      return str_replace($bad,"",$string); 
    }
    $email_message .= "Name: ".clean_string($name)."\n";	
	$email_message .= "Telephone: ".clean_string($telephone)."\n";	
    $email_message .= "Email: ".clean_string($email_from)."\n"; 
	$email_message .= "Looking For: ".clean_string($service)."\n";	
    $email_message .= "Message: ".clean_string($message)."\n";
$headers = 'From: '.$email_from."\r\n". 
'Reply-To: '.$email_from."\r\n" . 
'X-Mailer: PHP/' . phpversion(); 
@mail($email_to, $email_subject, $email_message, $headers); 
header('Location: thank-you.html');
exit(); 
?-->

Thank you for contacting us. We will be in touch with you very soon.

<!--?php
 
}
 
?-->


<?php
// Get data from form 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "yourEmail@gmail.com";
$subject = "This is the subject line";

// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message
$txt = "Name = " . $name . "\r\n  Email = "
    . $email . "\r\n Message =" . $message;

$headers = "From: noreply@demosite.com" . "\r\n" .
    "CC: somebodyelse@example.com";
if ($email != NULL) {
    mail($to, $subject, $txt, $headers);
}

// Redirect to
header("Location:last.html");
?>