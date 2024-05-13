//  super = keyword is used in classes to call the constructor 
//          (or access the properties and methods) of a parent (superclass)
//          this = this object
//          super = the parent

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed} km/h`);
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age,);
        this.runspeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runspeed);
    }
}

class Fish extends Animal{
    constructor(name, age, swimSped){
        super(name, age);
        this.swimSped = swimSped;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSped)
    }
}

class Eagle extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit('rabid', 1, 20);
const fish = new Fish('fish', 2, 10);
const eagle = new Eagle('eagle', 3, 60);

rabbit.run();
fish.swim();
eagle.fly();