//Declared variabled
var highScore = document.getElementById("highScore");
var clear = document.getElementById("clear");
var homePage = document.getElementById("homePage");

//highscore js content goes here

//Event listen to get back to home page
homePage.addEventListener("click", function () {
    window.location.replace("./index.html")
});
