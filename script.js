document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');

            // Remove 'selected' and 'bounce' classes from all stars
            stars.forEach(s => s.classList.remove('selected', 'bounce'));

            // Add 'selected' class to all stars up to the clicked one
            for (let i = 0; i < value; i++) {
                stars[4 - i].classList.add('selected');
            }

            // Add bounce animation in sequence
            for (let i = 0; i < value; i++) {
                setTimeout(() => {
                    stars[4 - i].classList.add('bounce');
                }, i * 100); // Adjust timing as needed
            }
        });
    });
});
