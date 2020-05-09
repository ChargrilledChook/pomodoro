// TODO
// Write break or work to display
// Alert on timer change + sound?
// Implement long break every n breaks
// Refactor / tidy code
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

const unPause = document.querySelector('#unPause')
    unPause.addEventListener('click', function() {
        pause.disabled = false;  
        pomodoro(rem_minutes, rem_seconds);              
})

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
    if (workTimer > 1){
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
    if (breakTimer > 1){
        breakTimer -= 1;
    }
    document.getElementById("breakDisplay").innerHTML = breakTimer + 'm'
});

function activateTimeAdjustment() {
    workUp.disabled = false;
    workDown.disabled = false;
    breakUp.disabled = false;
    breakDown.disabled = false;
}
function deactivateTimeAdjustment() {
    workUp.disabled = true;
    workDown.disabled = true;
    breakUp.disabled = true;
    breakDown.disabled = true;
}


// Global variables
const defaultWork = 25;
const defaultBreak = 5;
let workTimer = defaultWork;
let breakTimer = defaultBreak;
const minute = 60000;
const second = 1000
let running = false;
const pause = document.querySelector('#pause')
unPause.disabled = true;
pause.disabled = true;


document.getElementById("workDisplay").innerHTML = workTimer + 'm';
document.getElementById("breakDisplay").innerHTML = breakTimer + 'm';
document.getElementById("displayContainer").innerHTML = workTimer + 'm ' + '0s';

display = document.getElementById("displayContainer");

// Adapted from https://www.w3schools.com/howto/howto_js_countdown.asp
function pomodoro(minuteTimer, secondTimer = 0) {
    let countDown = new Date().getTime() + (minute * minuteTimer) + (second * secondTimer )
    unPause.disabled = true;
    pause.disabled = false;
    if (workUp.disabled === false) {
        deactivateTimeAdjustment()
    }

    interval = setInterval(function() {
        const now = new Date().getTime();
        const difference = countDown - now;
        //const days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        pause.addEventListener('click', function(){
            rem_hours = hours;
            rem_minutes = minutes;
            rem_seconds = seconds;
            rem_minutes += (rem_hours * 60);
            clearInterval(interval);
            pause.disabled = true;
            unPause.disabled = false;
            return rem_minutes, rem_seconds;
            
            //Add new button trigger
            //Restart timer with newly saved variables
        });

        const stop  = document.querySelector('#stop')
        stop.addEventListener('click', function(){
            activateTimeAdjustment()
            clearInterval(interval);
            display.innerHTML = workTimer + "m " + '0s';  
            start.disabled = false;
            unPause.disabled = true;
            pause.disabled = true;
        });

        const reset  = document.querySelector('#reset')
        reset.addEventListener('click', function(){
            activateTimeAdjustment()
            clearInterval(interval);
            display.innerHTML = defaultWork + "m " + '0s';
            workTimer = defaultWork;
            breakTimer = defaultBreak;
            document.getElementById("workDisplay").innerHTML = workTimer + 'm';
            document.getElementById("breakDisplay").innerHTML = breakTimer + 'm';
            start.disabled = false;
            pause.disabled = true;
            unPause.disabled = true;
        });

        if (difference >= 0) {
           display.innerHTML = (hours * 60) + minutes + "m " + seconds + "s ";
            console.log(minutes + "m " + seconds + "s ")
        } else {
            running = false;
            clearInterval(interval);
        
            if (minuteTimer === workTimer) {
                alert("Break Time!");
                pomodoro(breakTimer);
            } else {
                alert("Work Time!");
                pomodoro(workTimer)
            }     
        }
    }, 1);
}


   


//https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
// haven't used this at all but curious to compare against current implementation