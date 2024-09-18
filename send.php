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
    $info = $_POST['info'];

    // Проверяем, был ли загружен файл
    if (isset($_FILES['resume']) && $_FILES['resume']['error'] == UPLOAD_ERR_OK) {
        $fileTmpPath = $_FILES['resume']['tmp_name'];
        $fileName = $_FILES['resume']['name'];
        $fileSize = $_FILES['resume']['size'];
        $fileType = $_FILES['resume']['type'];
        $fileNameCmps = explode(".", $fileName);
        $fileExtension = strtolower(end($fileNameCmps));

        // Проверяем допустимые расширения файлов, если нужно
        $allowedfileExtensions = array('pdf', 'doc', 'docx');
        if (in_array($fileExtension, $allowedfileExtensions)) {
            // PHPMailer для отправки через SMTP
            $mail = new PHPMailer(true);

            try {
                $mail->isSMTP();                                           // Устанавливаем использование SMTP
                $mail->Host       = 'smtp.yandex.ru';                      // SMTP сервер
                $mail->SMTPAuth   = true;                                  // Включаем SMTP аутентификацию
                $mail->Username   = 'nikfirstmarch2006@yandex.ru';         // Логин SMTP (ваш email)
                $mail->Password   = 'sykdotlzitacgonq';                    // SMTP пароль
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;           // Шифрование SSL
                $mail->Port       = 465;                                   // Порт для SSL
            
                // От кого письмо
                $mail->setFrom('nikfirstmarch2006@yandex.ru', 'redy');
            
                // Кому отправить
                $mail->addAddress('nikfirstmarch2006@gmail.com', 'Recipient Name');  // Адрес получателя
                $mail->addAttachment($fileTmpPath, $fileName);

                // Содержание письма
                $mail->isHTML(true);  // Указываем, что письмо в HTML формате
                $mail->CharSet = 'UTF-8';
                $mail->Subject = "Новая заявка от $fullname";
                $mail->Body    = "
                    <h3>ФИО: $fullname</h3>
                    <p>Телефон: $phone</p>
                    <p>Email: $email</p>
                    <p>Информация о кандидате: $info</p>
                ";

                // Отправка письма
                $mail->send();
                header('Location: vacancies.html?success=1');
                exit();
            } catch (Exception $e) {
                header('Location: vacancies.html?error=1');
                exit();
            }
        } else {
            header('Location: vacancies.html?error=2'); // Недопустимый формат файла
            exit();
        }
    } else {
        header('Location: vacancies.html?error=3'); // Ошибка загрузки файла
        exit();
    }
}
?>
