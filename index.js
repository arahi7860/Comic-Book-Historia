// 20 Questions Trivia URL Random Questions Comics
// const URL = "https://opentdb.com/api.php?amount=20&category=29";

const URL = "https://opentdb.com/api.php?amount=1&category=29&type=multiple";
// let QUESTION = 1;
// let data;
// 15 Questions Trivia URL
// const URL =
//   "https://opentdb.com/api.php?amount=15&category=29&difficulty=hard&type=multiple";

// Another 15 questions Trivia URL
// const URL =
//   "https://opentdb.com/api.php?amount=15&category=29&difficulty=hard&type=multiple";

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
  json.results[0].question.replace(
    /(&#(\d+);)/g,
    (match, capture, charCode) => {
      String.fromCharCode(charCode);
    }
  );
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

  _question.innerText = `${json.question}`;
  _question.innerText.replace(/(&#(\d+);)/g, (match, capture, charCode) => {
    String.fromCharCode(charCode);
  });

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
  });
  console.log(correctAnswer);
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
      _result.innerHTML = `Incorrect! The correct answer was ${correctAnswer}`;
    }
  }
  checkingCount();
};

const checkingCount = () => {
  askedCount++;
  settingCount();
  if (askedCount == totalQuestion) {
    alert("You're finished!");
  } else {
    setTimeout(() => {
      getQuestions();
    }, 200);
  }
};

const settingCount = () => {
  _totalQuestion.textContent = totalQuestion;
  _correctScore.textContent = correctScore;
};
// getQuestions();
// Create An Array to hold all the answers
// Once the user picks a choice compare it to an array of right answers
// If there is a match then it's correct if not it's incorrect
// const displayMessage = function (message) {
//   document.querySelector(".message").textContent = message;
// };

// let arr = [];
// async function addQuestions() {
//   const prompt = await getQuestions();

//   let i = 1;
//   let answer = false;
//   // for (const layout of prompt) {}
//   for (const layout of prompt) {
//     // if(layout.question)
//     const p = document.createElement("p");
//     p.textContent = layout.question;
//     const form = document.querySelector("form");
//     form.append(p);
//     p.classList.add(`question`);

//     document.querySelectorAll("p").forEach((p) => {
//       p.innerText.replace(/(&#(\d+);)/g, (match, capture, charCode) =>
//         String.fromCharCode(charCode)
//       );
//     });

//     console.log(p);

//     let answers = [];
//     answers.push(layout.correct_answer);
//     for (let i = 0; i < layout.incorrect_answers.length; i++) {
//       answers.push(layout.incorrect_answers[i]);
//     }

//     const getShuffledArr = (arr) => {
//       const newArr = arr.slice();
//       for (let i = newArr.length - 1; i > 0; i--) {
//         const rand = Math.floor(Math.random() * (i + 1));
//         [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
//       }
//       return newArr;
//     };
//     const shuffledAnswers = getShuffledArr(answers);
//     // console.log(shuffledAnswers);

//     const newForm = (counter) => {
//       console.log(counter);
//       for (let i = 0; i < shuffledAnswers.length; i++) {
//         const input = document.createElement("input");
//         const label = document.createElement("label");
//         // console.log("newForm");
//         input.type = "radio";
//         input.id = `choices-${i + 1}`;
//         input.name = `question-${counter}`;
//         label.htmlFor = `choices-${i + 1}`;

//         // Store all of your data in a variable that includes all questions and answers
//         // Create a for loop that goes through the data and it outputs the question
//         // one at a time

//         label.innerHTML = shuffledAnswers[i];
//         form.append(input, label);

//         console.log(input);
//         console.log(label);
//         // console.log(`answers: ${shuffledAnswers.length}`);
//         // console.log(`index: ${i}`);

//         // if (i > shuffledAnswers.length) {
//         //   input.type = "submit";
//         // }
//       }
//     };
//     newForm(i);
//     i++;

//     // const checkAnswer = () => {
//     //       let checkButton = true;
//     //       if(document.querySelector());
//     // };
//     // checkAnswer();
//   }

//   const button = document.createElement("input");
//   button.type = "submit";
//   button.name = "enter";
//   document.querySelector("form").append(button);
// }

// addQuestions();

// // const userPrompt = async () => {
// //   const add = await addQuestions();

// //   add.map(() => {});
// // };
// // for (let i = 0; i < shuffledAnswers.length; i++) {
// //   if (
// //     document.querySelector(`#choices-${i}`) === layout.correct_answer
// //   ) {
// //     displayMessage("Correct!");
// //   } else if (
// //     document.querySelector(`choices-${i}`) !== layout.correct_answer
// //   ) {
// //     displayMessage("Incorrect!");
// //   }
// // }

 // console.log(json.results);
  // const qa = json.results.map(
  //   ({ question, correct_answer, incorrect_answers }) => ({
  //     question,
  //     correct_answer,
  //     incorrect_answers,
  //   })
  // );
  // console.log(qa)