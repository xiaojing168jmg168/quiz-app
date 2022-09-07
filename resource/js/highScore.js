var highScores = document.querySelector("#highScore");
var goBack = document.querySelector("#goBack");
var clear = document.querySelector("#clear");

// Triggles go back button
goBack.addEventListener("click",function(){
  window.location.href = "index.html";
})

//Triggles clear button
clear.addEventListener("click",function(){
    localStorage.clear();
    location.reload();
})


function displayScores() {
    var allScores = localStorage.getItem("allScores");
        allScores = JSON.parse(allScores);
    if (allScores !== null) {
        var scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
        for (var i = 0; i < allScores.length; i++) {
            var initials = allScores[i].initials;
            var scores = allScores[i].score
            var scoreEntry = document.createElement("li");
            scoreEntry.innerHTML = initials + " - " + scores;
            scoreList.appendChild(scoreEntry);
        }
        highScores.appendChild(scoreList);
    }
};
displayScores();