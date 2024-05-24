// eventListener = Listen for specific events to create interactive web pages
//                  events: click, mouseover, mouseout
//                  .addEventListener(event, callback(arrow or anonymous function))

const myBox = document.getElementById('myBox');
const myButon = document.querySelector('button')

myButon.addEventListener('click', event => {
    myBox.style.backgroundColor = 'red';
    myBox.textContent = 'OUCH! 🥴'
})

myButon.addEventListener('mouseover', event => {
    myBox.style.backgroundColor = 'yellow';
    myBox.textContent = "Don't do it 😮"
})

myButon.addEventListener('mouseout', event => {
    myBox.style.backgroundColor = 'lightgreen';
    myBox.textContent = 'Clik me 😃'
})