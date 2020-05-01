// TODO
// Add stop and / or reset button
// Add ability to change timer lengths
// Add pause button
// Fix negative display when swapping timers
// Commit

// Event listeners
const start = document.querySelector('#start')
start.addEventListener('click', function(){
    startTimer()
});

// Global variables
const workTimer = prompt("Work Time");
const breakTimer = prompt("Break Timer");
const minute = 60000;

// Adapted from https://www.w3schools.com/howto/howto_js_countdown.asp
function pomodoro(timer) {
    let countDown = new Date().getTime() + (minute * timer)

    interval = setInterval(function() {
        const now = new Date().getTime();
        const difference = countDown - now;
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (difference >= 0) {
            document.getElementById("displayContainer").innerHTML = minutes + "m " + seconds + "s ";
            console.log(minutes + "m " + seconds + "s ")
        } else {
            clearInterval(interval);
        
            if (timer === workTimer) {
                pomodoro(breakTimer);
            } else {
                pomodoro(workTimer)
            }     
        }
    }, 1);
}

   
function startTimer() {
    pomodoro(workTimer) // TODO Kill previous pomodoro function
}


//https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
// haven't used this at all but curious to compare against current implementation