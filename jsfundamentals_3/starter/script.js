'use strict';


//Original
// const number = document.querySelector('.number');
// const submitButton = document.querySelector('.check');
// const message = document.querySelector('.message');
// const highScore = (document.querySelector('.highscore'));
// const body = document.querySelector('body');
// const again = document.querySelector('.again');
// let score = (document.querySelector('.score'));

// let randomNumber;
// let currentScore = 20;
// let gameHighestScore = 0;

// function generateRandomSecretNumber() {
//     const numberGuess = Math.trunc(Math.random() * 20) + 1;
//     return numberGuess;
// }
// randomNumber = generateRandomSecretNumber();
// console.log(randomNumber);

// function guessNumber() {
//     const inputGuess = Number(document.querySelector('.guess').value);
//     console.log(typeof inputGuess);

//     if (!inputGuess) { //if zero is true or inputGuess === 0; 
//         // Zero is a falsy value, when a falsy value is negated using the "NOT" operator it becomes true.
//         message.textContent = "⚠️🚫No number inputed";
//     } else if (inputGuess === randomNumber) {
//         message.innerHTML = '🎉 Correct number!'
//         number.innerHTML = randomNumber;
//         body.style.backgroundColor = "#60b347";

//         if (currentScore > gameHighestScore) {
//             gameHighestScore = currentScore;
//             highScore.textContent = gameHighestScore;
//         }
//     }
//     else if (inputGuess < randomNumber) {
//         if (currentScore > 0) {
//             message.innerHTML = 'Guess is too low'
//             currentScore--;
//             score.textContent = currentScore;
//         } else {
//             message.innerHTML = '😒You lose. Game Over';
//         }
//     } else if (inputGuess > randomNumber) {
//         if (currentScore > 0) {
//             message.innerHTML = 'Guess is too high'
//             currentScore--;
//             score.textContent = currentScore;
//         } else {
//             message.innerHTML = '😒You lose. Game Over';
//         }
//     }
// }
// submitButton.addEventListener('click', guessNumber);

// function resetGame() {
//     const guess = Number(document.querySelector('.guess').value = '');

//     message.innerHTML = 'Start guessing...'
//     number.innerHTML = '?';
//     currentScore = 20;
//     score.textContent = currentScore;
//     body.style.backgroundColor = "#222";

//     randomNumber = generateRandomSecretNumber();
//     console.log(randomNumber);
// }
// again.addEventListener('click', resetGame);

/*======CODE REFACTOR======*/
//Code refactor 

const number = document.querySelector('.number');
const submitButton = document.querySelector('.check');
const message = document.querySelector('.message');
const highScore = (document.querySelector('.highscore'));
const body = document.querySelector('body');
const again = document.querySelector('.again');
let score = (document.querySelector('.score'));

let randomNumber;
let currentScore = 20;
let gameHighestScore = 0;

function generateRandomSecretNumber() {
    const numberGuess = Math.trunc(Math.random() * 20) + 1;
    return numberGuess;
}
randomNumber = generateRandomSecretNumber();
console.log(randomNumber);

function guessNumber() {
    const inputGuess = Number(document.querySelector('.guess').value);
    console.log(typeof inputGuess);

    if (!inputGuess) { //if zero is true or inputGuess === 0; 
        // Zero is a falsy value, when a falsy value is negated using the "NOT" operator it becomes true.
        displayHint("⚠️🚫No number inputed");

    } else if (inputGuess === randomNumber) {
        displayHint('🎉 Correct number!');
        number.innerHTML = randomNumber;
        body.style.backgroundColor = "#60b347";

        if (currentScore > gameHighestScore) {
            gameHighestScore = currentScore;
            highScore.textContent = gameHighestScore;
        }
        //when guess is wrong
    } else if (inputGuess !== randomNumber) {
        if (currentScore > 0) {
            displayHint(inputGuess < randomNumber ? 'Guess is too low' : 'Guess is too high');
            currentScore--;
            score.textContent = currentScore;
        } else {
            displayHint('😒You lose. Game Over');
        }
    }
}
submitButton.addEventListener('click', guessNumber);

function displayHint(mssg) {
    message.innerHTML = mssg;
}

function resetGame() {
    const guess = Number(document.querySelector('.guess').value = '');

    displayHint('Start guessing...');
    number.innerHTML = '?';
    currentScore = 20;
    score.textContent = currentScore;
    body.style.backgroundColor = "#222";

    randomNumber = generateRandomSecretNumber();
    console.log(randomNumber);
}
again.addEventListener('click', resetGame);

