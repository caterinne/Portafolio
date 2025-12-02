/* ==========================
   CARRUSELES
========================== */

document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    let index = 0;

    const updateSlide = () => {
        track.style.transform = `translateX(-${index * 100}%)`;
    };

    carousel.querySelector('.prev').addEventListener('click', () => {
        index = (index === 0 ? slides.length - 1 : index - 1);
        updateSlide();
    });

    carousel.querySelector('.next').addEventListener('click', () => {
        index = (index === slides.length - 1 ? 0 : index + 1);
        updateSlide();
    });
});

/* ==========================
   LIGHTBOX
========================== */

const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
let currentImages = [];
let currentIndex = 0;

document.querySelectorAll('.zoom-img').forEach(img => {
    img.addEventListener('click', e => {

        // Todas las imágenes del carrusel al que pertenece
        currentImages = Array.from(
            e.target.closest('.carousel').querySelectorAll('img')
        );

        currentIndex = currentImages.indexOf(e.target);
        lbImg.src = e.target.src;
        lightbox.style.display = 'flex';
    });
});

// Navegación dentro del lightbox
document.getElementById('lb-prev').onclick = () => {
    currentIndex = (currentIndex === 0 ? currentImages.length - 1 : currentIndex - 1);
    lbImg.src = currentImages[currentIndex].src;
};

document.getElementById('lb-next').onclick = () => {
    currentIndex = (currentIndex === currentImages.length - 1 ? 0 : currentIndex + 1);
    lbImg.src = currentImages[currentIndex].src;
};

// Cerrar al hacer click fuera
lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.style.display = 'none';
});
