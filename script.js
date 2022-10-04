const startBtn = document.querySelector("#start");
const clearBtn = document.querySelector("#clear");
const minutesSh = document.querySelector("#minutes");
const secondsSh = document.querySelector("#seconds");
const hoursSh = document.querySelector("#hours");

let myTimer;

let s = 00;
let m = 00;
let h = 00;
secondsSh.addEventListener('change', function() {
    s = Number(this.value);
})
minutesSh.addEventListener('change', function() {
    m = Number(this.value);
})
hoursSh.addEventListener('change', function() {
    h = Number(this.value);
})

function clock() {
    myTimer = setInterval(myClock, 1000);
    let c = s + m*60 + h*60*60;
    function myClock() {
        if(c === 0) {
            clearInterval(myTimer);
            alert("Time is completed🙂");
        }
        c--
        let seconds = c % 60; // Seconds that cannot be written in minutes
        let secondsInMinutes = (c - seconds) / 60; // Gives the seconds that COULD be given in minutes
        let minutes = secondsInMinutes % 60; // Minutes that cannot be written in hours
        let hours = (secondsInMinutes - minutes) / 60;

        secondsSh.value = String(seconds).padStart(2, "0");
        minutesSh.value = String(minutes).padStart(2, "0");
        hoursSh.value = String(hours).padStart(2, "0");

        if(c === 0) {
            clearInterval(myTimer);
            alert("Time is completed🙂");
        }
    }
}



startBtn.addEventListener('click', clock);
clearBtn.addEventListener('click', function() {
    secondsSh.value = "SS";
    minutesSh.value = "MM";
    hoursSh.value = "HH";
    clearInterval(myTimer);
});