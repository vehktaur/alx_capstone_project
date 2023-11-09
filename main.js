import quizArray from './questions.js';

// DOM Elements
const body = document.querySelector('body');
const menuButtons = document.querySelectorAll('.menu__btn');
const gameLinks = document.querySelectorAll('.game__link');
const quizCategoryTag = document.querySelector('.category');
const questionTag = document.querySelector('.the__question');
const options = document.querySelector('.options');
const nextButton = document.querySelector('.next__btn');
const quizSection = document.querySelector('#quiz');
const endButtons = document.querySelector('.end-btn-wrapper');
const timeLeftText = document.querySelector('.time_left_txt');
const timeLeft = document.querySelector('.time_left');
const timer = document.querySelector('.timer');

// Quiz Variables
let quizCategory;
let score;
let counter;
let currentQuestionIndex;

// Start Quiz Function
const startQuiz = (event) => {
  resetState();
  timer.classList.remove('hidden');
  currentQuestionIndex = 0;
  score = 0;
  quizCategory = event.target.dataset.category;
  quizCategoryTag.textContent = quizCategory;

  //Unhide/Show quiz section
  quizSection.classList.remove('hidden');
  // Remove existing category classes
  const categoryClasses = ['html', 'css', 'python', 'mysql', 'javascript'];
  categoryClasses.forEach((categoryClass) => {
    quizSection.classList.remove(categoryClass);
  });

  // Add current category class
  quizSection.classList.add(quizCategory.toLowerCase());
  body.classList.add('no__overflow'); //prevent scrolling
  showQuestion();
  clearInterval(counter);
  startTimer(15);
};

// Show Question Function
const showQuestion = () => {
  resetState();
  if (currentQuestionIndex == 15) {
    endQuiz();
  } else {
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
  }
};

// End Quiz Function
const endQuiz = () => {
  timer.classList.add('hidden');
  clearInterval(counter);
  nextButton.classList.add('hidden');
  questionTag.textContent = '';
  const congratsText = document.createElement('p');
  congratsText.innerHTML = `Congratulations on completing the Quiz! 🎉. Your scored ${score}/15 <br> You can Retake the Quiz if you'd like or Quit and try another Quiz`;
  congratsText.classList.add('congrats');

  const retakeBtn = document.createElement('a');
  retakeBtn.textContent = `Try Again`;
  retakeBtn.onclick = restartQuiz;

  const quitBtn = document.createElement('a');
  quitBtn.textContent = 'Quit';
  quitBtn.href = '#quiz__menu';
  quitBtn.addEventListener('click', controlView);

  endButtons.appendChild(quitBtn);
  endButtons.appendChild(retakeBtn);
  options.appendChild(congratsText);
};

// Restart Quiz Function
const restartQuiz = () => {
  startQuiz({ target: { dataset: { category: quizCategory } } });
};

// Reset State Function
const resetState = () => {
  while (options.firstChild) {
    options.removeChild(options.firstChild);
  }
  while (endButtons.firstChild) {
    endButtons.removeChild(endButtons.firstChild);
  }
};

// Next Question Function
const nextQuestion = () => {
  nextButton.classList.toggle('hidden');
  currentQuestionIndex += 1;
  startTimer(15);
  showQuestion();
};
nextButton.onclick = nextQuestion;

// Selected Function
const selected = (event) => {
  clearInterval(counter);
  nextButton.classList.toggle('hidden');
  if (event.target) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
      selectedBtn.classList.add('correct');
      score++;
    } else {
      selectedBtn.classList.add('incorrect');
    }
  }

  Array.from(options.children).forEach((optionBtn) => {
    if (optionBtn.dataset.correct === 'true') {
      optionBtn.classList.add('correct');
    }
    optionBtn.disabled = true;
  });
};

// Event Listeners for Take Quiz Buttons
gameLinks.forEach((gameLink) => {
  gameLink.addEventListener('click', startQuiz);
});

// Control View Function
const controlView = () => {
  body.classList.remove('no__overflow');
  setTimeout(() => quizSection.classList.add('hidden'), 500);
};

// Event Listeners for Menu Buttons
menuButtons.forEach((menuBtn) => {
  menuBtn.addEventListener('click', controlView);
});

// Timer Function
function startTimer(time) {
  timeLeftText.textContent = 'Time Left';
  counter = setInterval(timer, 1000);

  function timer() {
    timeLeft.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(counter);
      selected({ target: false });
      timeLeftText.textContent = 'Time Out';
    }
  }
}
