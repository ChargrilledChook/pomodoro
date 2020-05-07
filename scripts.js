// TODO
// Make pause work
// Write break or work to display
// Implement long break every n breaks
// Make it prettier

// Event listeners
const start = document.querySelector('#start')
start.addEventListener('click', function(){
    
    startTimer()
    start.disabled = true;
});

function startTimer() {
    pomodoro(workTimer) 
}


/*const pause = document.querySelector('#pause')
pause.addEventListener('click', function(){
    remainingTime = difference;
    clearInterval(interval);
    start.disabled = false
    const start = document.querySelector('#start')
    start.addEventListener('click', function(){
        startTimer()
        start.disabled = true;
    });
    pomodoro(difference);
});*/


const workUp = document.querySelector('#workUp')
workUp.addEventListener('click', function(){
    if (workTimer < 1440){
        workTimer += 1;
    }
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
    if (breakTimer < 1440) {
        breakTimer += 1;
    }
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
const defaultWork = 25;
const defaultBreak = 5;
let workTimer = defaultWork;
let breakTimer = defaultBreak;
const minute = 60000;


document.getElementById("workDisplay").innerHTML = workTimer + 'm';
document.getElementById("breakDisplay").innerHTML = breakTimer + 'm';
document.getElementById("displayContainer").innerHTML = workTimer + 'm ' + '0s';

display = document.getElementById("displayContainer");

// Adapted from https://www.w3schools.com/howto/howto_js_countdown.asp
function pomodoro(timer) {
    let countDown = new Date().getTime() + (minute * timer)

    interval = setInterval(function() {
        const now = new Date().getTime();
        const difference = countDown - now;
        //const days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const pause = document.querySelector('#pause')
            pause.addEventListener('click', function(){
                start.disabled = false;
            });

        const stop  = document.querySelector('#stop')
        stop.addEventListener('click', function(){
            clearInterval(interval);
            display.innerHTML = workTimer + "m " + '0s';  
            start.disabled = false;
        });

        const reset  = document.querySelector('#reset')
        reset.addEventListener('click', function(){
            clearInterval(interval);
            display.innerHTML = defaultWork + "m " + '0s';
            workTimer = defaultWork;
            breakTimer = defaultBreak;
            document.getElementById("workDisplay").innerHTML = workTimer + 'm';
            document.getElementById("breakDisplay").innerHTML = breakTimer + 'm';
            start.disabled = false;
        });

        if (difference >= 0) {
           display.innerHTML = (hours * 60) + minutes + "m " + seconds + "s ";
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


   


//https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
// haven't used this at all but curious to compare against current implementation