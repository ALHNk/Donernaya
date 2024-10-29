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


document.addEventListener('DOMContentLoaded', () => {
    starsRatings();
});


