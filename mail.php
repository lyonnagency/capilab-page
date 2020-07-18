<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        // $name = strip_tags(trim($_POST["name"]));
		// 		$name = str_replace(array("\r","\n"),array(" "," "),$name);
        // $event = strip_tags(trim($_POST["event"]));
        // $event = str_replace(array("\r","\n"),array(" "," "),$event);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        // $phone = $_POST["phone"];
        $resp=0;
        // echo json_encode(array($resp>='algo'));
        
        //echo json_encode(array($resp=>$_POST));
        // Check that data was sent to the mailer.
        if ( !filter_var($email, FILTER_VALIDATE_EMAIL) ) {
            // Set a 400 (bad request) response code and exit.
            // http_response_code(400);
            http_response_code(200);
            echo json_encode(array($resp=>'error'));
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "page@capilab.com.mx";

        // Set the email subject.
        $subject = "Nuevo mensaje de capilab con el correo - $email";

        // Build the email content.
        // $email_content = "Nombre: $name\n";
        $email_content = "Alguien ha escrito desde la pagina de capilab y ha adjuntado el siguiente Email: $email\n\n";
        // $email_content .= "Teléfono:\n$phone\n";
        // $email_content .= "Evento:\n$event\n";

        // Build the email headers.
        // $headers .= "Reply-To: Capilab <page@test.capilab.com.mx\r\n";
        // $headers .= "Return-Path: Capilab <page@test.capilab.com.mx\r\n";
        $headers .= "From: ";
        // $headers .= "Organization: Capilab\r\n";
        // $headers .= "MIME-Version: 1.0\r\n";
        // $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
        // $headers .= "X-Priority: 3\r\n";
        // $headers .= "X-Mailer: PHP". phpversion() ."\r\n";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            //echo "Thank You! Your message has been sent.";
            //header('location:/resta#form?sent=1');
            echo json_encode(array($resp=>'success'));
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>
