const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function formatTime(time) {
    return time.toString().padStart(2, "0");
}

function clock() {
    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    if(h >= 12){
        ampm.innerHTML = 'PM';
    }else{
        ampm.innerHTML = 'AM';
    }

    if (h > 12) {
        h = h - 12;
    }

    hour.textContent = formatTime(h);
    minute.textContent = formatTime(m);
    seconds.textContent = formatTime(s);
}

setInterval(clock, 1000);