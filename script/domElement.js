//start game
const startGame = document.querySelector("#startGame");

//display player
const active1 = document.querySelector(".active1");
const active2 = document.querySelector(".active2");

//rollTheDice
const rollDice = document.querySelector("#rollDice");

//display Dice
const img = document.querySelector(".dicePictures");

// save the current score
const hold = document.querySelector("#hold");

// currentScorePlayer
const currentScore_player1 = document.querySelector("#currentScorePlayer1");
const currentScore_player2 = document.querySelector("#currentScorePlayer2");
//roundScorePlayer
const roundScore_player1 = document.querySelector("#roundScore1");
const roundScore_player2 = document.querySelector("#roundScore2");

export {
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
};
