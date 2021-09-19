//created an array for the multiple choice questions
let questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"  
    },
    {
        question: "The condition in an if/else statment is enclosed with ___________.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ____________.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "d. all of the above"
    },
    {
        question: "String values must be enclosed within ___________ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parentheses"],
        answer: "c. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["a. JavaScript", "b. terminal/bash", "c. for loops", "d. console.log"],
        answer: "d. console.log"
    }

];
//Giving the user 75 seconds to complete the quiz
//should be able to answer each question within 15 seconds
//penalty for every wrong answers, 10 seconds is removed from current time


//Declared variabales
let questionIndex = 0;
let score = 0;
let penalty = 10;
let currentSeconds = getElementById("#currentSeconds");
let multipleChoice = getElementById("#mulitpleChoice");
let timer = document.getElementById("#timer");
let startQuizBtn = getElementById("#start-quiz-btn");


let totalTime = 76;
function startQuiz () {
    totalTime = 75;
    questionIndex = 0;
    timeLeft.textContect = totalTime;
    initialInput.textContect = "";

    var timer = setInterval(function () {
        totalTime--;
        timeLeft.textContect = totalTime;
        if(totalTime <=0) {
            clearInterval(timer);
            if (questionIndex < question.length -1) {
                gameOver();
            }
        }
    }, 1000);
    quiz();
}


//timer.addEventListener("click", function (){
    //if (interval === 0) {
        //interval = setInterval(function () {
            //time--;
            //currentSeconds.textContect = "Time: " + time;
            
            //if (time <=0) {
                //allDone();
                //currentSeconds.textContect = "Time Is Up!"
            //}
        //}, 1000);
    //}
    //render(questionIndex);
//})