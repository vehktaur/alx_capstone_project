/* 
let sections = document.querySelectorAll('section');
sections = Array.from(sections);
const links = document.querySelectorAll('a');

const showPage = (target) => {
  const targetId = `${target.getAttribute('href')}`;
  const section = document.querySelector(`${targetId}`);
  section.classList.remove('hidden');

  sections.forEach((otherSection) => {
    if (otherSection != section) {
      setTimeout(() => otherSection.classList.add('hidden'), 800);
      console.log(otherSection, section);
    }
  });
  console.log(targetId);
};

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    showPage(event.target);
    console.log(links);
  });
});
*/

import quizArray from './questions.js';

const body = document.querySelector('body');
const menuButton = document.querySelector('#menu__btn');
const gameLinks = document.querySelectorAll('.game__link');
const quizCategoryTag = document.querySelector('.category');
const questionTag = document.querySelector('.the__question');
const options = document.querySelector('.options');
const nextButton = document.querySelector('.next__btn');
const quizSection = document.querySelector('#quiz');

let quizCategory;
let score;
let currentQuestionIndex;
// Start Quiz Function
const startQuiz = (event) => {
  currentQuestionIndex = 0;
  score = 0;
  quizCategory = event.target.dataset.category;
  quizCategoryTag.textContent = quizCategory;

  quizSection.classList.remove('hidden');
  const category = ['html', 'css', 'python', 'mysql', 'javascript'];

  category.forEach((category) => {
    quizSection.classList.remove(category);
  });
  quizSection.classList.add(quizCategory.toLowerCase());
  body.classList.add('no__overflow');
  showQuestion();
};

// Show Question Function
const showQuestion = () => {
  resetState();
  let questions = [];
  for (let category of quizArray) {
    if (category.category == quizCategory) {
      questions = category.questions;
    }
  }
  let currentQuestion = questions[currentQuestionIndex];

  questionTag.textContent = `${currentQuestion.number}. ${currentQuestion.questionText}`;

  for (let option of currentQuestion.answers) {
    const optionButton = document.createElement('button');
    optionButton.classList.add('option__btn');
    optionButton.textContent = option.text;
    if (option.correct) {
      optionButton.dataset.correct = true;
    }
    optionButton.addEventListener('click', selected);
    options.appendChild(optionButton);
  }
};

const resetState = () => {
  while (options.firstChild) {
    options.removeChild(options.firstChild);
  }
};

const selected = (event) => {
  const selectedBtn = event.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(options.children).forEach((optionBtn) => {
    if (optionBtn.dataset.correct === 'true') {
      optionBtn.classList.add('correct');
    }
    optionBtn.disabled = true;
  });

  if (nextButton.classList.contains('hidden')) {
    nextButton.classList.remove('hidden');
  }
};

const nextQuestion = () => {
  currentQuestionIndex += 1;
  timerFunction();
  showQuestion();
};

nextButton.onclick = nextQuestion;

//add startQuiz function to the onclick of the pla quiz buttons
gameLinks.forEach((gameLink) => {
  gameLink.addEventListener('click', startQuiz);
});

const timeLeftText = document.querySelector('.time_left_txt');
const timeLeft = document.querySelector('.time_left');

let remainingTime;

const timerFunction = () => {
  remainingTime = 15;
  setInterval(() => {
    if (remainingTime > 0) {
      remainingTime = remainingTime - 1;
      timeLeft.textContent = remainingTime;
    }
  }, 1000);
};

const controlView = () => {
  body.classList.remove('no__overflow');
  quizSection.classList.add('hidden');
};

menuButton.addEventListener('click', controlView);
