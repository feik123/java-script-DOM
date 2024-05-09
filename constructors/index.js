// Constructor = special method for defining the properties and 
//  methods of an object

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function() {console.log(`You drive the ${this.model}`);}
}

const car1 = new Car('Ford', 'Mustang', 2030, 'red');
const car2 = new Car('Audi', 'A4', 2020, 'silver');

car1.drive();
car2.drive();


