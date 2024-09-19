document.getElementById('openIn').addEventListener('change', function () {
    var selectedIzesh = this.value;

    // Скрыть все блоки с документами
    var allYIzvesh = document.querySelectorAll('.izveshchenie1, .izveshchenie2, .izveshchenie3, .izveshchenie4, .izveshchenie5, .izveshchenie6, .izveshchenie7, .izveshchenie8, .izveshchenie9, .izveshchenie10, .izveshchenie11, .izveshchenie12, .izveshchenie13, .izveshchenie14, .izveshchenie15, .izveshchenie16, .izveshchenie17, .izveshchenie18, .izveshchenie19, .izveshchenie20');
    allYIzvesh.forEach(function (Izvesh) {
        Izvesh.style.display = 'none';
    });

    // Показать выбранный блок с документами
    if (selectedIzesh) {
        var selectedElement = document.querySelector('.' + selectedIzesh);
        if (selectedElement) {
            selectedElement.style.display = 'block';
        }
    }
});