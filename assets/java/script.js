var introCard = document.getElementById("intro-card");
var start = document.getElementById("start-button");
var questionText = document.getElementById("question-text");
var questionOptions = document.getElementById("question-options");
var optionA = document.getElementById("option-a");
var optionB = document.getElementById("option-b");
var optionC = document.getElementById("option-c");
var optionD = document.getElementById("option-d");
var check = document.getElementById("check");
var submitCard = document.getElementById("submit-card");
var questionCard = document.getElementById("question-card");



var questions = [
    {
        questionText: "<p>filler questionText 1</p>",
        optionA: "filler option A",
        optionB: "filler option B",
        optionC: "filler option C",
        optionD: "filler option D",
        answer: "option-a"
    },{
        questionText: "filler questionText 2",
        optionA: "<button>filler option a</button>",
        optionB: "filler test option B",
        optionC: "filler option C",
        optionD: "filler option D",
        answer: "option-b"
    },{
        questionText: "filler questionText 3",
        optionA: "filler option A",
        optionB: "filler option B",
        optionC: "filler test option C",
        optionD: "filler option D",
        answer: "option-c"
    },{
        questionText: "filler questionText 4",
        optionA: "filler option A",
        optionB: "filler option B",
        optionC: "filler option C",
        optionD: "filler test option D",
        answer: "option-d"
    },{
        questionText: "filler questionText 5",
        optionA: "filler test option A",
        optionB: "filler option B",
        optionC: "filler option C",
        optionD: "filler option D",
        answer: "option-a"
    }
];

var previousQuestion = questions.length - 1;
var currentQuestion = 0;

function displayQuestion() {
    var thisQuestion = questions[currentQuestion];

    questionText.innerHTML = "<p>"+ thisQuestion.questionText +"</p>";
    optionA.innerHTML = "<button class='answer-button'>"+ thisQuestion.optionA +"</button>";
    optionB.innerHTML = "<button class='answer-button'>"+ thisQuestion.optionB +"</button>";
    optionC.innerHTML = "<button class='answer-button'>"+ thisQuestion.optionC +"</button>";
    optionD.innerHTML = "<button class='answer-button'>"+ thisQuestion.optionD +"</button>";
};

start.addEventListener("click", startQuiz);

function startQuiz() {
    introCard.style.display = "none";
    questionCard.style.display = "block";
    displayQuestion();
    var answerButton = document.getElementsByClassName("answer-button");
    for (var i = 0; i < answerButton.length; i++) {
        answerButton[i].addEventListener("click", nextQuestion)
    };
}

function nextQuestion() {
    
    if(currentQuestion < previousQuestion) {
        currentQuestion++;
        displayQuestion();
    var answerButton = document.getElementsByClassName("answer-button");
    for (var i = 0; i < answerButton.length; i++) {
        answerButton[i].addEventListener("click", nextQuestion)
    };
    
    } else {
        resultsScreen();
    }

}

function resultsScreen() {
    submitCard.style.display = "block";
    questionCard.style.display = "none";
    var submitResults = document.getElementById("submit-score");
    submitResults.addEventListener("click", toMain);
}

function toMain() {
    submitCard.style.display = "none";
    questionCard.style.display = "none";
    introCard.style.display = "block";
    currentQuestion = 0;
}

var score = 0;

function calculateScore() {
    if (correct !== questions[currentQuestion].answer) {
        score++;
        console.log(score);
    } else {
        console.log(score);
    }
}

/* var introCard = document.getElementById("intro-card");
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