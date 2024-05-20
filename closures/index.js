// closure = A function defined inside of another function,
//              the inner function has access to the variables
//              and the scope of the outer function.
//           Allow for private variables and state maintenance 


// Example 1

function outer(){
    let message = 'Hello';

    function inner(){
        console.log(message);
    }
    inner()
}

outer()

// Example 2
//  this example shows how the closure can maintain 
//  the state of the variable (count) and 
//  using getCount() to return the count variable

function createCounter(){
    let count = 0;
    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount}
}

const counter = createCounter();
counter.increment()
counter.increment()
counter.increment()
counter.increment()
console.log(`The current count is ${counter.getCount()}`);


// Example 3

function createGame(){
    
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore,  decreaseScore, getScore}
}

const newGame = createGame()

newGame.increaseScore(5)
newGame.increaseScore(6)
newGame.decreaseScore(3)
console.log(`The score is now ${newGame.getScore()} pts`);

