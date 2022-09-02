


//The init function is called when the page loads
funciton Infinity(){


}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}