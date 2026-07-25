const targetDate = new Date("2026-07-27T12:00:00");


function updateCountdown(){

    const now = new Date();

    const difference = targetDate - now;


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;
    

}


updateCountdown();

setInterval(updateCountdown,1000);

document.getElementById("secretButton").onclick = function(){

    document.getElementById("secretMessage").innerHTML =
    "Can't wait to be aloooone with youuuuu 😏";

};