/* Imports */

/* State */

/* Actions */
function loadPage() {}

/* Components */
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button.choice');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const drawsDisplay = document.getElementById('draws-display');
const playAgainButton = document.getElementById('play-again-button');
const gamesDisplay = document.getElementById('games-display');

function displayScoreboard() {
    winsDisplay.textContent = userWins;
    lossesDisplay.textContent = userLosses;
    drawsDisplay.textContent = draws;
    gamesDisplay.textContent = total;
}

let userChoice;
let computerChoice;
let result;

let userWins = 0;
let userLosses = 0;
let draws = 0;
let total = draws + userWins + userLosses;

possibleChoices.forEach((possibleChoice) =>
    possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        playerChoiceDisplay.textContent = userChoice;
        console.log(userChoice);
        generateComputerChoice();
        getResult();
    })
);

function generateComputerChoice() {
    const randomNumber = Math.ceil(Math.random() * possibleChoices.length);

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
        draws++;
        displayScoreboard();
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'Winner!';
        userWins++;
        displayScoreboard();
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = 'Loser!';
        userLosses++;
        displayScoreboard();
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'Loser!';
        userLosses++;
        displayScoreboard();
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = 'Winner!';
        userWins++;
        displayScoreboard();
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'Loser!';
        userLosses++;
        displayScoreboard();
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = 'Winner!';
        userWins++;
        displayScoreboard();
    }
    resultDisplay.innerHTML = result;
}

// Scoreboard
/*const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const drawsDisplay = document.getElementById('draws-display'); */

/*function displayScoreboard() {
    winsDisplay.textContent = 
    lossesDisplay.textContent = 
    drawsDisplay.textContent = 
}*/
/* Component */
// get DOM
// display
// event listeners

/* Run page load code */
loadPage();
