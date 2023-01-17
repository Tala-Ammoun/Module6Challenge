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
let next = document.querySelector("#next"); //targets next button
let prev = document.querySelector("#prev"); //targets prev button

let index = 0

let questions = [
    {
        questionTitle: "What was the first animal to be born?",
        choices: ["Humans", "Tortoise", "Fish", "Birds", "Sponges"],
        correctAnswer: 4
    },

    {
        questionTitle: "what is the best chocolate bar?",
        choices: ["Snickers", "Bounty", "Toblerone", "KitKat", "Galaxy"],
        correctAnswer: 2
    },

    {
        questionTitle: "What is the best diamond?",
        choices: [
            "the diamond that shines brightest",
            "the biggest diamond",
            "the diamond with the best clarity",
            "the diamond with excellent cut and symmetry",
            "the diamond with the least amount of color"],
        correctAnswer: 3
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

let questionsArr = []
let choicesArr = []
let correctAnsArr = []

// let questionsObject = questions[index].questionTitle
// let choices = questions[index].choices
// let correctAnsArr = questions[index].correctAnswer
// let questionsObject = element.questionTitle
// questionsArr.push(questionsObject)
 // let choices = element.choices

index = index + 1
for (let b = 0; b < questions.length; b++) {
    let element = questions[b];
    console.log(element)

    let correctAns = element.correctAnswer
    correctAnsArr.push(correctAns)

    function revealQA(index){
    index = index + b
    hide.style.display = "block";
    questionTitle.textContent = element.questionTitle

    let choices = element.choices
    for (let i = 0; i < choices.length; i++) {
    let choicesList = document.createElement("li");
    let choicesBtn = document.createElement("button")
    choicesList.appendChild(choicesBtn)
    choicesList.textContent = element.choices[i]
    choicesList.setAttribute("data-index", i)
    choicesId.appendChild(choicesList)
    choicesArr.push(choices[i])

}}}

startBtn.addEventListener('click', function () {
    start.style.display = "none"
    revealQA()
    clock()
    })

let timeLeft = 0 // 5 minutes
function clock() {
    //initialize to 0 then start again
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
choicesId.addEventListener('click', function (event) { 
        event.preventDefault();
        let answer = document.createElement("div");
        choicesId.appendChild(answer)

        let audio = document.createElement("AUDIO")
        choicesId.appendChild(audio)

        if (event.target.matches("li")){
            //event.target.textContent === correctAnsArr
            let clickedLi = event.target.getAttribute("data-index")
        if (clickedLi === correctAnsArr)
            answer.textContent  = "Correct!"
            answer.setAttribute ("style", "color: green");
            audio.setAttribute("src","assets/sfx/correct.wav");
            audio.play()
        }
        else {
            answer.textContent = "Incorrect! The right answer is " + correctAnsArr
            answer.setAttribute ("style", "color: red");

            audio.setAttribute("src","assets/sfx/incorrect.wav");
            audio.play()

            timeLeft = timeLeft - 10;

            incorrect++
            console.log(incorrect)
            // incorrectArr.push(incorrect)
        }
        revealQA()
    }
)

// questionsEl.addEventListener('click', function (event) { 
// event.currentTarget.setAttribute("style", "display: none")}
// )

// Sum up score
// let totalScore = [questionsArr.length - incorrectArr.length]
// finalScore.textContent = totalScore + "/" + questionsArr.length
// let highestScore = totalScore [0]

// for (let c = 0; c < totalScore.length; c++) {
// if (highestScore < totalScore[c]) {
//     highestScore = totalScore [c]}
//     localStorage.setItem("highestScore", JSON.stringify(highestScore))}

// submitBtn.addEventListener("click", function(event) {
//       event.preventDefault(); //prevents page from refreshing everytime we click submit.
//       let initials = initials.value
//       if (initials === "") {
//         initials.innerHTML = "error", "Your initials cannot be blank"}
//         else {
//         initials.innerHTML = "success", "Your initials are saved!";
//         localStorage.setItem("initials", JSON.stringify(initials))}})

// renderLastScore(); //display the stored highest scores and their corresponding initials

// function renderLastScore() { //this function retrieves information and displays it on the page
//   let initials = localStorage.getItem("initials")
//   let scores = localStorage.getItem("highestScore")

//   if(initials == "" || highestScore == ""){ //If the last score is null,
//     return; //return early from this function.
//   }

//   else {
//     highscores.textContent = initials + ":" + scores
//   }
//   renderLastScore()
// }

// let lastScore = JSON.parse(localStorage.getItem("scores")); //retrieves data in the form of an object (score: 85)
//     scores.textContent = scores; 


// let element = event.target
//     if (element.matches(".hide")){
//         let state = element.getAttribute("")
//     if  (state === "none")
//         element.setAttribute("display", "block")}