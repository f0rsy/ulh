        // Получаем параметры из URL
        const urlParams = new URLSearchParams(window.location.search);

        // Если есть параметр success=1, показываем сообщение об успешной отправке
        if (urlParams.has('success')) {
            document.getElementById('success-message').style.display = 'block';
        }

        // Если есть параметр error=1, показываем сообщение об ошибке
        if (urlParams.has('error')) {
            const errorCode = urlParams.get('error');
            if (errorCode === '1') {
                document.getElementById('error-message').style.display = 'block';
            } else if (errorCode === '2') {
                document.getElementById('invalid-file-message').style.display = 'block';
            } else if (errorCode === '3') {
                document.getElementById('upload-error-message').style.display = 'block';
            }
        }


        function openForm() {
            document.getElementById("formContainer").style.display = "flex";
        }
        
        function closeForm() {
            document.getElementById("formContainer").style.display = "none";
        }
        