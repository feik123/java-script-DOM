//  Arrays of objects

const fruits = [
    {name: "apple", color: 'red', calories: 95},
    {name: "orange", color: 'orange', calories: 45},
    {name: "banana", color: 'yellow', calories: 105},
    {name: "coconut", color: 'white', calories: 159},
    {name: "pineapple", color: 'yellow', calories: 37},
];


// ----------------- forEach()----------------- 

fruits.forEach(fruit => console.log(fruit.calories))


// ----------------- map()-----------------

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(...fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

// ----------------- filter()-----------------  
const yellowFruits = fruits.filter(fruit => fruit.color === 'yellow')
const lowCaloriesFruits = fruits.filter(fruit => fruit.calories < 100)

console.log(yellowFruits);
console.log(lowCaloriesFruits);


// ----------------- reduce()-----------------  

const maxFruit = fruits.reduce((max, fruit) => max.calories < fruit.calories
                                                 ? fruit : max)

                                                 
const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories
                                                 ? fruit : min)


console.log(maxFruit.calories);
console.log(minFruit.calories);





