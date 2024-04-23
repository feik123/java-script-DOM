// Counter with buttons

const decreaseButton = document.getElementById('decreaseBtn');
const increaseButton = document.getElementById('increaseBtn');
const resetButton = document.getElementById('resetBtn');
const countLabel = document.getElementById('countLabel');

let count = 0;

increaseButton.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseButton.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetButton.onclick = function(){

    countLabel.textContent = 0;
}
