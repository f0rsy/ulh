<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();                                           // Устанавливаем использование SMTP
    $mail->Host       = 'smtp.yandex.ru';                    // SMTP сервер
    $mail->SMTPAuth   = true;                                  // Включаем SMTP аутентификацию
    $mail->Username   = 'nikfirstmarch2006@yandex.ru';              // Логин SMTP (ваш email)
    $mail->Password   = 'sykdotlzitacgonq';                       // SMTP пароль
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;           // Шифрование SSL
    $mail->Port       = 465;                                   // Порт для SSL

    // От кого письмо
    $mail->setFrom('nikfirstmarch2006@yandex.ru', 'fix');

    // Кому отправить
    $mail->addAddress('nikfirstmarch2006@gmail.com', 'Recipient Name');  // Адрес получателя

    // Тема и текст письма
    $mail->isHTML(true);                                       // Устанавливаем формат HTML
    $mail->Subject = 'Test Email';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the plain text version for non-HTML email clients';

    // Отправляем письмо
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
