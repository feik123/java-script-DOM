// synchronous = Executes line by line cosecutively in a sequential manner
//               Code that waits for an operation to complete.

// asyncronous = Allows multiple operations to be performed concurrently without waiting
//               Doesn't block the execution flow and allows the program to continue 
//               (I/O operations, network requests, fetching data)

function func1(callback) {

    setTimeout(() => {console.log('Task 1');
        callback()
    }
    , 2000)
}


function func2() {
    console.log('Task 2');
    console.log('Task 3');
    console.log('Task 4');
}

func1(func2)