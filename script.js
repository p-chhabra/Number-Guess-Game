'use strict';

let num = Math.floor(Math.random() * 20 + 1);
console.log(num);

let highScore = document.querySelector('.highscore').textContent;

let score = Number(document.querySelector('.score').textContent);

//Function for again button
const againBtnClick = () => {
  num = Math.floor(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
};

//Function for check button
const checkBtnClick = () => {
  var guessValue = Number(document.querySelector('.guess').value);
  console.log(guessValue);

  //When input is empty
  if (!guessValue) {
    document.querySelector('.message').textContent = '🚨 Enter a Number';
  }
  //For Right Guess
  else if (guessValue === num) {
    document.querySelector('.number').textContent = num;
    document.querySelector('.message').textContent = '🎉 Number Matched!';
    score++;
    document.querySelector('.score').textContent = score;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  //When Guess is too high
  else if (guessValue > num) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  //When guess is too low
  else if (guessValue < num) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
};

document.querySelector('.check').addEventListener('click', checkBtnClick);
document.querySelector('.again').addEventListener('click', againBtnClick);
