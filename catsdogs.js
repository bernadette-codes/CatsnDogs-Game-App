// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

var petsOut = 10,
    instruction = document.getElementById("instruction"),
    timeUP = document.getElementById("timeUP"),
    blurEnd = document.getElementById("blurEnd");

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
    } // end countdown
} // end start function

// Pet In Counter
function count() {
    petsOut -= 1;
    var numPets = document.getElementById("numPets");
    numPets.innerHTML = petsOut;
}

// Game Over
function stop() {
    instruction.style.visibility = "hidden";
    timeUP.style.visibility = "visible";
    blurEnd.style.opacity = "0.3";
}

// Game Won
function goodJob() {
    instruction.style.visibility = "hidden";
    timeUP.style.display = "none";
    blurEnd.style.opacity = "0.3";
    document.getElementById("goodjob").style.visibility = "visible";
}


$(document).ready(function() {
    // Start Game
    $(".startButton").click(function(){
        $(this).remove();

        // Drag Function
        $(function() {
            var draggable = $(".draggable"),
                petStore = $(".petStore");

            draggable.draggable({revert: "invalid"});

            petStore.droppable({
                accept: ".draggable",
                drop: function( event, ui ) {
                    count();
                    if (petsOut === 0) {
                        goodJob();
                    }
                }
            }); // end droppable

        }); // end drag function
    }); // end click
}); // end ready

//Body Not Selectable
window.onload = function() {
    document.body.onselectstart = function() {
        return false;
    }
};
