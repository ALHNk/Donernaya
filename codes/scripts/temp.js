function starsRatings() {
    const stars = document.querySelectorAll('.star');
    const ratingMessage = document.getElementById('selected-rating');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-rating');
            stars.forEach(s => s.classList.remove('selected'));
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('selected');
            }
            ratingMessage.textContent = rating;
        });
    });
}

function dynamicMessageScript() {
    const messageElement = document.getElementById('message');
    const buttonElement = document.getElementById('update-message-btn');

    buttonElement.addEventListener('click', () => {
        messageElement.textContent = 'Enjoy your meal and review your experience!';
    });
}

// Call the functions after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    starsRatings();
    dynamicMessageScript();
});


