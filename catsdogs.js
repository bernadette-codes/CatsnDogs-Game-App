// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

var petsOut = 10,
    timeUP = document.getElementById("timeUP"),
    numPets = document.getElementById("numPets");

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
    numPets.innerHTML = petsOut;
}

// Game Over
function gameOver() {
    $('#instruction').hide();
    $('#blurEnd').css('opacity', '0.3');
}

// Game Time is up
function stop() {
    gameOver();
    timeUP.style.visibility = "visible";
}

// Game Won
function goodJob() {
    gameOver();
    timeUP.style.display = "none";
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
