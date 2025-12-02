/* =========================================================
   CARRUSELES
========================================================= */

document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    let index = 0;

    const updateSlide = () => {
        track.style.transform = `translateX(-${index * 100}%)`;
    };

    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');

    prevBtn.addEventListener('click', () => {
        index = (index === 0 ? slides.length - 1 : index - 1);
        updateSlide();
    });

    nextBtn.addEventListener('click', () => {
        index = (index === slides.length - 1 ? 0 : index + 1);
        updateSlide();
    });
});


/* =========================================================
   LIGHTBOX
========================================================= */

const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');

let currentImages = [];
let currentIndex = 0;

document.querySelectorAll('.zoom-img').forEach(img => {
    img.addEventListener('click', e => {
        const carousel = e.target.closest('.carousel');
        currentImages = Array.from(carousel.querySelectorAll('img'));
        currentIndex = currentImages.indexOf(e.target);

        lbImg.src = e.target.src;
        lightbox.style.display = 'flex';
    });
});

document.getElementById('lb-prev').onclick = () => {
    if (!currentImages.length) return;
    currentIndex = (currentIndex === 0 ? currentImages.length - 1 : currentIndex - 1);
    lbImg.src = currentImages[currentIndex].src;
};

document.getElementById('lb-next').onclick = () => {
    if (!currentImages.length) return;
    currentIndex = (currentIndex === currentImages.length - 1 ? 0 : currentIndex + 1);
    lbImg.src = currentImages[currentIndex].src;
};

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});


/* =========================================================
   FADE-IN AL HACER SCROLL (CORREGIDO)
========================================================= */

// 👇 ESTA LÍNEA ES LA CLAVE  
const fadeElements = document.querySelectorAll(
    '.project, .tech-section, .about-section'
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

fadeElements.forEach(el => observer.observe(el));
