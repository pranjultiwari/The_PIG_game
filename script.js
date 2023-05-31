let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll');
let current_0= document.getElementById('current--0');

let current = 0;
let activePlayer = 0;

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
rollDice.addEventListener('click', function()
{
    let diceNumber = Math.trunc(Math.random()*6)+1;
    console.log(diceNumber)

    dice.classList.remove('hidden');
    dice.src = `images/dice-${diceNumber}.png`;

    if(diceNumber != 1)
    {
    current += diceNumber;
    // current_0.textContent = current;
    document.getElementById(`current--${activePlayer}`).textContent = current;
    }

    else{
        current = 0;
        document.getElementById(`current--${activePlayer}`).textContent = current;
        activePlayer = activePlayer === 0? 1: 0;
    }
    
})