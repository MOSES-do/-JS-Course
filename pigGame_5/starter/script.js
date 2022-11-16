'use strict';


//Selecting Elements
let player = document.querySelectorAll('.player');
let score = document.querySelectorAll('.score');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

//Holds the value of each individual current score accumulated
const scores = [0, 0];
//Holds the value of each individuals current score accumulation
let currentScore = 0;
//Dynamically select both players
let activePlayer = 0;
//Game state management
let playing = true;


//3
function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    //If active player is 0, it becomes 1 and if 1 it becomes 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    console.log(activePlayer);
    //Since a common name is available on both elements we can selectAll to access their node state.
    playerToggle('active');
    // player0El.classList.toggle('player--active');
    // player1El.classList.toggle('player--active');
}


function playerToggle(param) {
    for (let i = 0; i < player.length; i++) {
        player[i].classList.toggle(`player--${param}`);
    }


}

//2
function getScore() {
    //Writes accumualated score to the player's score
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore || 0 if scores[0]
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
}


//1 Rolling dice functinality
btnRoll.addEventListener('click', function () {
    if (playing) {
        //1. Generate random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        //2. Display the dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        //3. Check for rolled 1. 
        if (dice !== 1) {
            //Add dice to curent score
            currentScore += dice;

            document.getElementById(`current--${activePlayer}`).textContent = currentScore;// this is how to dynamically select both players as the game ensues underneath only sets it ona single player
            console.log((`current--${activePlayer}`));
            // current0El.textContent = currentScore; //CHANGE LATER
        } else {
            // if true switch to next player
            //switch classes between both players
            getScore();

            winner();
        }
    }


});

//5
function winner() {
    if (scores[activePlayer] >= 30) {
        playing = false;
        diceEl.classList.add("hidden");
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
        //3. Switch to the next player
        switchPlayer();
    }
}

//4
btnHold.addEventListener('click', function () {
    if (playing) {
        //1. Add current score to active player's score
        getScore();

        //2. Check if player's score is >=100
        //   Finish the game
        winner();
    }

})




