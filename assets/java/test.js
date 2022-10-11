var highScoresLink = document.getElementById("high-scores-link");
var timer = document.getElementById("timer")
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
var finalScore = document.getElementById("final-score");
var submitCard = document.getElementById("submit-card");
var submitScore = document.getElementById("submit-score-button");
var highScoreCard = document.getElementById("high-score-card");
var highScores = document.getElementById("high-scores");
var resetButton = document.getElementById("reset-button");
var returnToHomeButton = document.getElementById("return-to-home-button");
var questionCardCard = document.getElementById("question-card-card");
var submitCardCard = document.getElementById("submit-card-card");
var highScoreCardCard = document.getElementById("high-score-card-card");
var introCardCard = document.getElementById("intro-card-card");
var timerCard = document.getElementById("timer-card");
var submitText = document.getAnimations("submit-text");

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

var score = 0;
var currentQuestion = 0;
var questionCount = questions.length -1;

highScoresLink.addEventListener("click", viewScores);

startButton.addEventListener("click", startQuiz);

submitScore.addEventListener("click", viewScores);

returnToHomeButton.addEventListener("click", returnHome)

function startQuiz() {
   introCardCard.style.display = "none";
   questionCardCard.style.display = "block";
   timerCard.style.display = "block";
   check.style.display = "none";
   countDown();
   displayQuestion();
   
};

//issues clearing interval??
var secondsLeft = 60;
var timeLeft = 60;
var trackEndGame = 0;
function countDown() {
    timer.innerHTML = "Time Left: " + timeLeft;
    secondsLeft = setInterval(function() {
        timeLeft--;
        timer.innerHTML = "Time Left: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(secondsLeft);
            timesUp();
        }
    }, 1000);
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
    check.style.display = "block";
    var thisQuestion = questions[currentQuestion];
    if (event.target.id == thisQuestion.answer) {
        score++;
        check.innerHTML = "Correct!"
    } else {
        timeLeft = timeLeft - 10;
        check.innerHTML = "Incorrect!"
    }
    nextQuestion()
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
    timerCard.style.display = "none";
    introCardCard.style.display = "none";
    questionCardCard.style.display = "none";
    submitCardCard.style.display = "block";
    highScoreCardCard.style.display = "none";
    var scorePercent = ((score / 5) * 100)
    trackEndGame = 1;
    submitText.innerHTML = "All Done!"
    finalScore.innerHTML = "You finished with a score of " + scorePercent + "%!";
    
};

function timesUp() {
    timerCard.style.display = "none";
    introCardCard.style.display = "none";
    questionCardCard.style.display = "none";
    submitCardCard.style.display = "block";
    highScoreCardCard.style.display = "none";
    var scorePercent = ((score / 5) * 100)
    trackEndGame = 1;
    submitText.innerHTML = "Time's Up!"
    finalScore.innerHTML = "You finished with a score of " + scorePercent + "%!";
}

function viewScores() {
    introCardCard.style.display = "none";
    questionCardCard.style.display = "none";
    submitCardCard.style.display = "none";
    highScoreCardCard.style.display = "block";
    
};

function returnHome () {
    timerCard.style.display = "none";
    introCardCard.style.display = "block";
    questionCardCard.style.display = "none";
    submitCardCard.style.display = "none";
    highScoreCardCard.style.display = "none";
};