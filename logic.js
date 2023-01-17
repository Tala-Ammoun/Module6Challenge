let scores = document.querySelector(".scores"); //retrieves all previous high scores from local Storage
let timer = document.querySelector(".timer"); //this is the timer div
let time = document.querySelector("#time"); //this displays the actual time/countdown.
let startScreen = document.querySelector("#start-screen"); //displays initial page.
let start = document.querySelector(".start"); //displays initial page.
let startBtn = document.querySelector("#start"); //targets the start button
let questionsEl = document.querySelector("#questions"); //they exist in a separate js file, and they are hidden. On click, their data-status will become visible.
let hide = document.querySelector(".hide"); //targets all classes with hide as their default data-status
let questionTitle = document.querySelector("#question-title"); //question. Child element 1.
let choicesId = document.querySelector("#choices"); //targets all multiple choice answers. Child element 2.
let choicesClass = document.querySelector(".choices") //targets all multiple choice answers.
let endScreen = document.querySelector("#end-screen"); //after answering the last question, change the data-status of this to visible to signal the end of the quiz.
let finalScore = document.querySelector("#final-score"); //displays after the last question of the quiz is answered.
let initials = document.querySelector("#initials"); //targets the initials so that they, and the corresponding score are saved to local storage.
let submitBtn = document.querySelector("#submit"); //targets the submit button for initials
let feedback = document.querySelector("#feedback"); //lets them see which questions they did wrong and display the correct answer.
let feedbackHide = document.querySelector(".feedback hide");

let questions = [
    {
        questionTitle: "What was the first animal to be born?",
        choices: ["Humans", "Tortoise", "Fish", "Birds", "Sponges"],
        correctAnswer: 4
    },

    {
        questionTitle: "What is the best chocolate bar?",
        choices: ["Snickers", "Bounty", "Toblerone", "KitKat", "Galaxy"],
        correctAnswer: 1
    },

    {
        questionTitle: "What is the best diamond?",
        choices: [
            "The diamond that shines brightest",
            "The biggest diamond",
            "The diamond with the best clarity",
            "The diamond with excellent cut and symmetry",
            "The diamond with the least amount of color"],
        correctAnswer: 2
    },

    {
        questionTitle: "What is the cheapest country to buy a diamond?",
        choices: [
            "Dubai because of the lack of import duties or taxes",
            "Russia because it holds the world's largest diamond reserves",
            "India because mining, cutting, and trading diamonds is all done in one place",
            "China because it has a reputation for selling cheaper wholesale products",
            "Belgium because it's Antwerp district is the diamond capital of the world"],
        correctAnswer: 0
    },
]

var index = 0
function revealQA() {
    hide.style.display = "block";

    let element = questions[index];
    
    let correctAns = element.correctAnswer;
    correctAnsArr.push(correctAns);

    questionTitle.textContent = element.questionTitle;

    let choices = element.choices;
    for (let i = 0; i < choices.length; i++) {
    let choicesList = document.createElement("li");
    let choicesBtn = document.createElement("button");
    choicesList.appendChild(choicesBtn);
    choicesList.textContent = element.choices[i];
    choicesList.setAttribute("data-index", i);
    choicesId.appendChild(choicesList);
    choicesArr.push(choices[i]);}
}

let questionsArr = []
let choicesArr = []
let correctAnsArr = [] //only one these items is correct at a time

function hideQA(){
    questionTitle.textContent = ""
    choicesId.textContent = ""
}

startBtn.addEventListener('click', function () {
    start.style.display = "none"
    revealQA()
    clock()
    })

let timeLeft = 0 // 5 minutes
function clock() {
    timeLeft = 300
    let timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft + " seconds left"
        if (timeLeft === 0) { //when we reach 0 
            clearInterval(timeInterval) // once the function executes, stop running it.
        }
    }, 1000)
}

let incorrect = 0

choicesId.addEventListener('click', function(event) { 
    let answer = document.createElement("div");
    choicesId.appendChild(answer)

    let audio = document.createElement("AUDIO")
    choicesId.appendChild(audio)

    setTimeout(function() {
    if (event.target.matches("li")){
    let clickedLi = event.target.getAttribute("data-index")
    
    if (clickedLi == correctAnsArr[index])
        answer.textContent  = "Correct!"
        answer.setAttribute ("style", "color: green");
        audio.setAttribute("src","assets/sfx/correct.wav");
        audio.play()}
    else {
        answer.textContent = "Incorrect! The right answer is " + correctAnsArr[index]
        answer.setAttribute ("style", "color: red");

        audio.setAttribute("src","assets/sfx/incorrect.wav");
        audio.play()

        timeLeft = timeLeft - 10;

        incorrect++ //increases by 1 with each wrong answer
        }}, 300);
        index++;
        hideQA()
        revealQA()

        if(index === questions.length-1){
            showEnd()}
    } 
)

function showEnd(){
    endScreen.setAttribute("style", "display: block")
    timer.setAttribute("style", "display: none")
}

// Sum up score
let correct = [questions.length - incorrect] 
finalScore.textContent = correct + "/" + questions.length

let highestScore = correct [0]
for (let c = 0; c < correct.length; c++) {
if (highestScore < correct[c]) { // if there is a higher number of correct answers
    highestScore = correct [c]} // let the new number be the high score
localStorage.setItem("highestScore", highestScore)}

let initialsEl = initials.value

submitBtn.addEventListener("click", function(event) {
    event.preventDefault(); //prevents page from refreshing everytime we click submit.
    feedback.setAttribute("style", "display: block")
    if (initialsEl === " ") {
        feedback.textContent = "Error. Your initials cannot be blank"}
    else {
        feedback.textContent = "Success. Your initials are saved!";
        localStorage.setItem("initialsEl", JSON.stringify(initialsEl))
        }
    endScreen.setAttribute("style", "display: none")
})

renderLastScore(); //display the stored highest scores and their corresponding initials

function renderLastScore() { //this function retrieves information and displays it on the page
  let initialsEn = localStorage.getItem("initials")
  let highestScores = localStorage.getItem("highestScore")

  if(initialsEn == "" || highestScores == ""){ //If the last scores and initials are null,
    return; //return early from this function.
  }

  else {
    feedback.textContent = initials + ":" + highestScores
  }
  //renderLastScore()
}