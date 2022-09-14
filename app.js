/* Imports */

/* State */

/* Actions */
function loadPage() {}

/* Components */
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const drawsDisplay = document.getElementById('draws-display');
//const totalDisplay = document.getElementById('games-total');

function displayScoreboard() {
    winsDisplay.textContent = userWins;
    lossesDisplay.textContent = userLosses;
    drawsDisplay.textContent = draws;
    //totalDisplay.textContent = total;
}

let userChoice;
let computerChoice;
let result;

let userWins = 0;
let userLosses = 0;
let draws = 0;
//let total = draws + userWins + userLosses;

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
        displayScoreboard();
        draws++;
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'Winner!';
        displayScoreboard();
        userWins++;
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = 'Loser!';
        displayScoreboard();
        userLosses++;
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'Loser!';
        displayScoreboard();
        userLosses++;
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = 'Winner!';
        displayScoreboard();
        userWins++;
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'Loser!';
        displayScoreboard();
        userLosses++;
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = 'Winner!';
        displayScoreboard();
        userWins++;
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
