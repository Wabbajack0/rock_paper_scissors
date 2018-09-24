let pcPick;
let playerPick;
let pcScore;
let playerScore;
const BEST_OF = 5;
const TIMEOUT = 800;

const announcer = document.querySelector('.announcer');
const start = document.querySelector('#start');
const buttons = document.querySelectorAll('div button');
const pcScoreElement = document.querySelector('#pc-score');
const playerScoreElement = document.querySelector('#player-score');

newGame();

function newGame() {
  announcer.textContent = 'To play a new game, press START (best of ' +
    BEST_OF + ')';
  start.textContent = 'START';
  start.removeEventListener('click', newGame);
  start.addEventListener('click', startGame);
  pcPick = 0;
  playerPick = 0;
  playerScore = 0;
  pcScore = 0;
  playerScoreElement.textContent = playerScore;
  pcScoreElement.textContent = pcScore;
}

function startGame() {
  start.textContent = 'RESET';
  start.removeEventListener('click', startGame);
  start.addEventListener('click', newGame);
  announcer.textContent = 'Choose one between rock, paper or scissors';
  askPick();
}

function askPick() {
  if (playerScore == BEST_OF || pcScore == BEST_OF) {
    showWhoWon();
    start.textContent = 'PLAY AGAIN';
    return;
  }
  buttons.forEach(button => {
    button.addEventListener('click', actualGame);
  });
}

function actualGame(e) {
  playerPick = e.target.name;
  announcer.textContent = 'Pick saved, PC is now picking...';
  setTimeout(showPick, TIMEOUT);
  setTimeout(removeButtonsListeners, 2 * TIMEOUT);
  setTimeout(askAgain, 3 * TIMEOUT);
}

function showPick() {
  pcPick = randomPick();
  announcer.textContent = 'PC picked ' + pcPick + '!';
  addScore(playerPick, pcPick);
  playerScoreElement.textContent = playerScore;
  pcScoreElement.textContent = pcScore;
}

function showWhoWon() {
  if (playerScore == BEST_OF) {
    announcer.textContent = "You Won! Lets play again!";
  } else if (pcScore == BEST_OF) {
    announcer.textContent = "You Lost! Lets try again!";
  } else {
    announcer.textContent = "Something went wrong";
  }
}

function removeButtonsListeners() {
  buttons.forEach(button => {
    button.removeEventListener('click', actualGame);
  });
}

function askAgain() {
  announcer.textContent = 'Choose one between rock, paper or scissors';
  askPick();
}

function randomPick() {
  let ranNum = Math.random();
  if (ranNum < 0.333) {
    return "rock";
  } else if (ranNum < 0.666) {
    return "paper";
  } else {
    return "scissors";
  }
}

function addScore(player, pc) {
  switch (player) {
    case "rock":
      switch (pc) {
        case "rock":
          break;
        case "paper":
          pcScore++;
          break;
        case "scissors":
          playerScore++;
          break;
      }
      break;
    case "paper":
      switch (pc) {
        case "rock":
          playerScore++;
          break;
        case "paper":
          break;
        case "scissors":
          pcScore++;
          break;
      }
      break;
    case "scissors":
      switch (pc) {
        case "rock":
          pcScore++;
          break;
        case "paper":
          playerScore++;
          break;
        case "scissors":
          break;
      }
      break;
    default:
  }

}