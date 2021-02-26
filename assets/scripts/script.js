let startButton = document.getElementById("startButton");
startButton.addEventListener('click', startGame)
let questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answerButtons');
let shuffledQuestions, currentQuestionIndex
let timer = 60;
const timerElement = document.getElementById('timer')
let clock = null
let isCompleted = false

function startGame(){
    // Sets timer
    clock = setInterval(function() {
      timer--;
      timerElement.innerText = timer
      if (timer === 0) {
        // Clears interval and displays score?
        clearInterval(clock);
      }
    }, 1000)

  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  answerButtonsElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('answer-buttons')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    } 
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  const children = Array.from(answerButtonsElement.children)
  console.log(children)
  for (const child of children) {
    console.log(child)
    answerButtonsElement.removeChild(child)
  }
  // while (answerButtonsElement.firstChild) {
  //   answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  // }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body,correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1){
  // setTimeout(() => {
    
  //   }, 3000)
    currentQuestionIndex++
    setNextQuestion()
  } else {
    window.location.pathname = '/high-scores.html'
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('button-correct')
  } else {
    element.classList.add('button-wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('button-correct')
  element.classList.remove('button-wrong')
}

const questions = [
  {
    question: 'What is a function?', 
    answers: [
      { text: "A job you must go to every day", correct: false}, 
      { text: "A block of code designed to perform a particular task", correct: true}, 
      { text: "Something done in the bathroom", correct: false},
      { text: "A rare breed of dog", correct: false}
    ]
  },
  {
    question: 'Where is JavaScript run?', 
    answers: [
      { text: "On your desktop", correct: false}, 
      { text: "In the bathroom", correct: false}, 
      { text: "In a web browser", correct: true},
      { text: "On a football field", correct: false}
    ]
  },
  {
    question: 'What part of a web browser can you use to view messages in JavaScript for troubleshooting purposes?', 
    answers: [
      { text: "The room of baths", correct: false}, 
      { text: "The settings menu", correct: false}, 
      { text: "The console", correct: true},
      { text: "The Magic 8 Ball", correct: false}
    ]
  },
  {
    question: "What is referred to as a 'stack overflow'?", 
    answers: [
      { text: "A large helping of pancakes", correct: false}, 
      { text: "When JavaScript goes to the bathroom", correct: false}, 
      { text: "A type of cheese found only in Wisconsin", correct: false},
      { text: "When too much memory is used on the call stack", correct: true}
    ]
  },
  {
    question: "What is a 'callback function'?", 
    answers: [
      { text: "When you remember a function that you forgot to add to your code", correct: false}, 
      { text: "Something to be avoided in the bathroom", correct: false}, 
      { text: "An action taken by a Pokemon when played", correct: false},
      { text: "A function passed into another function as an argument to be executed later", correct: true}
    ]
  }
] 


// new question("What is a 'callback function'?", ["When you remember a function that you forgot to add to your code", "Something to be avoided in the bathroom", "An action taken by a Pokemon when played", "A function passed into another function as an argument to be executed later"], "A function passed into another function as an argument to be executed later"),
