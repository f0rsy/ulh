document.getElementById('openInfo').addEventListener('change', function () {
    var selectedYear = this.value;

    // Скрыть все блоки с документами
    var allYears = document.querySelectorAll('.year2024, .year2023, .year2022, .year2021, .year2020, .year2019, .year2018, .year2017, .year2016, .year2015');
    allYears.forEach(function (year) {
        year.style.display = 'none';
    });

    // Показать выбранный блок с документами
    if (selectedYear) {
        document.querySelector('.' + selectedYear).style.display = 'block';
    }
});

document.getElementById('openInf').addEventListener('change', function() {
    var selectedValue = this.value;

    var allDocs = document.querySelectorAll('.docsOkazStrahImu, .docsCredit, .kreditLine5live');
    allDocs.forEach(function(doc) {
        doc.style.display = 'none';
    });

    if (selectedValue) {
        var selectedDocs = document.querySelector('.' + selectedValue);
        if (selectedDocs) {
            selectedDocs.style.display = 'block';
        }
    }
});