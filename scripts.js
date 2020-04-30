const now = new Date();
start_time = 0;
end_time = 0;
long_timer = true;
timer = false;
running = false;
while (running === true) {
    
    if (timer === false) {
        timer = true;
        start_time = now.getTime();
        if (long_timer === true) {
            end_time = start_time + 1,500,000;
            long_timer = false;
        } else {
            end_time = start_time + 300,000;
            long_timer = true;
        }
    }
    if (now.getTime === end_time) {
        timer = false;
    }
    console.log(start_time);
    console.log(end_time);
    console.log(long_timer);
    console.log(now.getTime);
}



//This is my rough idea