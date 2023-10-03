

// Get all the rating numbers (1-5)
const ratingNumbers = document.querySelectorAll('.rating-btn');

// Wait for the user to choose a number
for (let i = 0; i < ratingNumbers.length; i++) {
    ratingNumbers[i].addEventListener('click', () => {
        const chosenNumber = ratingNumbers[i].innerHTML;
        // console.log(chosenNumber);
        document.querySelector('.selected-rating').innerHTML = `You selected ${chosenNumber} out of 5`;
    });
}
