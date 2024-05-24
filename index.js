// --------------- EXAMPLE 1 <h1> ------------


//      STEP = 1 CREATE THE ELEMENT
const newH1 = document.createElement('h1');


//      STEP 2 = CREATE ATTRIBUTES/PROPERTIES
newH1.textContent = 'I am a new heading';
newH1.id = 'myH1';
newH1.style.color = 'green';
newH1.style.textAlign = 'center'


//      STEP 3 = APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById('box1').append(newH1);
// document.getElementById('box4').prepend(newH1)

// const box2 = document.getElementById('box2')
// document.body.insertBefore(newH1, box4)

// const boxes = document.querySelectorAll('.box');
// document.body.insertBefore(newH1, boxes[2])


// REMOVE HTML ELEMENT
document.getElementById('box1').removeChild(newH1)