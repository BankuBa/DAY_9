let questions = [
  {
    question: "What is the capital of Ghana?",
    answer: [
      { text: "Accra", correct: true },
      { text: "Kumasi", correct: false },
      { text: "Tamale", correct: false },
      { text: "Takoradi", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: [
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Mars", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    answer: [
      { text: "Harper Lee", correct: true },
      { text: "Mark Twain", correct: false },
      { text: "Ernest Hemingway", correct: false },
      { text: "F. Scott Fitzgerald", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answer: [
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Pb", correct: false },
      { text: "Fe", correct: false },
    ],
  },
];

let questionElement = document.querySelector(".question");

let answerContainer = document.querySelector(".answer_buttons");

let nextButton = document.querySelector(".next_button");

let currentIndex = 0


nextButton.addEventListener("click", () => {
    questionElement.innerHTML = questions[currentIndex].question;

  questions[currentIndex].answer.forEach((ans) => {
    let buttons = document.createElement("button");
    buttons.classList.add("answer");
    answerContainer.appendChild(buttons);
    buttons.innerHTML = ans.text;
  });
  currentIndex += 1
});
