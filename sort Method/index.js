// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order (not alphabetical),
//          lexicographic = (alphabet + numbers + symbols) as strings
//          changes the array, doesn't create new array

// numbers.sort(function(a,b){
//     if (a < b) return -1;
//     if (a > b) return 1;
//     if (a = b) return 0;
// });

const fruits = ['apple', 'orange', 'banana', 'coconut', 'pineapple'];
const numbers = [2, 8, 1, 3, 10, 5, 7, 6, 4, 9];
const letters = ['bravo', 'alpha', 'golf', 'delta', 'charlie']


const people = [
    {name: 'bravo', age: 30, grade: 5},
    {name: 'alpha', age: 20, grade: 3},
    {name: 'golf', age: 11, grade: 2},
    {name: 'delta', age: 44, grade: 6},
    {name: 'charlie', age: 99, grade: 4},
]


// for sorting arrays of objects we use localCompare function

numbers.sort((a, b) => a - b)
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(numbers);
console.log(people);
