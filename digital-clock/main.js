const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function formatTime(time) {
    return time.toString().padStart(2, "0");
}


function isAmPm(hour) {
    return hour > 12 ? "PM" : "AM";
}

function isHour(hour) {
    return hour > 12 ? `${24-hour}` : ``
}


function clock() {
    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    hour.textContent = formatTime(isHour(h));
    minute.textContent = formatTime(m);
    seconds.textContent = formatTime(s);
    ampm.textContent = isAmPm(h);
}

setInterval(clock, 1000);