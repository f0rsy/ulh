document.querySelectorAll('.card .icon').forEach(icon => {
    const defaultIcon = icon.src;
    const hoverIcon = icon.dataset.hoverIcon;

    icon.closest('.card').addEventListener('mouseenter', () => {
        icon.src = hoverIcon;
    });
    icon.closest('.card').addEventListener('mouseleave', () => {
        icon.src = defaultIcon;
    });
});
document.querySelectorAll('.card .iconLong').forEach(iconLong => {
    const defaultIcon = iconLong.src;
    const hoverIcon = iconLong.dataset.hoverIcon;

    iconLong.closest('.card').addEventListener('mouseenter', () => {
        iconLong.src = hoverIcon;
    });
    iconLong.closest('.card').addEventListener('mouseleave', () => {
        iconLong.src = defaultIcon;
    });
});