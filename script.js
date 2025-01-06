const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

// Function to update the carousel position
const updateCarousel = () => {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // Fixed syntax with backticks
};

// Show next image
const showNextImage = () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop to the first image after the last
    updateCarousel();
};

// Show previous image
const showPrevImage = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image before the first
    updateCarousel();
};

// Event listeners for buttons
nextButton.addEventListener("click", showNextImage);
prevButton.addEventListener("click", showPrevImage);

// Optional: Auto-slide functionality
setInterval(showNextImage, 3000); // Change images every 3 seconds


// toggle

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// fire base

