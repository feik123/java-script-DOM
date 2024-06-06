// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files (key:value) OR [value1, value2, value3] OR [{}, {}, {}]

//        JSON files.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const jsonNames = `["Spongebob","Patrick","Squidward","Sandy"]`;

const person = {
    "name": "Ivan",
    "age": 20,
    "isEmployed": true,
    "hobbies": ["sleeping", "dreaming", "swimming"]
};
const jsonPerson = `{"name":"Ivan","age":20,"isEmployed":true,"hobbies":["sleeping","dreaming","swimming"]}`

const people = [{
    "name": "Ivan",
    "age": 20,
    "isEmployed": true
},
{
    "name": "Pesho",
    "age": 30,
    "isEmployed": false
},
{
    "name": "Tosho",
    "age": 40,
    "isEmployed": true
},
{
    "name": "Gosho",
    "age": 50,
    "isEmployed": false
}
];

const jsonPeople = `[{"name":"Ivan","age":20,"isEmployed":true},
                    {"name":"Pesho","age":30,"isEmployed":false},
                    {"name":"Tosho","age":40,"isEmployed":true},
                    {"name":"Gosho","age":50,"isEmployed":false}]`

const jsonString = JSON.stringify(names);
const parsedData = JSON.parse(jsonNames);
console.log(jsonString);
console.log(parsedData);