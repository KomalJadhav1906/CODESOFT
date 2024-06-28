const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function flipSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = index === currentIndex ? 'rotateY(180deg)' : 'rotateY(0deg)';
    });
    currentIndex = (currentIndex + 1) % slides.length;
}

setInterval(flipSlides, 2000); // Adjust the interval as needed
