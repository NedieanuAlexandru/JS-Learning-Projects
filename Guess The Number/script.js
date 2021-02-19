'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// DRY refactoring
// Message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Again! button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';

  // Example of DRY
  // document.querySelector('.message').textContent = 'Start guessing...';
});

// Check! button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
    }

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎊 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

// This is a part of the code before DRY principle

//   // When guess is too high
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📈 Too high';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '💥 You lost the game';
//     document.querySelector('.score').textContent = 0;
//   }

//   // When guess is too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📉 Too low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '💥 You lost the game';
//     document.querySelector('.score').textContent = 0;
//   }
