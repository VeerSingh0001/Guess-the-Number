"use strict";
const displayNumber = (num) =>
  (document.querySelector(".number").textContent = num); //display random generated number.

const displayMessage = (msg) =>
  (document.querySelector(".message").textContent = msg); //display message according to input.

const displayScore = (scr) =>
  (document.querySelector(".score").textContent = scr); //display score while guessing.

const secrateNum = function () {
  let secrtNm = Math.trunc(Math.random() * 50) + 1; //For calulating random number.
  return secrtNm;
};
function checkNumber() {
  const guessedNumber = Number(document.querySelector(".guess").value);
  //function triggred on click on "Check" button.
  if (score > 1) {
    //check score and procced
    if (!guessedNumber || guessedNumber > 50) {
      //check input number is empty or not between given limit. Watch limit at <p> tag with "between" class in HTML file.
      displayMessage("Please enter a number between 1 to 50");
    } else {
      if (guessedNumber == secratNumber) {
        //if input number is equal to random number
        document.querySelector("body").style.backgroundColor = "rgb(66 95 255)";
        document.querySelector(".number").style.width = "30rem";
        displayNumber(secratNumber);
        displayMessage("🎉 Correct Number!!");
        if (score > highScore) {
          //set high score.
          highScore = document.querySelector(".highscore").textContent = score;
        }
        document
          .querySelector(".check")
          .removeEventListener("click", checkNumber); //To remove event listner from 'Check' button.
        document.querySelector(".guess").disabled = true;
      } else {
        //if input number is not equal to random number.
        document.querySelector(".message").textContent =
          guessedNumber < secratNumber ? "📉 Too Low" : "📈 Too High";
        displayMessage(
          guessedNumber < secratNumber ? "📉 Too Low" : "📈 Too High"
        ); //Check that number is either lower or greater than secrateNumber.
        score--;
        displayScore(score);
      }
    }
  } else {
    // if user lose game and score become 0.
    displayMessage("🛑 You lose the game!!");
    displayScore(0);
    document.querySelector("body").style.backgroundColor = "#b53232";
  }
}

function againTry() {
  //Function triggred on click on "Again" button.
  displayNumber("?");
  displayMessage("Start guessing...");
  score = 20;
  displayScore(score);
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  secratNumber = secrateNum();
  document.querySelector(".guess").disabled = false;
  document.querySelector(".check").addEventListener("click", checkNumber);
}

let secratNumber = secrateNum();
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", checkNumber); //Event triggred at click on "Check" button.

document.querySelector(".again").addEventListener("click", againTry); //Event triggred at click on "Again" button.
