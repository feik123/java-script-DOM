// random number generator

//rolling 3 dices

const buttonElement = document.querySelector('#myButton');
const labelElement1 = document.querySelector('#myLabel1');
const labelElement2 = document.querySelector('#myLabel2');
const labelElement3 = document.querySelector('#myLabel3');

const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

buttonElement.onclick = function(){
    randomNum1 = Math.floor(Math.random()*max)+min;
    randomNum2 = Math.floor(Math.random()*max)+min;
    randomNum3 = Math.floor(Math.random()*max)+min;

    labelElement1.textContent = randomNum1;     
    labelElement2.textContent = randomNum2;     
    labelElement3.textContent = randomNum3;     
}
