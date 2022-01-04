'use strict';

//will log the guessed number to the console

document.querySelector('.check').addEventListener('click', function (){
    console.log(document.querySelector('.guess').value);
});