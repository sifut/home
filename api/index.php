<?php
// Dependencies
require('class.phpmailer.php');

// Mail subjects
const SUBJECTS = [
    1 => 'Solicitud de empleo: %s',
    2 => 'Servicios y productos: %s',
];

// Validate required user and pass
if (!isset($_ENV['SIFUT_MAIL_USER'])) {
    die('error required SIFUT_MAIL_USER');
}

if (!isset($_ENV['SIFUT_MAIL_PASS'])) {
    die('error required SIFUT_MAIL_PASS');
}

// Mail data
$user = $_ENV['SIFUT_MAIL_USER'];
$pass = $_ENV['SIFUT_MAIL_PASS'];
$to = 'sifutcr@gmail.com';
$from = $_POST['Nombre'] . ' ' . $_POST['Apellidos'];
$subject = 'Solicitud de Empleo: ' . $from;
$body = 'NOMBRE: ' . $from;
$body .= "\n" . 'TELÉFONO: ' . $_POST['Telefono'];
$body .= "\n" . 'E-MAIL: ' . $_POST['E-mail'];
$body .= "\n\n" . 'DESCRIPCIÓN: ' . "\n\n" . $_POST['mensaje'];

// Set subject
if (!array_key_exists($_GET['subject'], SUBJECTS)) {
    die('error invalid subject');
}
$subject = sprintf(SUBJECTS[$_GET['subject']], $from);

// Mail setup
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPDebug = false;
$mail->Debugoutput = 'html';
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = $user;
$mail->Password = $pass;
$mail->setFrom($_POST['E-mail'], $from);
$mail->addReplyTo($_POST['E-mail'], $from);
$mail->addAddress($to, 'SINFUT');
$mail->Subject = $subject;
$mail->Body = $body;

// add attachment if exists
if (isset($_FILES['archivo1'])) {
    $mail->AddAttachment($_FILES['archivo1']['tmp_name'], $_FILES['archivo1']['name']);
    $filename = $_FILES['archivo1']['name'];

    // validate file type
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime = finfo_file($finfo, $_FILES['archivo1']['tmp_name']);
    $allowed = ['application/pdf'];
    if (!in_array($mime, $allowed)) {
        die('error invalid file type.');
    }
}

// Send mail
if (!$mail->send()) {
    echo 'Error';
} else {
    echo 'OK';
}
