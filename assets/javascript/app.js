$(document).ready(function() {

    //set up variables

    var answers = ["Beaver", "Lacrosse", "10", "French", "3", "Village"];
    var data = $("input");
    var correct = 0;
    var incorrect = 0;
    var blank = 0;
    var userAnswer = [];

    //reset when start new game\\
    var reset = function() {
        var answers = ["Beaver", "Lacrosse", "10", "French", "3", "Village"];
        var correct = 0;
        var incorrect = 0;
        var blank = 0;
        var count = 10;
        $("#correct").html(correct);
        $("#incorrect").html(incorrect);
        $("#blank").html(blank);
        $("#countdown").html(count);
    }


    //Setup timer to countdown from 60 seconds total to answer all questions\\

    function countdown() {
        var count = 10;
        var timerId = setInterval(function() {
            count--;
            $("#countdown").html(count);

            //if user runs out of time before completing questions, alert fail, show correct answers and calculate results.\\

            if (count === 0) {
                clearInterval(timerId);
                $("#quiz, #timer").hide("slow");
                $("#results").show("slow");
            }
        }, 1000);
    }

    //for loop and if else statement to see how many questions correct\\
    //does value of selected answer match one of the answers in array? true or false\\
    for (var i = 0; i < answers.length; i++) {
        if ($('input[name="radios"]:checked').val() == answers) {
            correct++;
        } else {
            incorrect++;
        }
        //console.log(correct);
        //console.log(incorrect);
    }

    //hide quiz until click play\\
    $("#quiz, #results").hide();

    //questions show and timer begins\\
    $("#play").click(function() {
        $("#start").hide("slow");
        $("#quiz").show("slow");
        countdown();

    });
});

    //pull values from radio picks\\
    function userAnswer() {
        var radioPick = document.getElementById("radio").value;
        console.log(radioPick);
    }
    
//done button sends to results page//

$("#done").click(function() {
    $("#quiz, #timer").hide("slow");
    $("#results").show("slow");
    userAnswer();
})

//restart button sends back to start screen//

$("#restart").click(function() {
    $("#start, #timer").show("slow");
    $("#results").hide("slow");
    userAnswer();
})
