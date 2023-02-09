const URL = "https://opentdb.com/api.php?amount=1&category=29&type=multiple";

const _question = document.querySelector("#question");
const _options = document.querySelector(".quiz-options");
const _correctScore = document.querySelector("#correct-score");
const _totalQuestion = document.querySelector("#total-question");
const _enter = document.querySelector("#check-answer");
const _tryAgainBtn = document.querySelector("#try-again");
const _result = document.querySelector("#result");

let correctAnswer = "";
let correctScore = 0;
let askedCount = 0;
let totalQuestion = 15;

const allEventListeners = () => {
  _enter.addEventListener("click", seeAnswer);
  _tryAgainBtn.addEventListener("click", quizAgain);
};

document.addEventListener("DOMContentLoaded", () => {
  getQuestions();
  allEventListeners();
  _totalQuestion.textContent = totalQuestion;
  _correctScore.textContent = correctScore;
});

async function getQuestions() {
  const result = await fetch(URL);
  const json = await result.json();
  // json.results[0].question.replace(
  //   /(&#(\d+);)/g,
  //   (match, capture, charCode) => {
  //     String.fromCharCode(charCode);
  //   }
  // );
  _result.innerHTML = "";

  showQuestions(json.results[0]);
  // return qa;
  // Create a conditional that will increment i when you select an answer
  // Make sure to add a submit to load the next batch of questions
}

const showQuestions = (json) => {
  correctAnswer = json.correct_answer;
  let incorrectAnswer = json.incorrect_answers;
  // let question = json.question;
  let myOptionsList = incorrectAnswer;

  myOptionsList.splice(
    Math.floor(Math.random() * (incorrectAnswer.length + 1)),
    0,
    correctAnswer
  );

  // console.log(myOptionsList);
  // console.log(correctAnswer);
  // console.log(_question);
  decode(correctAnswer);
  decode(incorrectAnswer);
  _question.innerText = decode(json.question);

  // _question.innerText.replace(/(&#(\d+);)/g, (match, capture, charCode) => {
  //   String.fromCharCode(charCode);
  // });

  const options = document.querySelector(".quiz-options");

  for (let i = 0; i < myOptionsList.length; i++) {
    document.createElement("li");
    let items = document.querySelector("li");
    items.innerText = myOptionsList[i];
    options.append(items);
    // console.log(myOptionsList[i]);
  }

  chooseOptions();
};

// StackOverFlow Javascript Quotation problem
const decode = (str) => {
  let txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
};

// Select Options
const chooseOptions = () => {
  _options.querySelectorAll("li").forEach((option) => {
    option.addEventListener("click", () => {
      const li = document.querySelectorAll("li");
      li.forEach((element) => {
        // console.log(element);
        element.classList.remove("selected");
      });
      option.classList.add("selected");
    });
    option.classList.remove("selected");
  });
  // console.log(correctAnswer);
};

const seeAnswer = () => {
  _enter.disabled = false;
  if (_options.querySelector(".selected")) {
    const li = document.querySelector(".selected");
    let selectedChoice = li.textContent;
    console.log(selectedChoice);
    if (selectedChoice === correctAnswer) {
      correctScore++;
      _result.innerHTML = `Correct Answer!`;
    } else {
      _result.innerHTML = `Incorrect! The correct answer was ${correctAnswer}!`;
    }
    checkingCount();
  } else {
    _result.innerHTML = `Choose an option. It's not in the air!`;
    _enter.disabled = false;
  }
};

const checkingCount = () => {
  askedCount++;
  settingCount();
  if (askedCount == totalQuestion) {
    _result.innerHTML += ` Your score is ${correctScore}/${totalQuestion}.`;
    _tryAgainBtn.style.display = "block";
    _enter.style.display = "none";
  } else {
    setTimeout(() => {
      getQuestions();
    }, 3000);
  }
};

const settingCount = () => {
  _totalQuestion.textContent = totalQuestion;
  _correctScore.textContent = correctScore;
};

const quizAgain = () => {
  correctScore = 0;
  askedCount = 0;
  _tryAgainBtn.style.display = "none";
  _enter.style.display = "block";
  _enter.disabled = false;
  settingCount();
  getQuestions();
};
