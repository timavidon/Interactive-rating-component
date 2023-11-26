const ratingCard = document.querySelector('.rating-card');
const thanksCard = document.querySelector('.thank-you-card');
const submitBtn = document.querySelector('.submit-btn');
const userRating = document.querySelector('.user-rating');

// Get all the rating numbers (1-5)
const ratingNumbers = document.querySelectorAll('.rating-btn');

// Wait for the user to choose a number
ratingNumbers.forEach((ratingNum) => {
    ratingNum.addEventListener('click', () => {
        let chosenRating = 0;
        chosenRating = ratingNum.innerHTML;
        userRating.innerHTML = `${chosenRating}`;
    });
});

submitBtn.addEventListener('click', () => {
    ratingCard.classList.toggle('hidden');
    thanksCard.classList.toggle('hidden');
});

// for (let i = 0; i < ratingNumbers.length; i++) {
//     ratingNumbers[i].addEventListener('click', () => {
//         const chosenNumber = ratingNumbers[i].innerHTML;
//         document.querySelector('.selected-rating').innerHTML = `You selected ${chosenNumber} out of 5`;
//     });
// }