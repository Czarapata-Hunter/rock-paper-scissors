/* Imports */

/* State */

/* Actions */
function loadPage() {}

/* Components */
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
    possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        playerChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult();
    })
);

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if (randomNumber === 1) {
        computerChoice = 'Rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Draw!';
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'Winner!';
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = 'Loser!';
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'Loser!';
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = 'Winner!';
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'Loser!';
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rocok') {
        result = 'Winner!';
    }
    resultDisplay.innerHTML = result;
}
/* Component */
// get DOM
// display
// event listeners

/* Run page load code */
loadPage();
