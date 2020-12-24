'use strict';
//? Selecting the elements
const elementScore0 = document.getElementById('score--0');
const elementScore1 = document.getElementById('score--1');
const elementCurrent0 = document.getElementById('current--0');
const elementCurrent1 = document.getElementById('current--1');
const elementPlayer0 = document.querySelector('.player--0');
const elementPlayer1 = document.querySelector('.player--1');
const roleDiceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const newGameButton = document.querySelector('.btn--new');

//? Setting the score to 0 and hiding the dice

dice.classList.add('hidden');

let scores, activePlayer, currentScore, playing;

const init = function () {
   //? Initizializing default values
   scores = [0, 0];
   activePlayer = 0;
   currentScore = 0;
   playing = true;

   elementScore0.textContent = 0;
   elementScore1.textContent = 0;
   elementCurrent0.textContent = 0;
   elementCurrent1.textContent = 0;
   elementPlayer0.classList.remove('player--winner');
   elementPlayer1.classList.remove('player--winner');
   elementPlayer0.classList.add('player--active');
   elementPlayer1.classList.remove('player--active');
};

init();

const switchPlayer = function () {
   document.getElementById(`current--${activePlayer}`).textContent = 0;
   currentScore = 0;
   activePlayer = activePlayer === 0 ? 1 : 0;
   elementPlayer0.classList.toggle('player--active');
   elementPlayer1.classList.toggle('player--active');
};

//? Firing an event on Dice Button
roleDiceButton.addEventListener('click', function () {
   if (playing) {
      //? generate Random Dice Number
      let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
      console.log(randomDiceNumber);
      //? Display the Dice
      dice.classList.remove('hidden');
      dice.src = `dice-${randomDiceNumber}.png`;

      //? check for rolled 1: if true switch to next player
      //?check for role 1
      if (randomDiceNumber !== 1) {
         //? and if its not one then then keep rolling dice and add the score to current score
         currentScore += randomDiceNumber;
         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      } else {
         //? Switch to another player
         switchPlayer();
      }
   }
});

holdButton.addEventListener('click', function () {
   if (playing) {
      //? Adding the current score to main score
      let activeMainScore = (scores[activePlayer] += currentScore);
      document.getElementById(`score--${activePlayer}`).textContent = activeMainScore;

      //? check if mainScore >= 100
      if (activeMainScore >= 100) {
         playing = false;
         //? finish the game
         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
         elementPlayer1.classList.remove('player--active');
         dice.classList.add('hidden');
      } else {
         //?switch to another player
         switchPlayer();
      }
   }
});

newGameButton.addEventListener('click', init);
