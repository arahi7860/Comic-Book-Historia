// 25 Questions Trivia URL Random Questions
const URL = "https://opentdb.com/api.php?amount=25&category=29";

// 15 Questions Trivia URL
// const URL =
//   "https://opentdb.com/api.php?amount=15&category=29&difficulty=hard&type=multiple";

// Another 15 questions Trivia URL
// const URL =
//   "https://opentdb.com/api.php?amount=15&category=29&difficulty=hard&type=multiple";

async function getQuestions() {
  const res = await fetch(URL);
  const json = await res.json();
  console.log(json);
  return json[0];
}


getQuestions();
