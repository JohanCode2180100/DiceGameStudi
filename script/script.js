const startGame = document.querySelector("#startGame");
const active1 = document.querySelector(".active1");
const active2 = document.querySelector(".active2");
const rollDice = document.querySelector("#rollDice");
const img = document.querySelector(".dicePictures");
const victoryP1 = document.querySelector(".victoryplayer1");
const victoryP2 = document.querySelector(".victoryplayer1");
const hold = document.querySelector("#hold");

// Score round player
const currentScore_player1 = document.getElementById("currentScorePlayer1");
const currentScore_player2 = document.getElementById("currentScorePlayer2");
const roundScore_player1 = document.querySelector("#roundScore1");
const roundScore_player2 = document.querySelector("#roundScore2");
let gamePlaying = false;
let nb = 0;
let activePlayer;
let currentScore = 0;
let globalScore = 0;

let player1 = {
  currentScore: currentScore_player1,
  roundScore: roundScore_player1,
};
let player2 = {
  currentScore: currentScore_player2,
  roundScore: roundScore_player2,
};

const newGame = () => {
  gamePlaying = true;
  //choice start player
  nb = Math.floor(Math.random() * 2) + 1;
  alert(`Player ${nb} start the game ...`);
  if (nb === 1) {
    active1.style.visibility = "visible";
    active2.style.visibility = "hidden";
    activePlayer = player1;
  } else {
    active2.style.visibility = "visible";
    active1.style.visibility = "hidden";
    activePlayer = player2;
  }
  currentScore_player1.textContent = 0;
  currentScore_player2.textContent = 0;
  roundScore_player1.textContent = 0;
  roundScore_player2.textContent = 0;
  console.log(activePlayer); // check
};
console.log(gamePlaying);
let imgDisplay = (rand) => (img.src = `./assets/images/dice-${rand}.png`);
let rand = 0;
const toRollDice = () => {
  if (gamePlaying === true) {
    let rand = Math.floor(Math.random() * 6) + 1;
    imgDisplay(rand);
    if (rand >= 2) {
      currentScore += rand;
      activePlayer.currentScore.textContent = currentScore;
    } else {
      currentScore = 0;
      activePlayer.currentScore.textContent = currentScore;
      turnPlayer();
    }
  } else {
    alert("CLIQUER SUR NEW GAME POUR LANCER UNE PARTIE");
  }
};

const saveTheScore = () => {
  if (gamePlaying === true) {
    activePlayer.roundScore.textContent =
      currentScore + Number(activePlayer.roundScore.textContent);
    if (activePlayer.roundScore.textContent >= 100) {
      img.style.display = "none";
      activePlayer.roundScore.textContent = "WIN";

      gamePlaying = false;
    } else {
      turnPlayer();
    }
  }
};
//start New Game button
startGame.addEventListener("click", newGame);

rollDice.addEventListener("click", toRollDice);

hold.addEventListener("click", saveTheScore);

let turnPlayer = () => {
  currentScore = 0;
  if (activePlayer === player1) {
    activePlayer = player2;
    active2.style.visibility = "visible";
    active1.style.visibility = "hidden";
  } else {
    activePlayer = player1;
    active1.style.visibility = "visible";
    active2.style.visibility = "hidden";
  }
};
