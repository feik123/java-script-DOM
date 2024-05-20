// Error = An object that is created to represent a problem that occurs
//         Occur often with user input or establishing connection 

//  try{} = Encloses the code that might potentially cause an error
//  catch{} = Catch and handle any thrown Errors from try{}
//  finally{} = (optional) Always executes. Used mostly for clean up


try{
    const divident = Number(window.prompt('Enter a divident (number to be divided): '));
    const divisor = Number(window.prompt('Enter a divisor (divided by number): '));

    if (divisor == 0){
        throw new Error('You cant divide by zero!')
    }

    if (isNaN(divident) || isNaN(divisor)){
        throw new Error('You must enter a number!')
    }

    const result = divident / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log('You have reached the end of the program!');