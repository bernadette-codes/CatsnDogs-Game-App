/**
 * Created by Bernadette on 4/3/2016.
 */

// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

//Body Not Selectable
window.onload = function() {
    document.body.onselectstart = function() {
        return false;
    }
}

// Start Game
$("#startButton").click(function(){
    $(this).remove();

    // Drag Function
    $(function() {
        $(".draggable").draggable({revert: "invalid"});

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

// 15 Sec Timer
function start() {
    var timeLeft = 15,
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
