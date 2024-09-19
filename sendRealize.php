<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['fullname'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $item = $_POST['item'];

    // Проверка наличия согласия на обработку персональных данных
    if (!isset($_POST['consent'])) {
        header('Location: vacancies.html?error=4'); // Нет согласия на обработку данных
        exit();
    }

    // PHPMailer для отправки через SMTP
    $mail = new PHPMailer(true);

    try {
        // Настройки сервера SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.yandex.ru';                      // SMTP сервер
        $mail->SMTPAuth   = true;                                  // Включаем SMTP аутентификацию
        $mail->Username   = 'aoULH@yandex.ru';                     // Логин SMTP (ваш email)
        $mail->Password   = 'ifjouekzixrcxwtx';                    // SMTP пароль
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;           // Шифрование SSL
        $mail->Port       = 465;                                   // Порт для SSL

        // От кого письмо
        $mail->setFrom('aoULH@yandex.ru', 'redy');

        // Кому отправить
        $mail->addAddress('os@ugratimber.ru', 'Recipient Name');  // Адрес получателя

        // Содержание письма
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Subject = "Новая заявка от $fullname";
        $mail->Body    = "
            <h3>ФИО: $fullname</h3>
            <p>Телефон: $phone</p>
            <p>Email: $email</p>
            <p>Что хочет приобрести: $item</p>
        ";

        // Отправка письма
        $mail->send();
        header('Location: sale.html?success=1');
        exit();
    } catch (Exception $e) {
        header('Location: sale.html?error=1');
        exit();
    }
}
?>
