document.getElementById('baseSelector').addEventListener('change', function() {
    var value = this.value;

    // Ссылка на блок характеристик
    var characteristicsBlock = document.querySelector('.characteristicsBlock');

    // Скрываем блок по умолчанию
    characteristicsBlock.style.display = 'none';

    // Показываем блок, если выбрана соответствующая опция
    if (value === "characteristics") {
        characteristicsBlock.style.display = 'block';
    } else {
        characteristicsBlock.style.display = 'none';
    }
});