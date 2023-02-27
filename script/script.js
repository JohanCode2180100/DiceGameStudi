// import domElement
import {
  startGame,
  active1,
  active2,
  rollDice,
  img,
  hold,
  currentScore_player1,
  currentScore_player2,
  roundScore_player1,
  roundScore_player2,
} from "./domElement.js";

let gamePlaying = false;
let nb = 0;
let activePlayer;
let currentScore = 0;

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
  // point player
  if (nb === 1) {
    active1.style.visibility = "visible";
    active2.style.visibility = "hidden";
    activePlayer = player1;
  } else {
    active2.style.visibility = "visible";
    active1.style.visibility = "hidden";
    activePlayer = player2;
  }
  // init score for all players
  currentScore_player1.textContent = 0;
  currentScore_player2.textContent = 0;
  roundScore_player1.textContent = 0;
  roundScore_player2.textContent = 0;
};

let interval;
// dice display and interval display dice
let imgDisplay = (rand) => {
  // display dice 0.75s
  interval = setInterval(function () {
    img.src = `./assets/images/dice-0.png`;
  }, 750);
  img.src = `./assets/images/dice-${rand}.png`;
};

//let imgDisplay = (img.src = `./assets/images/dice-0.png`);

const toRollDice = () => {
  if (gamePlaying === true) {
    //clear dice display on click
    clearInterval(interval);
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
//save the activePlayer currentScore
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

//roll the dice
rollDice.addEventListener("click", toRollDice);

//save the score
hold.addEventListener("click", saveTheScore);

//next player and display point player
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
