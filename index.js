// --------------- EXAMPLE 2 <li> ------------


//      STEP = 1 CREATE THE ELEMENT
const newListElement = document.createElement('li')


//      STEP 2 = CREATE ATTRIBUTES/PROPERTIES
newListElement.textContent = 'grapes'
newListElement.id = 'grapes';
newListElement.style.fontWeight = 'bold';
newListElement.style.backgroundColor = 'lightgreen'


// newH1.textContent = 'I am a new heading';
// newH1.id = 'myH1';
// newH1.style.color = 'green';
// newH1.style.textAlign = 'center'


//      STEP 3 = APPEND ELEMENT TO DOM
// document.getElementById('fruits').append(newListElement);
// document.getElementById('fruits').prepend(newListElement)
const fruits = document.querySelectorAll('li');
document.getElementById('fruits').insertBefore(newListElement, fruits[1])


// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById('box1').append(newH1);
// document.getElementById('box4').prepend(newH1)

// const box2 = document.getElementById('box2')
// document.body.insertBefore(newH1, box4)

// const boxes = document.querySelectorAll('.box');
// document.body.insertBefore(newH1, boxes[2])


// REMOVE HTML ELEMENT
document.getElementById('fruits').removeChild(newListElement)

// document.getElementById('box1').removeChild(newH1)