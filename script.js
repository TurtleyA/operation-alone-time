const targetDate = new Date(Date.now() + 5000);


function updateCountdown(){

    const now = new Date();

    const difference = targetDate - now;

    if (difference <= 0) {

  document.getElementById("countdown").innerHTML =
'<span class="finished-message">🎉 Get your ass over here 🎉</span>';

    document.getElementById("countdown").classList.add("celebrate");

    document.querySelector("h2").innerHTML =
    "Countdown done";

    document.getElementById("secretButton").innerHTML =
"💌 Open your mission report";


    return;

 
}


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

const messages = [
    "😏 Can't wait to be aloooone with youuuuu ",
    "💜 Mission update: Final hours countdown has begun",
    "🐢 Turtle report: Patience levels are low",
    "✨ Forecast: 100% chance of cuddles",
    "💌 Official notice: You are very much worth waiting for",
    "👀 Warning: excessive kissing may occur ",
    "💗 Countdown status: Almost there...",
    "🐢 This mission has been approved by the turtles."
];


document.getElementById("secretButton").onclick = function(){

    const randomMessage =
    messages[Math.floor(Math.random() * messages.length)];


    document.getElementById("secretMessage").innerHTML =
    randomMessage;

};