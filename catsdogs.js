/**
 * Created by Bernadette on 3/29/2016.
 */

// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

// Start Game
$("#startButton").click(function(){
    $(this).remove();
});


// 30 Sec Timer
function start() {
    var timeLeft = 30,
        elem = document.getElementById("countDown"),
        timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            stop();
        } else {
            elem.innerHTML = timeLeft;
            timeLeft--;
        }
    }
}

// Time is Up
function stop() {
    document.getElementById("instruction").style.visibility="hidden";
    document.getElementById("timeUP").style.visibility="visible";
    document.getElementById("blurEnd").style.opacity = "0.4";
}
