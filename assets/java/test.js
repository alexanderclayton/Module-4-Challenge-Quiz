var introCard = document.getElementById("intro-card");
var startButton = document.getElementById("start-button");
var questionCard = document.getElementById("question-card")
var questionText = document.getElementById("question-text");
var questionOptions = document.getElementById("question-options");
var optionA = document.getElementById("option-a");
var optionB = document.getElementById("option-b");
var optionC = document.getElementById("option-c");
var optionD = document.getElementById("option-d");
var check = document.getElementById("check-answer");
var submitCard = document.getElementById("submit-card");
var highScoreCard = document.getElementById("high-score-card");
var highScores = document.getElementById("high-scores");
var resetButton = document.getElementById("reset-button");
var returnToHomeButton = document.getElementById("return-to-home-button");

var questions = [
    {
        questionText: "<p>filler questionText 1</p>",
        optionA: "<button class='answer-button' id='correct-answer'>filler option A</button>",
        optionB: "<button class='answer-button'>filler option B</button>",
        optionC: "<button class='answer-button'>filler option C</button>",
        optionD: "<button class='answer-button'>filler option D</button>",
        answer: "option-a"
    },{
        questionText: "<p>filler questionText 2</p>",
        optionA: "<button>filler option A</button>",
        optionB: "<button>filler test option B</button>",
        optionC: "<button>filler option C</button>",
        optionD: "<button>filler option D</button>",
        answer: "option-b"
    },{
        questionText: "<p>filler questionText 3</p>",
        optionA: "<button>filler option A</button>",
        optionB: "<button>filler option B</button>",
        optionC: "<button>filler test option C</button>",
        optionD: "<button>filler option D</button>",
        answer: "option-c"
    },{
        questionText: "<p>filler questionText 4</p>",
        optionA: "<button>filler option A</button>",
        optionB: "<button>filler option B</button>",
        optionC: "<button>filler option C</button>",
        optionD: "<button>filler test option D</button>",
        answer: "option-d"
    },{
        questionText: "<p>filler questionText 5</p>",
        optionA: "<button>filler test option A</button>",
        optionB: "<button>filler option B</button>",
        optionC: "<button>filler option C</button>",
        optionD: "<button>filler option D</button>",
        answer: "option-a"
    }
];

var currentQuestion = 0;
var questionCount = questions.length -1;
var thisQuestion = questions[currentQuestion];

startButton.addEventListener("click", startQuiz);

function startQuiz() {
   introCard.style.display = "none";
   questionCard.style.display = "block";

    questionText.innerHTML = thisQuestion.questionText
    optionA.innerHTML = thisQuestion.optionA
    optionB.innerHTML = thisQuestion.optionB
    optionC.innerHTML = thisQuestion.optionC
    optionD.innerHTML = thisQuestion.optionD

    var correctAnswer = document.getElementById("correct-answer");
    var userAnswer = document.getElementsByClassName("answer-button");
    for (var i = 0; i < userAnswer.length; i++) {
        var checkAnswer = userAnswer[i].addEventListener("click", nextQuestion);
        
    };

    function nextQuestion() {
        if (checkAnswer != correctAnswer) {
            console.log("hi")
        } else {
            console.log("bye")
        };
    };
};




