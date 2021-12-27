//Declared variabled
var highScore = document.getElementById("highScore");
var clear = document.getElementById("clear");
var homePage = document.getElementById("homePage");

//highscore js content goes here
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores!== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement('li');
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}


//Event listen to get back to home page
homePage.addEventListener("click", function () {
    window.location.replace("./index.html")
});
