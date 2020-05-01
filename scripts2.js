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
const input_1 = .1;
const input_2 = .2;
const minute = 60000;
let long_timer = true

// Swaps the timer lengths. Could be called directly from pomodoro?
function timerLength(input_1, input_2) {
    if (long_timer === true) {
        return input_1
    } else {
        return input_2
    }
}

// Adapted from https://www.w3schools.com/howto/howto_js_countdown.asp
function pomodoro() {
    let countDown = new Date().getTime() + (minute * timerLength(input_1, input_2))

    interval = setInterval(function() {
        const now = new Date().getTime();
        const difference = countDown - now;
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (difference < 0) {
            if (long_timer === true) {
                long_timer = false;
            }   else {
                long_timer = true;
            }
            clearInterval(interval);
            pomodoro();
        }

        document.getElementById("displayContainer").innerHTML = minutes + "m " + seconds + "s ";

        
    }, 1000);
}

pomodoro()
   



function startTimer() {
    //TODO
}

//https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
// haven't used this at all but curious to compare against current implementation