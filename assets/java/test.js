var highScoresLink = document.getElementById("high-scores-link");
var timer = document.getElementById("timer")
//var introCard = document.getElementById("intro-card");
var startButton = document.getElementById("start-button");
//var questionCard = document.getElementById("question-card")
var questionText = document.getElementById("question-text");
//var questionOptions = document.getElementById("question-options");
var optionA = document.getElementById("option-a");
var optionB = document.getElementById("option-b");
var optionC = document.getElementById("option-c");
var optionD = document.getElementById("option-d");
var check = document.getElementById("check-answer");
var finalScore = document.getElementById("final-score");
//var submitCard = document.getElementById("submit-card");
var submitScore = document.getElementById("submit-score-button");
//var highScoreCard = document.getElementById("high-score-card");
//var highScores = document.getElementById("high-scores");
var resetButton = document.getElementById("reset-button");
var returnToHomeButton = document.getElementById("return-to-home-button");
var questionCardCard = document.getElementById("question-card-card");
var submitCardCard = document.getElementById("submit-card-card");
var highScoreCardCard = document.getElementById("high-score-card-card");
var introCardCard = document.getElementById("intro-card-card");
var timerCard = document.getElementById("timer-card");
var submitText = document.getElementById("submit-text");
//var storeInitials = document.getElementById("initials");
var highScoreList = document.getElementById("high-score-list");
var li = document.createElement("li");

var questions = [
    {
        questionText: "<p>What does HTML stand for?</p>",
        optionA: "<button class='answer-button' id='A' onclick='checkAnswer(event)'>Hyper Text Markup Language</button>",
        optionB: "<button class='answer-button' id='B' onclick='checkAnswer(event)'>How To Make Lasagna</button>",
        optionC: "<button class='answer-button' id='C' onclick='checkAnswer(event)'>Hold This, My Love <3</button>",
        optionD: "<button class='answer-button' id='D' onclick='checkAnswer(event)'>Has The Microwave Leaked?</button>",
        answer: "A"
    },{
        questionText: "<p>What does CSS Stand for</p>",
        optionA: "<button class='answer-button' id='A' onclick='checkAnswer(event)'>Cold Simmer Sauce</button>",
        optionB: "<button class='answer-button' id='B' onclick='checkAnswer(event)'>Cascading Style Sheets</button>",
        optionC: "<button class='answer-button' id='C' onclick='checkAnswer(event)'>Crocodiles, Snakes, & Sharks</button>",
        optionD: "<button class='answer-button' id='D' onclick='checkAnswer(event)'>Can Seashells Swim?</button>",
        answer: "B"
    },{
        questionText: "<p>Javascript _________?</p>",
        optionA: "<button class='answer-button' id='A' onclick='checkAnswer(event)'>adds content on the webpage</button>",
        optionB: "<button class='answer-button' id='B' onclick='checkAnswer(event)'>adds styling to the webpage</button>",
        optionC: "<button class='answer-button' id='C' onclick='checkAnswer(event)'>adds interactivity to the webpage</button>",
        optionD: "<button class='answer-button' id='D' onclick='checkAnswer(event)'>adds secrets to the webpage</button>",
        answer: "C"
    },{
        questionText: "<p>CSS files are linked in what part of the HTML file.</p>",
        optionA: "<button class='answer-button' id='A' onclick='checkAnswer(event)'>header</button>",
        optionB: "<button class='answer-button' id='B' onclick='checkAnswer(event)'>main</button>",
        optionC: "<button class='answer-button' id='C' onclick='checkAnswer(event)'>footer</button>",
        optionD: "<button class='answer-button' id='D' onclick='checkAnswer(event)'>head</button>",
        answer: "D"
    },{
        questionText: "<p>JavaScript can be fun</p>",
        optionA: "<button class='answer-button' id='A' onclick='checkAnswer(event)'>Yes</button>",
        optionB: "<button class='answer-button' id='B' onclick='checkAnswer(event)'>No</button>",
        optionC: "<button class='answer-button' id='C' onclick='checkAnswer(event)'>No!</button>",
        optionD: "<button class='answer-button' id='D' onclick='checkAnswer(event)'>NOOOOOOO!!!!!!</button>",
        answer: "A"
    }
];

var score = 0;
var currentQuestion = 0;
var questionCount = questions.length -1;
var secondsLeft = 60;
var timeLeft = 60;
var trackEndGame = 0;

highScoresLink.addEventListener("click", viewScores);

startButton.addEventListener("click", startQuiz);

submitScore.addEventListener("click", viewScores);

returnToHomeButton.addEventListener("click", returnHome);

resetButton.addEventListener("click", clearStorage);

function displayQuestion() {
    var thisQuestion = questions[currentQuestion];
    questionText.innerHTML = thisQuestion.questionText;
    optionA.innerHTML = thisQuestion.optionA;
    optionB.innerHTML = thisQuestion.optionB;
    optionC.innerHTML = thisQuestion.optionC;
    optionD.innerHTML = thisQuestion.optionD;
};

function enterInitials() {
    timerCard.style.display = "none";
    introCardCard.style.display = "none";
    questionCardCard.style.display = "none";
    submitCardCard.style.display = "block";
    highScoreCardCard.style.display = "none";
    var scorePercent = ((score / 5) * 100)
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
    submitText.innerHTML = "Time's Up!"
    finalScore.innerHTML = "You finished with a score of " + scorePercent + "%!";
}

function viewScores() {
    localStorage.setItem("userScore", ((score / 5) * 100));
    var initialsStore = document.getElementById("initials").value;
    localStorage.setItem("userInitials", initialsStore);
    function add() {
        highScoreList.appendChild(li);
        li.innerHTML = "<p>" + localStorage.getItem('userInitials') + " " + localStorage.getItem('userScore') + "</p>"
    };
    add();
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
    currentQuestion = 0;
    score = 0;
    secondsLeft = 60;
    timeLeft = 60;
    trackEndGame = 1;
};

function nextQuestion() {
    if (currentQuestion >= questionCount) {
        enterInitials();
    } else {
        currentQuestion++;
        displayQuestion();
    };
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

function countDown() {
    timer.innerHTML = "Time Left: " + timeLeft;
    var timerLeft = setInterval(function() {
        timeLeft--;
        timer.innerHTML = "Time Left: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerLeft);
            timesUp();
        } else if (trackEndGame === 1) {
            clearInterval(timerLeft);
            trackEndGame = 0;
        }
    }, 1000);
};

function startQuiz() {
   introCardCard.style.display = "none";
   questionCardCard.style.display = "block";
   timerCard.style.display = "block";
   check.style.display = "none";
   countDown();
   displayQuestion();
   
};



function clearStorage() {
    localStorage.clear();
    highScoreList.removeChild(li);
}











//how do I reset everything and start again on the start again click??

var highScoresLink = document.getElementById("high-scores-link");
var timer = document.getElementById("timer");
var introCard = document.getElementById("intro-card");
var startButton = document.getElementById("start-button");
var questionCard = document.getElementById("question-card");
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
var submitText = document.getElementById("submit-text");
var storeInitials = document.getElementById("initials");

var questions = [
  {
    questionText: "<p>What does HTML stand for?</p>",
    optionA:
      "<button class='answer-button' id='A' onclick='checkAnswer(event)'>Hyper Text Markup Language</button>",
    optionB:
      "<button class='answer-button' id='B' onclick='checkAnswer(event)'>How To Make Lasagna</button>",
    optionC:
      "<button class='answer-button' id='C' onclick='checkAnswer(event)'>Hold This, My Love <3</button>",
    optionD:
      "<button class='answer-button' id='D' onclick='checkAnswer(event)'>Has The Microwave Leaked?</button>",
    answer: "A",
  },
  {
    questionText: "<p>What does CSS Stand for</p>",
    optionA:
      "<button class='answer-button' id='A' onclick='checkAnswer(event)'>Cold Simmer Sauce</button>",
    optionB:
      "<button class='answer-button' id='B' onclick='checkAnswer(event)'>Cascading Style Sheets</button>",
    optionC:
      "<button class='answer-button' id='C' onclick='checkAnswer(event)'>Crocodiles, Snakes, & Sharks</button>",
    optionD:
      "<button class='answer-button' id='D' onclick='checkAnswer(event)'>Can Seashells Swim?</button>",
    answer: "B",
  },
  {
    questionText: "<p>Javascript _________?</p>",
    optionA:
      "<button class='answer-button' id='A' onclick='checkAnswer(event)'>adds content on the webpage</button>",
    optionB:
      "<button class='answer-button' id='B' onclick='checkAnswer(event)'>adds styling to the webpage</button>",
    optionC:
      "<button class='answer-button' id='C' onclick='checkAnswer(event)'>adds interactivity to the webpage</button>",
    optionD:
      "<button class='answer-button' id='D' onclick='checkAnswer(event)'>adds secrets to the webpage</button>",
    answer: "C",
  },
  {
    questionText: "<p>CSS files are linked in what part of the HTML file.</p>",
    optionA:
      "<button class='answer-button' id='A' onclick='checkAnswer(event)'>header</button>",
    optionB:
      "<button class='answer-button' id='B' onclick='checkAnswer(event)'>main</button>",
    optionC:
      "<button class='answer-button' id='C' onclick='checkAnswer(event)'>footer</button>",
    optionD:
      "<button class='answer-button' id='D' onclick='checkAnswer(event)'>head</button>",
    answer: "D",
  },
  {
    questionText: "<p>JavaScript can be fun</p>",
    optionA:
      "<button class='answer-button' id='A' onclick='checkAnswer(event)'>Yes</button>",
    optionB:
      "<button class='answer-button' id='B' onclick='checkAnswer(event)'>No</button>",
    optionC:
      "<button class='answer-button' id='C' onclick='checkAnswer(event)'>No!</button>",
    optionD:
      "<button class='answer-button' id='D' onclick='checkAnswer(event)'>NOOOOOOO!!!!!!</button>",
    answer: "A",
  },
];

var score = 0;
var currentQuestion = 0;
var questionCount = questions.length - 1;

highScoresLink.addEventListener("click", viewScores);

startButton.addEventListener("click", startQuiz);

submitScore.addEventListener("click", viewScores);

returnToHomeButton.addEventListener("click", returnHome);

function startQuiz() {
  introCardCard.style.display = "none";
  questionCardCard.style.display = "block";
  timerCard.style.display = "block";
  check.style.display = "none";
  countDown();
  displayQuestion();
}

//issues clearing interval?? Timer keeps running into next quiz... -AC

/* 
    It is safest to store any global variables at the top
    of the document, so we don't have to worry about whether
    or not they are available to all of our functions.
    The countDown function is called above but defined below,
    and uses two variables that are defined between. -JD
*/
var secondsLeft = 60;
var timeLeft = 60;
/* 
    Since this variable only ever stores either 1 or 0,
    it makes sense to use a boolean, something like
    var isGameOver = true; -JD
    I didn't use this method but will be digging into it deeper at a later time -AC
*/
var trackEndGame = 0;
function countDown() {
  timer.innerHTML = "Time Left: " + timeLeft;
  /* 
    setTimeout is typically used to execute a function a single
    time after a set number of seconds.  In the case of a timer,
    we should used setInterval instead.  That way the function in
     the body will be called again and again at the chosen interval until the interval is cleared. -JD
  */
  secondsLeft = setTimeout(function () {
    timeLeft--;
    timer.innerHTML = "Time Left: " + timeLeft;
    if (timeLeft <= 0 || trackEndGame === 1) {
      clearTimeout(secondsLeft);
      timesUp();
    }
  }, 1000);
}

function displayQuestion() {
  var thisQuestion = questions[currentQuestion];
  questionText.innerHTML = thisQuestion.questionText;
  optionA.innerHTML = thisQuestion.optionA;
  optionB.innerHTML = thisQuestion.optionB;
  optionC.innerHTML = thisQuestion.optionC;
  optionD.innerHTML = thisQuestion.optionD;
}

function checkAnswer(event) {
  //took SO long to get this!!  Event target!! -AC
  check.style.display = "block";
  var thisQuestion = questions[currentQuestion];
  if (event.target.id == thisQuestion.answer) {
    score++;
    check.innerHTML = "Correct!";
  } else {
    timeLeft = timeLeft - 10;
    check.innerHTML = "Incorrect!";
  }
  nextQuestion();
}

function nextQuestion() {
  if (currentQuestion >= questionCount) {
    enterInitials();
  } else {
    currentQuestion++;
    displayQuestion();
  }
}

function enterInitials() {
  timerCard.style.display = "none";
  introCardCard.style.display = "none";
  questionCardCard.style.display = "none";
  submitCardCard.style.display = "block";
  highScoreCardCard.style.display = "none";
  var scorePercent = (score / 5) * 100;
  trackEndGame = 1;
  submitText.innerHTML = "All Done!";
  finalScore.innerHTML = "You finished with a score of " + scorePercent + "%!";
}

function timesUp() {
  timerCard.style.display = "none";
  introCardCard.style.display = "none";
  questionCardCard.style.display = "none";
  submitCardCard.style.display = "block";
  highScoreCardCard.style.display = "none";
  var scorePercent = (score / 5) * 100;
  trackEndGame = 1;
  submitText.innerHTML = "Time's Up!";
  finalScore.innerHTML = "You finished with a score of " + scorePercent + "%!";
}

function viewScores() {
  /* The var is null because the selector can't find
        the element.  Check your attributes in index.html. -JD
    */

  //Keeps saying storeInitials is Null...
  /*    var highScoreData = {
        initials: storeInitials.value,
        score: ((score / 5) * 100),
    };
    localStorage.setItem("highScoreData", JSON.stringify(highScoreData)); -AC
*/

  /* 
    You'll probably want to setItem to localStorage at the end of a game
    when the initals are submitted, and getItem whenever you render the element
    that displays high scores. -JD
*/
  introCardCard.style.display = "none";
  questionCardCard.style.display = "none";
  submitCardCard.style.display = "none";
  highScoreCardCard.style.display = "block";
}

function returnHome() {
  timerCard.style.display = "none";
  introCardCard.style.display = "block";
  questionCardCard.style.display = "none";
  submitCardCard.style.display = "none";
  highScoreCardCard.style.display = "none";
}

