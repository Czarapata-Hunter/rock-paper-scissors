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

possibleChoices.forEach((possibleChoice) =>
    possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        playerChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
    })
);

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    console.log(randomNumber);
}
/* Component */
// get DOM
// display
// event listeners

/* Run page load code */
loadPage();
