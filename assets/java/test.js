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
var submitScore = document.getElementById("submit-score-button");
var highScoreCard = document.getElementById("high-score-card");
var highScores = document.getElementById("high-scores");
var resetButton = document.getElementById("reset-button");
var returnToHomeButton = document.getElementById("return-to-home-button");

var questions = [
    {
        questionText: "<p>filler questionText 1</p>",
        optionA: "<button class='answer-button' id='A' onclick='checkAnswer(event)'>A</button>",
        optionB: "<button class='answer-button' id='B' onclick='checkAnswer(event)'>filler option B</button>",
        optionC: "<button class='answer-button' id='C' onclick='checkAnswer(event)'>filler option C</button>",
        optionD: "<button class='answer-button' id='D' onclick='checkAnswer(event)'>filler option D</button>",
        answer: "A"
    },{
        questionText: "<p>filler questionText 2</p>",
        optionA: "<button class='answer-button' id='A' onclick='checkAnswer(event)'>filler option A</button>",
        optionB: "<button class='answer-button' id='B' onclick='checkAnswer(event)'>filler test option B</button>",
        optionC: "<button class='answer-button' id='C' onclick='checkAnswer(event)'>filler option C</button>",
        optionD: "<button class='answer-button' id='D' onclick='checkAnswer(event)'>filler option D</button>",
        answer: "B"
    },{
        questionText: "<p>filler questionText 3</p>",
        optionA: "<button class='answer-button' id='A' onclick='checkAnswer(event)'>filler option A</button>",
        optionB: "<button class='answer-button' id='B' onclick='checkAnswer(event)'>filler option B</button>",
        optionC: "<button class='answer-button' id='C' onclick='checkAnswer(event)'>filler test option C</button>",
        optionD: "<button class='answer-button' id='D' onclick='checkAnswer(event)'>filler option D</button>",
        answer: "C"
    },{
        questionText: "<p>filler questionText 4</p>",
        optionA: "<button class='answer-button' id='A' onclick='checkAnswer(event)'>filler option A</button>",
        optionB: "<button class='answer-button' id='B' onclick='checkAnswer(event)'>filler option B</button>",
        optionC: "<button class='answer-button' id='C' onclick='checkAnswer(event)'>filler option C</button>",
        optionD: "<button class='answer-button' id='D' onclick='checkAnswer(event)'>filler test option D</button>",
        answer: "D"
    },{
        questionText: "<p>filler questionText 5</p>",
        optionA: "<button class='answer-button' id='A' onclick='checkAnswer(event)'>filler test option A</button>",
        optionB: "<button class='answer-button' id='B' onclick='checkAnswer(event)'>filler option B</button>",
        optionC: "<button class='answer-button' id='C' onclick='checkAnswer(event)'>filler option C</button>",
        optionD: "<button class='answer-button' id='D' onclick='checkAnswer(event)'>filler option D</button>",
        answer: "A"
    }
];

//var answerKey = [0, 1, 2, 3, 0]; DO I NEED THIS?


var score = 0;
var currentQuestion = 0;
var questionCount = questions.length -1;

startButton.addEventListener("click", startQuiz);

submitScore.addEventListener("click", viewScores)

function startQuiz() {
   introCard.style.display = "none";
   questionCard.style.display = "block";
   displayQuestion();
};

function displayQuestion() {
    var thisQuestion = questions[currentQuestion];
    questionText.innerHTML = thisQuestion.questionText;
    optionA.innerHTML = thisQuestion.optionA;
    optionB.innerHTML = thisQuestion.optionB;
    optionC.innerHTML = thisQuestion.optionC;
    optionD.innerHTML = thisQuestion.optionD;
};

function checkAnswer(event) {
    //took SO long to get this!!  Event target!!
    var thisQuestion = questions[currentQuestion];
    if (event.target.id == thisQuestion.answer) {
        score++;
    } else {
    };
    nextQuestion();
};

function nextQuestion() {
    if (currentQuestion >= questionCount) {
        enterInitials();
    } else {
        currentQuestion++;
        displayQuestion();
    };
};

function enterInitials() {
    questionCard.style.display = "none"
    submitCard.style.display = "block"
};

function viewScores() {
    introCard.style.display = "none";
    questionCard.style.display = "none";
    submitCard.style.display = "none";
    highScoreCard.style.display = "block";
    console.log("hi")
}

/*function nextQuestion() {
    if (userAnswer[i] === answerKey[i]) {
        console.log("hi")
    } else {
        console.log("bye")
    };
}; */