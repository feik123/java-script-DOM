<<<<<<< HEAD
// let username;

// username = window.prompt("What's your username?");

// console.log(username);

let username;
document.getElementById('mySubmit').onclick = function(){
    element = document.getElementById('myText');
    username = element.value;
    
    document.getElementsByTagName('h1')[0].textContent = `Hello ${username}`
=======
const submitButton = document.getElementById('myButton');
const resultElement = document.getElementById('result');

const PI = 3.14159265359;
submitButton.onclick = function(){
    const radius = Number(document.getElementById('myInput').value)

    const circumference = 2 * PI * radius;
    resultElement.textContent = circumference +' cm'
    
>>>>>>> 9a49b8f (circumference of circle with radius input from the user)
}