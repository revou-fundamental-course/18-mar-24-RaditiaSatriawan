document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const banner = document.querySelector('.banner');
    const images = document.querySelectorAll('.banner img');
    const totalSlides = images.length;

    function autoSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlide();
    }

    function updateSlide() {
        const offset = -slideIndex * 100;
        banner.style.transform = `translateX(${offset}%)`;
    }

    setInterval(autoSlide, 3000); // Change slide every 3 seconds

    // Form validation
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Validate name
        const nameInput = document.getElementById('name');
        if (!nameInput.value.trim()) {
            alert('Please enter your name.');
            return;
        }

        // Validate email
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Form is valid, you can submit it here
        alert('Form submitted successfully!');
        form.reset(); // Reset the form after submission
    });
});
