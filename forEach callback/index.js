

let fruits = ['apple', 'orange', 'banana', 'COCONUT'];

fruits.forEach(capitalize);
fruits.forEach(display);

function toUpperCase(element, index, array){
    array[index] = element.toUpperCase()
}

function toLowerCase(element, index, array){
    array[index] = element.toLowerCase()
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
}

function display(element){
    console.log(element);
}

