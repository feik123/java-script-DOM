// .reduce() = reduce the elements of an array to a single value,
//  takes callback fnc as an argument(the callback has accumulator and 
// element as arguments)

const grades = [50, 60, 70, 80, 90, 99];

const minNumber = grades.reduce(getMin);
const maxNumber = grades.reduce(getMax);

console.log(minNumber);
console.log(maxNumber);

function getMin(acc, num){
    return Math.min(acc, num)
}

function getMax(acc, num){
    return Math.max(acc, num)
}