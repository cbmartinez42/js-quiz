let restartBtn = document.getElementById('restart-btn')
let resetBtn = document.getElementById('reset-btn')
let scoresList = document.getElementById('scores-list')
// let scoresArray = localStorage.getItem("scores");
// let scoresArray = [];
let scores = localStorage.getItem("scores");

// set event listeners

resetBtn.addEventListener('click', resetScores)
restartBtn.addEventListener('click', restartQuiz)

// get user score(timer) from quiz
function init(){
    // scoresArray = localStorage.getItem("scores")
    let scoresArray = JSON.parse(scores)
    console.log(scoresArray)
    console.log(scoresArray.length)

    scoresList.innerText = (scoresArray.userInitials + ": " + scoresArray.userScore)
}


init()
// scoresList.innerText = scoresArray.userInitials + ": " + scoresArray.userScore;
console.log(scoresArray)

// function to reset scores
function resetScores(event) {
    localStorage.clear();
    location.reload();
}

// function to restart quiz
function restartQuiz() {
    window.location.href = './index.html'
}
