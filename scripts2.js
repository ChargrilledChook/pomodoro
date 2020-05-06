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
    start.disabled = true;
});

const stop  = document.querySelector('#stop')
start.addEventListener('click', function(){
    //TODO
});

const pause = document.querySelector('#pause')
start.addEventListener('click', function(){
    //TODO
});


const reset = document.querySelector('#reset')
start.addEventListener('click', function(){
    //TODO
});

const workUp = document.querySelector('#workUp')
workUp.addEventListener('click', function(){
    workTimer += 1;
    document.getElementById("workDisplay").innerHTML = workTimer + 'm';
    document.getElementById("displayContainer").innerHTML = workTimer + 'm'
});

const workDown = document.querySelector('#workDown')
workDown.addEventListener('click', function(){
    if (workTimer > 0){
        workTimer -= 1;
    }
    document.getElementById("workDisplay").innerHTML = workTimer + 'm';
    document.getElementById("displayContainer").innerHTML = workTimer + 'm'
});

const breakUp = document.querySelector('#breakUp')
breakUp.addEventListener('click', function(){
    breakTimer += 1;
    document.getElementById("breakDisplay").innerHTML = breakTimer + 'm'
});

const breakDown = document.querySelector('#breakDown')
breakDown.addEventListener('click', function(){
    if (breakTimer > 0){
        breakTimer -= 1;
    }
    document.getElementById("breakDisplay").innerHTML = breakTimer + 'm'
});


// Global variables
let workTimer = 2;
let breakTimer = 1;
const minute = 60000;
//const running = False;



document.getElementById("workDisplay").innerHTML = workTimer + 'm';
document.getElementById("breakDisplay").innerHTML = breakTimer + 'm'
document.getElementById("displayContainer").innerHTML = workTimer + 'm'



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