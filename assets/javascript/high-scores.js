let restartBtn = document.getElementById('restart-btn')
let resetBtn = document.getElementById('reset-btn')
let saveBtn = document.getElementById('save-btn')
let scores = ""
let userInitials = document.getElementById('initials')
let userScore = 'timer'

// set event listeners
saveBtn.addEventListener('click', saveInitials)
resetBtn.addEventListener('click', resetScores)
restartBtn.addEventListener('click', restartQuiz)

// get user score(timer) from quiz
function init(){

}

// function to save initials
function saveInitials(event) {
    event.preventDefault();
    localStorage.setItem(scores, userInitials)

}

// function to reset scores
function resetScores(event) {
    event.preventDefault();
    localStorage.clear();
    location.reload();
}

// function to restart quiz
function restartQuiz() {
    window.location.href = './index.html'
}
