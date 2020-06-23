// Biz Logic
function Player(currentRoll, turnScore, totalScore, isActive) {
  this.currentRoll = currentRoll;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.isActive = isActive;
}
Player.prototype.rollDice = function () {
  randomNumber = Math.floor((Math.random() * 6) + 1);
  this.currentRoll = randomNumber
  if (randomNumber === 1) {
    this.turnScore = 0
    this.currentRoll = 1
    activePlayer()
  } else { this.turnScore += randomNumber }
  return this.currentRoll;
};
Player.prototype.gameScore = function () {
  this.totalScore += this.turnScore
  if (this.totalScore >= 100) {
    alert("you win")
  } else {
    return this.totalScore
  };
};

Player.prototype.switchActive = function () {
  this.isActive = !this.isActive
}

function activePlayer() {
  if (player1.isActive === true && player2.isActive === false) {
    $(".btn-holdTwo").show();
    $(".btn-rollTwo").show();
    $(".btn-holdOne").hide();
    $(".btn-rollOne").hide();
    player1.switchActive()
    player2.switchActive()
  } else if (player2.isActive === true && player1.isActive === false) {
    $(".btn-holdOne").show();
    $(".btn-rollOne").show();
    $(".btn-holdTwo").hide();
    $(".btn-rollTwo").hide();
    player1.switchActive()
    player2.switchActive()
  }
}

let player1 = new Player(0, 0, 0, true);
let player2 = new Player(0, 0, 0, false);
let btnRollOne = document.querySelector('.btn-rollOne');
let btnHoldOne = document.querySelector('.btn-holdOne');
let btnRollTwo = document.querySelector('.btn-rollTwo');
let btnHoldTwo = document.querySelector('.btn-holdTwo');
$(document).ready(function () {
  $("#show-rules").click(function () {
    $("#rules").toggle();
  });
  $(".btn-holdOne").show();
  $(".btn-rollOne").show();
  $(".btn-holdTwo").hide();
  $(".btn-rollTwo").hide();
  $(".btn-rollOne").click(function (event) {
    event.preventDefault();
    player1.rollDice();
    $('.player-1-roll').text(player1.currentRoll)
    $('.player-1-turn-total').text(player1.turnScore)
  })
  $(".btn-holdOne").click(function (event) {
    event.preventDefault();
    player1.gameScore();
    activePlayer();
    player1.currentRoll = 0
    player1.turnScore = 0
    $('.player-1-game-score').text("Player One total score: " + player1.totalScore)
  })
  $(".btn-rollTwo").click(function (event) {
    event.preventDefault();
    player2.rollDice();
    $('.player-2-roll').text(player2.currentRoll)
    $('.player-2-turn-total').text(player2.turnScore)
  })
  $(".btn-holdTwo").click(function (event) {
    event.preventDefault();
    player2.gameScore();
    activePlayer();
    player2.currentRoll = 0
    player2.turnScore = 0
    $('.player-2-game-score').text("Player Two total score: " + player2.totalScore)
  });
});