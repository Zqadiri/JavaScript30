'use strict';
// ? DOM manipulation : document object model -> structured representation of

// ? HTML documents allows JS to access HTML elements and styles to change them

// ! select an element {document is the entry point}

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number'; // change the content

// document.querySelector('.number').textContent = 30;
// document.querySelector('.score').textContent = 100;

// document.querySelector('.guess').value = 20; // value of an input 
// console.log(document.querySelector('.guess').value);

// ! Handling click events

const number = Math.trunc(Math.random() * 20) + 1;

let score = 20; // do not rely on the DOM to store data
let highScore = 0;

// document.querySelector('.number').textContent = number;

const displayMsg = function(msg){
    document.querySelector('.message').textContent = msg;
}

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value); // get it as a string 
    if (!guess){
        displayMsg(" Entrer a number");
    }
    else if (guess === number){
        if (score > highScore)
        {
            highScore = score;
            document.querySelector('.highScore').textContent = highScore;
        }
        displayMsg("Correct number");
        document.querySelector('body').style.backgroundColor = '#385e51';
        document.querySelector('.number').style.width ='30rem';
    }
    else if (guess !== number)
    {
        if (score > 1 ){
            displayMsg(guess > number ? "Too High" : "Too Low");
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMsg("You lost the game");
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = "Start guessing ...";
    document.querySelector('.number').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
})
