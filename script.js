document.addEventListener('DOMContentLoaded', () => {

    // --- Hero Slider ---
    const slider = document.querySelector('.slider');
    if (slider) {
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const dotsContainer = document.querySelector('.slider-dots');

        let currentIndex = 0;
        let slideInterval;
        const slideDuration = 5000; // 5 seconds

        // Create dots
        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetInterval();
            });
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function updateActiveElements() {
            // Update active slide
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === currentIndex);
            });
            // Update active dot
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateActiveElements();
        }

        function nextSlide() {
            const newIndex = (currentIndex + 1) % slides.length;
            goToSlide(newIndex);
        }

        function prevSlide() {
            const newIndex = (currentIndex - 1 + slides.length) % slides.length;
            goToSlide(newIndex);
        }

        function startInterval() {
            slideInterval = setInterval(nextSlide, slideDuration);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        // Event listeners
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        // Initialize slider
        updateActiveElements();
        startInterval();
    }
    
    // --- Mobile Hamburger Menu (Simple Toggle) ---
    // NOTE: For a full implementation, the menu should be absolutely positioned.
    // This example just shows the toggle logic.
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            alert('Hamburger menu clicked! Implement your mobile navigation logic here.');
            // Example: navMenu.classList.toggle('show');
        });
    }

});