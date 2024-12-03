const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');
const resultText = document.getElementById('resultText');
import { startConfetti, stopConfettiInner } from "./confetti.js";


//All the choices of the game
const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';
let playerScoreNuber = 0;
let computerScoreNumber = 0;


//CHeck Result, increase Scores, update resulttext
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = " It's a tie."
  } else {
    const choice = choices[playerChoice]
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = "You Won!"
      playerScoreNuber++;
      startConfetti();
      playerScoreEl.textContent = playerScoreNuber;
      startConfetti()
    } else {
      resultText.textContent = 'You Lost!';
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}

// Reset All selectd icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  })
  //Stop winning confeti
  stopConfettiInner();

};

//Game over function..reset evevything
function resetAll() {
  playerScoreNuber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNuber;
  computerScoreEl.textContent = computerScoreNumber;
  computerChoiceEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
  resetSelected();
}


//Random computer Choice
function computerRandoChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = 'rock'
  }
  else if (computerChoiceNumber <= 0.2) {
    computerChoice = 'paper'
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'scissors'
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = 'lizard'
  } else {
    computerChoice = 'spock '
  }

};



// Passing player selectino value and styling icons
function displayComputerChoice() {

  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' ---Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' ---Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' ---Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' ---Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' ---Spock';
      break;
    default:
      break;
  }
}


//Call functions to process  turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandoChoice();
  displayComputerChoice();
  updateScore(playerChoice)

}


// Passing player selectino value and styling icons
function select(playerChoice) {
  checkResult(playerChoice);
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' ---Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' ---Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' ---Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' ---Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' ---Spock';
      break;
    default:
      break;
  }
}

//Making it global
window.select = select;
window.resetAll = resetAll;

//on opening;
resetAll();

//////////////////////////////////////


