'use strict';
//? Selecting the elements
const elementScore0 = document.getElementById('score--0');
const elementScore1 = document.getElementById('score--1');
const elementCurrent0 = document.getElementById('current--0');
const elementCurrent1 = document.getElementById('current--1');
const roleDiceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const newGameButton = document.querySelector('.btn--new');

//? Setting the score to 0 and hiding the dice
elementScore0.textContent = 0;
elementScore1.textContent = 0;
dice.classList.add('hidden');
let currentScore = 0;
//? Firing an event on Dice Button
roleDiceButton.addEventListener('click', function () {
   //? generate Random Dice Number
   let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
   console.log(randomDiceNumber);
   //? Display the Dice
   dice.classList.remove('hidden');
   dice.src = `dice-${randomDiceNumber}.png`;

   //? check for rolled 1: if true switch to next player
   //?check for role 1
   if (!randomDiceNumber !== 1) {
      //? and if its not one then the dice to to current score
      currentScore += randomDiceNumber;
      elementCurrent0.textContent = currentScore; //!We need to change it later
   } else {
   }
});
