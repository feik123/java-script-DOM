// Attempting to guess a number

const minNum = 1;
const maxNum = 100;
let randomNum = Math.floor(Math.random() * (maxNum- minNum +1));


let attempts = 0;
let running = true;
let guess;

while(running){
    guess = window.prompt(`Guess a number between a ${minNum} and ${maxNum}`)
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert('Not a valid number');
    }
    else if(guess < minNum && guess > maxNum){
        window.alert('Not a valid number');
    } else{
        attempts++;
        if(guess < randomNum){
            window.alert('Too low! Try again!')
        } else if(guess > randomNum){
            window.alert('Too high! Try again!')
        } else{
            window.alert(`Correct. The random number is ${randomNum}. It took you ${attempts} attempts`);
            running = false;    
        }
    }
}
