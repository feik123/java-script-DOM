const submitButton = document.getElementById('myButton');
const resultElement = document.getElementById('result');

const PI = 3.14159265359;
submitButton.onclick = function(){
    const radius = Number(document.getElementById('myInput').value)

    const circumference = 2 * PI * radius;
    resultElement.textContent = circumference +' cm'
    
}