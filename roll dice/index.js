// Dice rolling program

function rollDice(){
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const values = [];
    const images = [];

    for (let i = 0; i< numOfDice; i++){
        const randomNum = Math.floor(Math.random() * 6) + 1
        values.push(randomNum);
        images.push(`<img src='imgs/${randomNum}.bmp' alt='Dice ${randomNum}'>`)
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join(' ');

}