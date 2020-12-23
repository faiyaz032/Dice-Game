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
