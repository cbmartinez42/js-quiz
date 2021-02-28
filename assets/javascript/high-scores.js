let restartBtn = document.getElementById('restart-btn');
let resetBtn = document.getElementById('reset-btn');
let scoresList = document.getElementById('high-scores');
// let scoresArray = localStorage.getItem("scores");
// let scoresArray = [];
// let scores = localStorage.getItem("scores");
let scoresArray = JSON.parse(localStorage.getItem("scores")) || [];
const MAX_HIGH_SCORES = 5;
let list = document.createElement('ol');
let item = document.createElement ('li');
// set event listeners

resetBtn.addEventListener('click', resetScores)
restartBtn.addEventListener('click', restartQuiz)

// get user score(timer) from quiz
function init(){
    console.log(scoresArray)

    // sort high scores and limit to 5
    // scoresArray.push(userScore);
    saveHighScore = e => {
        scoresArray.sort((a,b) => b.userScore - a.userScore);
        scoresArray.splice(5);
    }
    console.log(scoresArray)


    // populate list from scores
    function makeOL(array) {

        scoresList.appendChild(list)

        for (var i = 0; i < scoresArray.length; i++) {

            item.appendChild(document.createTextNode(array[i]));

            list.appendChild(item);
        }
        scoresList.innerText = (list.userInitials + ": " + list.userScore)
        return list;
            }
    // scoresList.innerHTML = (list.userInitials + ": " + list.userScore)
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
