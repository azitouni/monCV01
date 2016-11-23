<?php

// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
echo 'before';
//envoie de mail
  require "phpmailer/PHPMailerAutoload.php";
  $mail = new PHPMailer();//nouvel objet de type mail
  $mail->isSMTP();// on se connecter directement au serveur smtp
  $mail->isHTML(true);//on va utiliser le format HTML pour le message
  $mail->Host ="smtp.gmail.com";// le serveur smtp est utilisé
  $mail->Port = 465;//le port utilisé pour le smtp
  $mail->SMTPAuth =true;// on va donner les credential au serveur
  $mail->SMTPSecure = 'ssl';//
  $mail->Username = 'bioforce3@gmail.com';//utilisateur smtp
  $mail->Password = 'Azerty1234';//password smtp
  $mail->setFrom('bioforce3@gmail.com','bioforce 3');// expediteur
  $mail->addAddress('zitouniadel@hotmail.com');//le destinataire
  $mail->Sujet ='message de ' .$expediteur;
  $mail->Body ="<html>
                  <head>
                    <style>
                      h1{color : blue;}
                    </style>
                  </head>
                  <body>
                    <h1> Message de ".$expediteur ."</h1>
                    " .$message ."
                  </body>
                </html>";// le contenu du mail en html

  if (!$mail->send()) {     //si l'envoie
    echo 'Erreur envoi : ' .$mail->ErrorInfo;

/*
// Create the email and send the message
$to = 'yourname@yourdomain.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;		*/
?>
