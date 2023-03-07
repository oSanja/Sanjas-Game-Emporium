'use strict';
/*
//selekcija dokumenta
console.log(document.querySelector('.message').textContent);

//selekcija i izmjena textContenta
document.querySelector('.message').textContent = 'Correct!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//value property
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//dobimo number od 1 do 20

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // *** dodajemo Number prije queryja da dobijemo broj, a ne string

  //when there's no input
  //---//
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    //when player wins
    //document.querySelector('.message').textContent = 'Correct!';
    displayMessage('Correct!');
    document.querySelector('.number').textContent = secretNumber;

    // // mijenjanje boje pozadine
    document.querySelector('.number').style.backgroundColor = '#60b347';

    // // mijenjanje veličine fonta
    //document.querySelector('.number').style.width = '30rem';

    //
    //
    // ako je score veći od highscora
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('GAME OVER');
      document.querySelector('.score').textContent = 0;
    }
  }
  /* 
  } else if (guess > secretNumber) {

    //too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.number').style.backgroundColor = '#fff';
  //document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
});
