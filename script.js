let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll');
let current_0= document.getElementById('current--0');
let current_1= document.getElementById('current--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let name0 = document.getElementById('name--0');
let name1 = document.getElementById('name--1');
let newgame = document.querySelector('.btn--new');
let hold = document.querySelector('.btn--hold');

let current;
let activePlayer;
let scores;

let init = function()
{
    score0.textContent = 0;
    score1.textContent = 0;
    current_0.textContent = 0;
    current_1.textContent = 0;

    name0.textContent = "Player 1";
    name1.textContent = "Player 2";
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    rollDice.classList.remove('hidden');
    hold.classList.remove('hidden');
    dice.classList.add('hidden');


    scores = [0, 0];
    activePlayer = 0;
    current =0;
    
    

}
init();
let switchScore = function()
{
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
    dice.classList.remove('hidden');
    dice.src = `images/dice-${diceNumber}.png`;

    if(diceNumber != 1)
    {
    current += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent = current;
  
    }

    else
    {
        switchScore();
    
    }
    
})

hold.addEventListener('click', function(){
   scores[activePlayer] += current;
   document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

   if(scores[activePlayer] >= 100)
   {
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    document.getElementById(`name--${activePlayer}`).textContent = '👑Winner👑';
    dice.classList.add('hidden');
    rollDice.classList.add('hidden');
    hold.classList.add('hidden');

   }

   else
   {
    switchScore();
   }
})

newgame.addEventListener('click',init );