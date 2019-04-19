// create an array of charaters for user to guess
// found a way to split a string into an array of sub-strings
const letterChoice = "abcdefghijklmnopqrstuvwxyz".split("");

// define keeping score variables
let wins = 0;
let losses = 0;
let guessLeft = 10;
const guessSoFar = [];

// variables for displaying to DOM
const winsText = document.getElementById("wins-text");
const lossText = document.getElementById("loss-text");
const glText = document.getElementById("gl-text");
const gsfText = document.getElementById("gsf-text");
const alreadyGuessed = "You already gueassed that letter!";
const wrongGuess = "Try again!";
const rightGuess = "You won!";
const outOfGuesses = "You lost!";

// Randomly chooses a choice from the options array. This is the Computer's guess.
let magicLetter = letterChoice[Math.floor(Math.random() * letterChoice.length)];

// alert user to press a key
// alert("Press a key from a-z to play game");

// clear guesses so far function
function clearArray() {
  //empty your array
  guessSoFar.length = 0;
}
// generates new letter
function generateNewLettter() {
  magicLetter = letterChoice[Math.floor(Math.random() * letterChoice.length)];
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.
  const userGuess = event.key;
  const repeatGuess = guessSoFar.includes(userGuess);
  const validGuess = letterChoice.includes(userGuess);

  // logic
  if (guessLeft > 0 && userGuess === magicLetter) {
    wins++;
    guessLeft = 10;
    clearArray();
    generateNewLettter();
    document.querySelector("#message").textContent = rightGuess;
  } else if (guessLeft > 0 && repeatGuess === false && validGuess === true) {
    guessLeft--;
    guessSoFar.push(userGuess);
    document.querySelector("#message").textContent = wrongGuess;
  } else if (guessLeft === 0) {
    losses++;
    guessLeft = 10;
    clearArray();
    generateNewLettter();
    document.querySelector("#message").textContent = outOfGuesses;
  }
// Display the user and computer guesses, and wins/losses/ties.
function render() {
    const html = `
              <p>Wins: ${wins}</p>
              <p>Losses: ${losses}</p>
              <p>Guesses Remaining: ${guessLeft}</p>
              <p>Letters Guessed: ${guessSoFar}</p>
              
          `;
    document.querySelector("#game").innerHTML = html;
  }
  render();

//   logging
  console.log(letterChoice);
  console.log("this is magicLetter " + magicLetter);
  console.log("this is userGuess " + userGuess);
  console.log("this is repeatGuess " + repeatGuess);
  console.log("this is invalidGuess " + validGuess);
  console.log("this is guessSoFar " + guessSoFar);
  console.log("this is guessLeft " + guessLeft);
  console.log("this is wins " + wins);
  console.log("this is losses " + losses);

  // end
};
