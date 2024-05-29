// NodeList = Static collection of HTML elements by (id, class, element)
//              Can be created by using querySelectorAll()
//              Similar to an array - forEach (but no: map, filter, reduce)
//              NodeList won't update to automatically reflect changes to the DOM


let buttons = document.querySelectorAll('.myButtons');

// ADD HTML/CSS PROPERTIES

buttons.forEach(button => {
    button.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = ' hsla(240, 71%, 40%, 0.6)'
    });

    button.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = ' hsla(240, 71%, 60%, 0.6)'
    })
});


// ADD AN ELEMENT

//  STEP 1 - CREATE ELEMENT

const newButton = document.createElement('button');


// STEP 2 - ADD NECESSARY ATTRIBUTES OR PROPERTIES

newButton.textContent = 'Button 5';
newButton.classList = 'myButtons';


// STEP 3 - APPEND THE NEW ELEMENT TO THE DOM

document.body.appendChild(newButton);


buttons = document.querySelectorAll('.myButtons');
console.log(buttons);


// REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener('click', event => {
        event.target.remove();

        buttons = document.querySelectorAll('.myButtons')
        console.log(buttons);
    })

})