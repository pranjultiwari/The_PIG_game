let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll');
let current_0= document.getElementById('current--0');

let current = 0;
let activePlayer = 0;
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

let winner = document.querySelector('.name--')

let hold = document.querySelector('.btn--hold');
let scores = [0,0];
let switchScore = function(){
    current = 0;
    document.getElementById(`current--${activePlayer}`).textContent = current;
    activePlayer = activePlayer === 0? 1: 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');

}




score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
rollDice.addEventListener('click', function()
{
    let diceNumber = Math.trunc(Math.random()*6)+1;
    // console.log(diceNumber)

    dice.classList.remove('hidden');
    dice.src = `images/dice-${diceNumber}.png`;

    if(diceNumber != 1)
    {
    current += diceNumber;
    // current_0.textContent = current;
    document.getElementById(`current--${activePlayer}`).textContent = current;
  

    }

    else{
        switchScore();
    
    }
    
})

hold.addEventListener('click', function(){
   scores[activePlayer] += current;
   document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

   if(scores[activePlayer] >= 100){
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.getElementById(`name--${activePlayer}`).textContent = 'Winner!';
    dice.classList.add('hidden');

   }
   else{
    switchScore();
   }
})