 //Show the questions
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];
var questionIndex = 0;
var score = 0;
var questionContent = document.getElementById("question_content");
var allScores = [];
var ol = document.getElementById("ol");
var start = document.getElementById("start_btn");
var currentTime = document.getElementById("current_time");
var nextQuestions;
// Seconds left is 15 seconds per question:
var leftTime = 75;
// Holds penalty time
var penalty = 10;
var timer = 0;
//click start button, Triggers time decreate, render question
start.addEventListener("click", function(){
if(timer === 0){
   timer = setInterval(function() {
      leftTime--;
      currentTime.textContent = "time: " + leftTime;
   
    // Tests if time has run out
    if (leftTime <= 0) {
      // Clears interval
      clearInterval(timer);
     allDone();
    }
  }, 1000);
}
 loadQuestion(questionIndex);
})


//load question function
function loadQuestion(questionIndex){
//clear exsiting data
questionContent.innerHTML=""
ol.innerHtml = "";

//for loop throng questions array
for(var i=0; i<questions.length; i++){
//appends title
var userQuestion = questions[questionIndex].title;

var userOptions = questions[questionIndex].choices;
}
//create question title
let questionTitle = document.createElement("div");
questionTitle.setAttribute("id","questionTitle");
questionTitle.textContent = userQuestion;
questionContent.appendChild(questionTitle);
//before append list,clear ol
ol.innerText="";
//create answers list
 userOptions.forEach((item)=>{
  var li = document.createElement("li");
//set li's styles
  li.setAttribute("id","li");
  li.textContent = item;

  questionContent.appendChild(ol);
  ol.appendChild(li);
//click li Triggers checkAnswer funtion
li.addEventListener("click",checkAnswer);
})

}

//compare choice  and answer
function checkAnswer(event) {
    var element = event.target;

    if (element.matches("li")) {

        var correctOrWrong = document.createElement("div");
        var creatLine = document.createElement("div");
        creatLine.textContent = "";
        correctOrWrong.setAttribute("id","correctOrWrong");
        creatLine.setAttribute("id","line");
      //correct conditions
        if (element.textContent == questions[questionIndex].answer) {
            score++;
           correctOrWrong.textContent = "Correct!";
          
        } else {
      // Will deduct 10 seconds off for wrong answers
          correctOrWrong.textContent = "Wrong!";
          leftTime = leftTime - penalty ;
        }

    }
    
    questionIndex++;

    if (questionIndex >= questions.length) {
       
        allDone();
       
    } else {
        loadQuestion(questionIndex);
    }
    questionContent.appendChild(creatLine);
    questionContent.appendChild(correctOrWrong);

}



//add gameover funtion
function allDone(){
questionContent.innerHTML = "";

currentTime.innerHTML = "";

//all done title
var allDoneTitle = document.createElement("div");
allDoneTitle.setAttribute("id","allDoneTitle");
allDoneTitle.textContent = "All Done!";
questionContent.appendChild(allDoneTitle);

//create p element show score
//finish all question, need stop timer
if(leftTime >= 0){
var showScore = document.createElement("div");
showScore.setAttribute("id","showScore");
clearInterval(timer);
showScore.textContent = "Your final score is: " + leftTime;
questionContent.appendChild(showScore);
}


//create div include label and input
var labelAndInput = document.createElement("div");
labelAndInput.setAttribute("id","labelAndInput");
labelAndInput.textContent = "";
questionContent.appendChild(labelAndInput);

//create label enter initials
var createLabel = document.createElement("label");
createLabel.setAttribute("id","label");
createLabel.textContent = "Enter initials";
labelAndInput.appendChild(createLabel);


//create input
var createInput = document.createElement("input");
createInput.setAttribute("type","text");
createInput.setAttribute("id","initials");
createInput.textContent = "";
labelAndInput.appendChild(createInput);

//create submit
var createSubmit = document.createElement("button");
createSubmit.setAttribute("type","submit");
createSubmit.setAttribute("id","submit");
createSubmit.textContent = "Submit";
labelAndInput.appendChild(createSubmit);
 
createSubmit.addEventListener("click",function(event){
     event.preventDefault();
     var initials = createInput.value;
     if(!initials){
     document.querySelector("#submit").textContent = "Enter a valid value!";
}else{
     var finalScore = {
          initials:initials,
          score:leftTime
         }
     allScores.push(finalScore);
     var newScore = JSON.stringify(allScores);
     localStorage.setItem("allScores", newScore);
     window.location.href = "highScores.html";
}

})

}


