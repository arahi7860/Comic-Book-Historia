### How Much of a Comic Fan Are You?

- **App Title**: Comic Book Historia
- **App Description**: Test your knowledge in 20 questions of multiple-choice and true or false questions on Comic Book Trivia.
- **API**: The API I am using is https://opentdb.com/api_config.php
- **API Snippet**:

{
category: "Entertainment: Comics",
type: "boolean",
difficulty: "medium",
question: "In the webcomic Homestuck, the first character introduced is Dave Strider.",
correct_answer: "False",
incorrect_answers: [
"True"
]
},

**API Code**:

const URL = "https://opentdb.com/api.php?amount=1&category=29&type=multiple";

async function getQuestions() {
const res = await fetch(URL);
const json = await res.json();
console.log(json);
return json[0];
}

getQuestions();

- **Wireframes**:

- **MVP**:

* Being able to press the next button
* Press an answer to the question
* Having the options show on page
* Give a score based on your performance and determine what kind of fan are you

- **Post-MVP**:

* Try to add images onto each question
* Try to make it more stylized and exquisite
* Make the containers look good
* Try to expand on more of the trivia

- **Goals**:

* Create all the necessary html variables
* Develop the logic for the Javascript functionality, then debug to get
  to the next question.
* Develop the CSS
* Refine the code to make it readable as possible.
* Work on debugging the code in terms of any mistakes and parts of the website that don't work.

- **Priority Matrix**:

- **Timeframes**:

* Coding: From Tuesday - Friday. I will be working on some of it during the weekend.
