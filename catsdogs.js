// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

var petsOut = 10;

// 15 Sec Timer
function start() {
    var timeLeft = 15,
        elem = document.getElementById("countDown"),
        timerId = setInterval(countdown, 1000);

    function countdown() {
        // Time is Up
        if (timeLeft == -1) {
            clearTimeout(timerId);
            stop();
        } else {
            elem.innerHTML = timeLeft;
            timeLeft--;
        }
    }
}

// Pet In Counter
function count() {
    petsOut -= 1;
    document.getElementById("numPets").innerHTML = petsOut;
}

// Game Over
function stop() {
    document.getElementById("instruction").style.visibility = "hidden";
    document.getElementById("timeUP").style.visibility = "visible";
    document.getElementById("blurEnd").style.opacity = "0.3";
}

// Game Won
function goodJob() {
    document.getElementById("instruction").style.visibility = "hidden";
    document.getElementById("timeUP").style.display = "none";
    document.getElementById("blurEnd").style.opacity = "0.3";
    document.getElementById("goodjob").style.visibility = "visible";
}


$(document).ready(function() {
    // Start Game
    $(".startButton").click(function(){
        $(this).remove();

        // Drag Function
        $(function() {
            $(".draggable").draggable({revert: "invalid"});

            $(".petStore").droppable({
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
});

//Body Not Selectable
window.onload = function() {
    document.body.onselectstart = function() {
        return false;
    }
};
