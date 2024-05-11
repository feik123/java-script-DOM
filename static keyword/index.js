// static - keyword for defining methods or properties that belong 
//  to the class only(cannot be used by objects created from the class)

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount ++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users`);
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }

}

const user1 = new User('Pesho');
const user2 = new User('David');
const user3 = new User('Ivan');

console.log(user1.username);
console.log(User.userCount);

User.getUserCount();
user3.sayHello();
