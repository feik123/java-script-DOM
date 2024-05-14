// nested objects = Objects inside of other Objects.
//                  Allows you to represent more complex data structures
//                  Child object is enclosed by a Parent Object


// ----------example 1---------------

const person = {
    fullName: 'Ivan Petrov',
    age: 30,
    isStudent: true,
    hobbies: ['swimming', 'fishing', 'cooking'],
    address: {
        street: 'Czar Simeon',
        city: 'Varna',
        country: 'Bulgaria'
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[0]);
console.log(person.address.city);

for (part in person.address){
    console.log(person.address[part]);
}

// ----------example 2---------------

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Adress(...address) 
    }
}

class Adress{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person('Tom', 28, 'Street', 
                                       'London', 
                                       'UK');

const person2 = new Person('Gari', 38, 'Street2',
                                       'Paris', 
                                       'France');

console.log(person2.address.country);
console.log(person2.address.city);