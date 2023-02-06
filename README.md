### How Much of a Comic Fan Are You?

- **App Title**: Comic Book Historia
- **App Description**: Test your knowledge in 15 questions of multiple-choice on Comic Book Trivia.
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

async function getQuestions() {
  const result = await fetch(URL);
  const json = await result.json();
  
  _result.innerHTML = "";

  showQuestions(json.results[0]);
}

getQuestions();

- **Wireframes**: ![WEBSITE-ROUGH-SKETCH](https://user-images.githubusercontent.com/54910341/216992522-78c905f5-f0da-4e68-85cb-258aa5577837.png)


- **MVP**:

* Being able to press the next button
* Press an answer to the question
* Having the options show on page
* Give a score based on your performance and determine what kind of fan are you

- **Post-MVP**:

* Try to add images onto each question
* Try to make it more stylized and exquisite
* Make the containers look good
* Add extra trivia on other subjects

- **Goals**:

* Create all the necessary html variables
* Develop the logic for the Javascript functionality, then debug to get
  to the next question.
* Develop the CSS
* Refine the code to make it readable as possible.
* Work on debugging the code in terms of any mistakes and parts of the website that don't work.

- **Priority Matrix**: ![PRIORITY-MATRIX](https://user-images.githubusercontent.com/54910341/216992549-4e75ca79-3c63-4534-9aeb-2f069c006998.png)

- **Timeframes**:

* Coding: From Tuesday - Friday. I will be working on some of it during the weekend.
