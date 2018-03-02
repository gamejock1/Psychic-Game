const alpha = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
var losses = 0;
var guessDownCounter = 10;
var guessArray = [];
var computerGuess = "";
var guessArrayText = "";

function newTurn(computerGuess) {
  document.onkeyup = function(pressed) {
    var userGuess = pressed.key;
    if (alphaChecker(userGuess) === true) {
      document.getElementById('reset').disabled = false;
      guessesMatchCheck(computerGuess, userGuess);
    }
  };
}

function updateDisplayStats() {
  document.getElementById('wins').innerText = wins;
  document.getElementById('losses').innerText = losses;
  document.getElementById('guessDownCounter').innerText = guessDownCounter;
  var guessArrayText = guessArray.join(", ");
  document.getElementById('guessArray').innerText = guessArrayText;
}

function reset() {
  if (confirm("Clicking 'ok' will reset the entire game.  Are you sure you wish to continue?") === true) {
    document.getElementById('reset').disabled = true;
    document.getElementById('start').disabled = false;
    document.getElementById('wins').innerText = "";
    document.getElementById('losses').innerText = "";
    document.getElementById('guessDownCounter').innerText = "";
    document.getElementById('guessArray').innerText = "";
    wins = 0;
    losses = 0;
    guesssArray = [];
    guessArrayText = "";
    guessDownCounter = 10;
  }
}

function newGame() {
  document.getElementById('start').disabled = true;
  updateDisplayStats();
  newRound();
}

function newRound() {
  guessDownCounter = 10;
  guessArray = [];
  updateDisplayStats();
  computerGuess = computerLetterSelect();
  newTurn(computerGuess);
}

function computerLetterSelect() {
  computerGuess = alpha.charAt(Math.floor(Math.random() * alpha.length));
  // console.log("computer selects:", computerGuess);
  return computerGuess;
}

function guessesMatchCheck(computerGuess, userGuess) {
  if (userGuess === computerGuess) {
    wins++;
    newRound();
  }
  else {
    noMatch(computerGuess, userGuess);
  }
}

function noMatch(computerGuess, userGuess) {
  guessDownCounter--;
  if(guessDownCounter === 0) {
    losses++;
    newRound();
  }
  else {
    guessArray.push(userGuess);
    updateDisplayStats();
    newTurn(computerGuess);
  }
}

function alphaChecker(x) {
  x = x.toLowerCase();
  if(alpha.indexOf(x) === -1) {
    return false;
  }
  else {
    return true;
  }
}
