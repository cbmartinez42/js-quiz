let restartBtn = document.getElementById('restart-btn');
let resetBtn = document.getElementById('reset-btn');
let scoresList = document.getElementById('high-scores');
let scoresArray = JSON.parse(localStorage.getItem("scores")) || [];
let list = document.createElement('ol');

// set event listeners
resetBtn.addEventListener('click', resetScores)
restartBtn.addEventListener('click', restartQuiz)

// get user score(timer) from quiz
function init(){
        scoresList.appendChild(makeOL(scoresArray));
}

// make ordered list - thanks to Kat (TA) for helping with this!
function makeOL(array) {
    // set to sort and limit winners to 5
    scoresArray.sort((a,b) => b.userScore - a.userScore);
    scoresArray.splice(5);
    // run loop to create list elements
    for (var i = 0; i < scoresArray.length; i++) {
        let item = document.createElement ('li');
        var user = array[i].userInitials;
        var user_score = array[i].userScore;
        // item.appendChild(document.createTextNode(array[i]));
        item.appendChild(document.createTextNode("Player: " + user + " 🏆 Score: " + user_score));
        item.appendChild(document.createElement("br"))
        list.appendChild(item);
    }
    return list;
}

init()
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
