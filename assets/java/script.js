var box1 = document.getElementById("box1");
var start = document.getElementById("start");
var questionText = getElementById("question-text");
var questionOptions = getElementById("question-options");
var optionA = getElementById("option-a");
var optionB = getElementById("option-b");
var optionC = getElementById("option-c");
var optionD = getElementById("option-d");

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
    optionA.innerHTML = thisQuestion.optionA;
    optionB.innerHTML = thisQuestion.optionB;
    optionC.innerHTML = thisQuestion.optionC;
    optionD.innerHTML = thisQuestion.optionD;
};

start.addEventListener("click", startQuiz);

function startQuiz() {
    box1.style.display = "none"
    displayQuestion();
}