var box1 = document.getElementById("box1");
var start = document.getElementById("start-button");
var questionText = document.getElementById("question-text");
var questionOptions = document.getElementById("question-options");
var optionA = document.getElementById("option-a");
var optionB = document.getElementById("option-b");
var optionC = document.getElementById("option-c");
var optionD = document.getElementById("option-d");
var check = document.getElementById("check");

var questions = [
    {
        questionText: "filler questionText 1",
        optionA: "filler option A",
        optionB: "filler option B",
        optionC: "filler option C",
        optionD: "filler option D",
        answer: "a"
    },{
        questionText: "filler questionText 2",
        optionA: "filler option A",
        optionB: "filler option B",
        optionC: "filler option C",
        optionD: "filler option D",
        answer: "b"
    },{
        questionText: "filler questionText 3",
        optionA: "filler option A",
        optionB: "filler option B",
        optionC: "filler option C",
        optionD: "filler option D",
        answer: "c"
    },{
        questionText: "filler questionText 4",
        optionA: "filler option A",
        optionB: "filler option B",
        optionC: "filler option C",
        optionD: "filler option D",
        answer: "d"
    },{
        questionText: "filler questionText 5",
        optionA: "filler option A",
        optionB: "filler option B",
        optionC: "filler option C",
        optionD: "filler option D",
        answer: "a"
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
    box1.style.display = "none";
    displayQuestion();
    var answerButton = document.getElementsByClassName("answer-button");
    for (var i = 0; i < answerButton.length; i++) {
        answerButton[i].addEventListener("click", nextQuestion)
    };
}

function nextQuestion() {
    box1.style.display = "none";
    if(currentQuestion < previousQuestion) {
        currentQuestion++;
        displayQuestion();
    var answerButton = document.getElementsByClassName("answer-button");
    for (var i = 0; i < answerButton.length; i++) {
        answerButton[i].addEventListener("click", nextQuestion)
    };
    console.log(currentQuestion);
    } else {
        return;
    }

}