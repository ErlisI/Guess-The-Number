'use strict';

//Declaring variables
let rNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//When pressing the "Check" button
const getNum = function() {
  let guess = Number (document.querySelector('.guess').value);

  //if we dont input anything
  if(!guess){
    document.querySelector('.message').textContent = 'No Number Was Added!';

  //if we win the game
  }else if (guess === rNumber){
    document.querySelector('.number').textContent = rNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = 'Congratulations, You Found The Hidden Number!';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

  //if the number is bigger than the hidden one
  }else if(guess > rNumber){
    if(score > 1){
      document.querySelector('.message').textContent = 'Try A Lower Number :)';
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = 'You Lost :(';
      document.querySelector('.score').textContent = 0;
    }

  //if the number is smaller than the hidden one
  }else{
    if(score > 1){
      document.querySelector('.message').textContent = 'Try A Higher Number :)';
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = 'You Lost :(';
      document.querySelector('.score').textContent = 0;
    }
  }
}

//When pressing the "Again!" button
const resetGame = function () {

    rNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
}

document.querySelector('.check').addEventListener('click', getNum);
document.querySelector('.again').addEventListener('click', resetGame);
