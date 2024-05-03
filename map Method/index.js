// .map() - Method that accepts callback and applies that function
//          to each element of the array, then returns a new array, 
//          (doesnt't change the array)


const dates = ['2020/1/10', '2030/2/20', '2030/3/30']
const formatedDates = dates.map(formatDates);

console.log(...formatedDates);

function formatDates(element){
    const parts = element.split('/');
    return `${parts[2]}.${parts[1]}.${parts[0]}`
}