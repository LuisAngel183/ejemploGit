let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Función para mostrar la imagen según el índice
function showImage(index) {
    const offset = -index * 100; // Mover las imágenes en porcentaje (-100 para cada imagen)
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Ir a la siguiente imagen
function goToNext() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

// Ir a la imagen anterior
function goToPrev() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

nextButton.addEventListener('click', goToNext);
prevButton.addEventListener('click', goToPrev);

// Auto slide cada 3 segundos (opcional)
setInterval(goToNext, 3000);
