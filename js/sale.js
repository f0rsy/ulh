function filterCards(category) {
    const items = document.querySelectorAll('.realizItem');

    if (category === 'all') {
        items.forEach(item => {
            item.style.display = 'flex';
        });
    } else {
        items.forEach(item => {
            if (item.getAttribute('data-category') === category) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }
}
document.querySelectorAll('.spec').forEach(button => {
    button.addEventListener('click', function () {
        const category = this.getAttribute('data-category');
        filterCards(category);
    });
});