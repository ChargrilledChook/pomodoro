
const now = new Date();
start_time = 0;
end_time = 0;
long_timer = true;
short_timer = false;
running = true;
while (running === true) {
    
    if (short_timer === false) {
        short_timer = true;
        start_time = now.getTime();
        if (long_timer === true) {
            end_time = start_time + 1200;
            long_timer = false;
        } else {
            end_time = start_time + 6000;
            long_timer = true;
        }
    }
    if (now.getTime === end_time) {
        short_timer = false;
    }
    console.log(start_time);
    console.log(end_time);
    console.log(long_timer);
    console.log(now.getTime());
}


//This is my rough idea


const start = document.querySelector('#start')
start.addEventListener('click', function(){
    startTimer()
});

function startTimer() {
    //TODO
}