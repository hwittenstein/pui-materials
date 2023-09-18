// references to HTML elements
const guessSubmit = document.querySelector('.guessSubmit');
guessSubmit.addEventListener('click', checkGuess);

const guesses = document.querySelector('.guesses');
guesses.textContent = "Previous guesses: "; 


// variables for the game
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;


function checkGuess() {
    const userGuess = Number(guessField.value);
    console.log("TODO: check user guess! " + userGuess);
    console.log(`     (random number: ${randomNumber})`);

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        console.log("TODO: handle correct guess");
    } else if (guessCount >= 10) {
        console.log("TODO: handle game over");
    } else {
        console.log("TODO: handle guesses, display message if too low or too high.")
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}