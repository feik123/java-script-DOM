person1 = {
    firstName: 'Feik',
    lastName: 'Skenderov',
    age: 88,
    isEmployed: true,
    sayHello: function(){console.log('Hi')},
    eat: function(){console.log('I am eating...')}
}

person2 = {
    firstName: 'Pesho',
    lastName: 'Dimitrov',
    age: 44,
    isEmployed: false,
    sayHello: () => console.log('Hey'),
    eat: () => console.log('Not eating')
}

person2.eat();
person1.sayHello();
person2.sayHello();
person1.eat();
console.log(person1.age);;