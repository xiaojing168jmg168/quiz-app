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

var ul = document.getElementById("ul");
var start = document.getElementById("start_btn");
var leftTime = document.getElementsByClassName(
"left_time");

// Seconds left is 15 seconds per question:
var leftTime = 76;
// Holds penalty time
var penalty = 10;
//click start button, Triggers time decreate, render question
start.addEventListener("click", function(){
    timer = setInterval(function() {
      leftTime--;
      leftTime.textContent = leftTime;
   
    // Tests if time has run out
    if (leftTime === 0) {
      // Clears interval
      clearInterval(timer);
      allDone()
    }
  }, 1000);
 loadQuestion(questionIndex);
})


//load question function
function loadQuestion(questionIndex){
//clear exsiting data
questionContent.innerHTML=""
ul.innerHtml = "";

//for loop throng the array
for(var i=0; i<questions.length; i++){
//append title
var userQuestion = questions[questionIndex].title;

var userOptions = questions[questionIndex].choices;

}
//create question title
let questionTitle = document.createElement("div");
questionTitle.setAttribute("id","questionTitle");
questionTitle.textContent = userQuestion;
questionContent.appendChild(questionTitle);



 userOptions.forEach((item)=>{
  let li = document.createElement("li");
//set li's styles
  li.setAttribute("id","li");
  li.innerText = item;
  questionContent.appendChild(ul);
  ul.appendChild(li);
})

  



}
//compare choice  and answer
var checkAnswer = function(){

}

// add eventlistener click start button

//add gameover funtion
var allDone = function(){


}







