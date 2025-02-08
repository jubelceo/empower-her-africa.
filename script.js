// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Slider Logic
let currentSlide = 0;
const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dots');

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
    document.querySelectorAll('.slider-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Initialize Slider Dots
Array.from({ length: slider.children.length }).forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'slider-dot';
    dot.addEventListener('click', () => { currentSlide = i; updateSlider(); });
    dotsContainer.appendChild(dot);
});

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slider.children.length - 1;
    updateSlider();
});

document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide < slider.children.length - 1) ? currentSlide + 1 : 0;
    updateSlider();
});

// Modal Logic
const modal = document.getElementById('auth-modal');
document.getElementById('login-btn').addEventListener('click', () => modal.style.display = 'block');
document.querySelector('.close').addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

// Search Functionality
window.searchSite = () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    document.querySelectorAll('section').forEach(section => {
        if (section.textContent.toLowerCase().includes(query)) section.scrollIntoView({ behavior: 'smooth' });
    });
};

// Video Controls
window.playVideo = () => document.getElementById('youtubeVideo').src += "&autoplay=1";
window.pauseVideo = () => document.getElementById('youtubeVideo').src = document.getElementById('youtubeVideo').src.replace("&autoplay=1", "");
window.halfSize = () => { const v = document.getElementById('youtubeVideo'); v.width = 450; v.height = 253; };
window.normalSize = () => { const v = document.getElementById('youtubeVideo'); v.width = 900; v.height = 506; };