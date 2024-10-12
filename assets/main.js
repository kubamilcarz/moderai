const scrollContainer = document.querySelector('.scroll-content');
const scrollWrapper = document.querySelector('.scroll-container'); // Container for hover event

let scrollAmount = 0;
let scrollSpeed = 0.8; // Default speed

// Function to scroll content continuously
function continuousScroll() {
    scrollAmount += scrollSpeed;
    scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;

    // If the scroll exceeds the width of the first element, reset
    if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0; // Reset to start
    }

    requestAnimationFrame(continuousScroll);
}

// Clone the content to create a seamless scroll effect
const cloneContent = scrollContainer.innerHTML;
scrollContainer.innerHTML += cloneContent; // Duplicate content

// Start scrolling
continuousScroll();

// Add hover effect to slow down the scroll
scrollWrapper.addEventListener('mouseenter', () => {
    scrollSpeed = 0.3; // Slow down speed on hover
});

scrollWrapper.addEventListener('mouseleave', () => {
    scrollSpeed = 0.8; // Return to normal speed when hover ends
});