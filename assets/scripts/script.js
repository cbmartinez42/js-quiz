//  declare variables
let win = []; 
let lose = [];
// let timerCount = timer;
let startButton = document.querySelector(".start-button");
let rightAnswer = 0;
let wrongAnswer = 0;
let timer = "--";
let correctAnswer = "";

// quiz pool of questions
const quizQuestions = [
    new question("What is a function?", ["A job you must go to every day", "A block of code designed to perform a particular task", "Something done in the bathroom","A rare breed of dog"], "A block of code designed to perform a particular task"),
    new question("Where is JavaScript run?", ["On your desktop","In the bathroom", "In a web browser", "On a football field"], "In a web browser"),
    new question("What part of a web browser can you use to view messages in JavaScript for troubleshooting purposes?", ["The room of baths", "The settings menu", "The console", "The Magic 8 Ball"], "The console"),
    new question("What is referred to as a 'stack overflow'?", ["A large helping of pancakes", "When JavaScript goes to the bathroom", "A type of cheese found only in Wisconsin", "When too much memory is used on the call stack"], "When too much memory is used on the call stack"),
    new question("What is a 'callback function'?", ["When you remember a function that you forgot to add to your code", "Something to be avoided in the bathroom", "An action taken by a Pokemon when played", "A function passed into another function as an argument to be executed later"], "A function passed into another function as an argument to be executed later"),
    ]

// init
function init(){
    getTimer()
}


// current score box

function startGame(){
    timerCount = 60;
}

// timer
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      index--;
      timerElement.textContent = timer;
      if (timer >= 0) {
        // Tests if win condition is met
        if (isWin && timer >= 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          endGame();
        }
      }
      // Tests if time has run out
      if (timer === 0) {
        // Clears interval and displays score?
        clearInterval(timer);
        displayScore();
      }
    }, 1000);
    console.log(timer)
  }
// high score box

function highScores() {

}


// keep running tally to refer to the current score box



// save score server-side so that it can be added to high score box if necessary

// display score at the end
function endGame() {

}


// start/submit button for quiz. data-states will be active/inactive
startButton.addEventListener("click", startGame);
// inactive state will be start/active state will be quit or submit