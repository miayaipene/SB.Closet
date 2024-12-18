let currentSlides = [0, 0, 0]; // Array para rastrear el índice de cada slider
const slideContainers = document.querySelectorAll('.slide-container');

function showSlide(sliderIndex, index) {
    const slides = slideContainers[sliderIndex].querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide(sliderIndex) {
    const slides = slideContainers[sliderIndex].querySelectorAll('.slide');
    currentSlides[sliderIndex] = (currentSlides[sliderIndex] + 1) % slides.length;
    showSlide(sliderIndex, currentSlides[sliderIndex]);
}

function prevSlide(sliderIndex) {
    const slides = slideContainers[sliderIndex].querySelectorAll('.slide');
    currentSlides[sliderIndex] = (currentSlides[sliderIndex] - 1 + slides.length) % slides.length;
    showSlide(sliderIndex, currentSlides[sliderIndex]);
}

// Inicializa los sliders
slideContainers.forEach((_, index) => showSlide(index, currentSlides[index]));