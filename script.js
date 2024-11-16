let slideIndex = 0;

// Function to move to the next/previous slide
function moveSlide(direction) {
    slideIndex += direction;

    const slides = document.querySelectorAll('.slide');
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Wrap around to the last slide
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Wrap around to the first slide
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Autoplay the slider every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000); // Change the interval time as per preference
