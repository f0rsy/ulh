
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-wrapper img');
const totalSlides = slides.length;

// Show the current slide
function showSlide(index) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slideWidth = slides[0].clientWidth;
    sliderWrapper.style.transform = `translateX(${-index * slideWidth}px)`;
}

// Next Slide
document.querySelector('.next-slide').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

// Previous Slide
document.querySelector('.prev-slide').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

// Fullscreen Image Functionality
function openFullScreen(image) {
    const modal = document.getElementById("fullscreenModal");
    const modalImg = document.getElementById("fullscreenImage");
    modal.style.display = "flex";
    modalImg.src = image.src;
}

function closeFullScreen() {
    const modal = document.getElementById("fullscreenModal");
    modal.style.display = "none";
}