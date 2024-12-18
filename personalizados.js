let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');

    // Eliminar la clase 'active' de la imagen actual
    slides[currentIndex].classList.remove('active');

    // Calcular el nuevo índice
    currentIndex = (currentIndex + direction + slides.length) % slides.length;

    // Añadir la clase 'active' a la nueva imagen
    slides[currentIndex].classList.add('active');
}

// Asegúrate de que la primera imagen esté activa al cargar
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    slides[currentIndex].classList.add('active');
});
