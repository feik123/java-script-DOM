// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementChild
// .previousElementSibling
// .parentElement
// .children  ------- returns HTML collection

// -------------------------- .firstElementChild ----------------

const ulElements = document.querySelectorAll('ul');

ulElements.forEach(ulElement => {
    const firstElement = ulElement.firstElementChild;
    firstElement.style.backgroundColor = 'LightGreen';
    const nextSibling = firstElement.nextElementSibling;
    nextSibling.style.backgroundColor = 'orange'
})

ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = 'LightBlue'
})

const element = document.getElementById('desserts');
const previousSibling = element.previousElementSibling;
previousSibling.style.color = 'blue'

const apple = document.getElementById('apple');
const parent = apple.parentElement;
parent.style.color = 'Grey'

const desserts = document.getElementById('desserts');
const children = desserts.children;

Array.from(children).forEach(child => {
    child.style.fontStyle = 'italic'
})
