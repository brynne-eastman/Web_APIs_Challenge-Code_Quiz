//created an array for the multiple choice questions
const quizQuestions = [
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
//Giving the user 90 seconds to complete the quiz
//should be able to answer each question within 15 seconds
//penalty for every wrong answers, 10 seconds is removed from current time


//Declared variabales
