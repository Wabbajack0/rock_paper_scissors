let pcPick;
let playerPick;
let pcScore;
let playerScore;
newGame();

function newGame() {
  alert("Let's play a new game!");
  pcPick = 0;
  playerPick = 0;
  playerScore = 0;
  pcScore = 0;
  for (var i = 1; i <= 5; i++) {
    playerPick = askPick();
    alert("Pick saved, PC now is picking...");
    pcPick = randomPick();
    alert("PC picked " + pcPick + "!");
    addScore(playerPick, pcPick);
    alert("Score is now:\n" +
      "Player: " + playerScore + "\n" +
      "PC: " + pcScore + "\n" +
      "Game " + i + "/5");
  }
  if (playerScore > pcScore) {
    alert("You Won! Lets play again!");
  } else if (playerScore < pcScore) {
    alert("You Lost! Lets try again!");
  } else {
    alert("It's a draw! Lets play again!");
  }
  newGame();
}

function askPick() {
  let pick = prompt("Choose one between rock paper or scissors");
  if (pick != "rock" && pick != "paper" && pick != "scissors") {
    alert(pick + "is not a valid pick, try again");
    newGame();
  }
  return pick;
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
  }

}