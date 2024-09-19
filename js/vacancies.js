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
        





        const ogrn = '1048600000492'; // ОГРН компании
        const selectElement = document.getElementById('vacancy');

        // Функция для получения вакансий по ОГРН
        async function fetchVacanciesByOgrn(ogrn) {
            try {
                const response = await fetch(`http://opendata.trudvsem.ru/api/v1/vacancies/company/ogrn/${ogrn}`);
                const data = await response.json();
                
                console.log('Ответ API:', data); // Отображаем ответ API в консоли

                if (data && data.results && data.results.vacancies.length > 0) {
                    populateVacancies(data.results.vacancies);
                } else {
                    console.log('Вакансии не найдены для этого ОГРН');
                }
            } catch (error) {
                console.error('Ошибка при получении вакансий:', error);
            }
        }

        // Функция для добавления вакансий в выпадающий список
        function populateVacancies(vacancies) {
            vacancies.forEach(vacancy => {
                const option = document.createElement('option');
                option.value = vacancy['vacancy']['vac_url']; // URL вакансии в качестве значения
                option.textContent = vacancy['vacancy']['job-name']; // Название вакансии для отображения
                selectElement.appendChild(option);
            });

            console.log('Добавлены вакансии:', vacancies); // Отображаем список вакансий в консоли
        }

        // Вызов функции для получения вакансий при загрузке страницы
        window.onload = () => {
            fetchVacanciesByOgrn(ogrn);
        };

        // Обработчик изменения значения в select
        selectElement.addEventListener('change', function() {
            const selectedUrl = this.value; // Получаем URL из value выбранного option
            if (selectedUrl) {
                window.open(selectedUrl, '_blank'); // Открываем ссылку в новой вкладке
            }
        });