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

    // Pets start moving....

    // Drag Function
    $(function() {
        $(".draggable").draggable();

        $("#petStore").droppable({
            accept: ".draggable",
            drop: function( event, ui ) {
                count();
                if (petsOut === 0) {
                    goodJob();
                }
            }
        });
    });
});

// Pet In Counter
var petsOut=10;
function count() {
    petsOut -= 1;
    document.getElementById("numPets").innerHTML = petsOut;
}

//Good Job
function goodJob() {
    document.getElementById("instruction").style.visibility="hidden";
    document.getElementById("timeUP").style.display="none";
    document.getElementById("blurEnd").style.opacity = "0.3";
    document.getElementById("goodjob").style.visibility="visible";
}

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
    document.getElementById("blurEnd").style.opacity = "0.3";
}
