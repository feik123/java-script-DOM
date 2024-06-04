// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

//               Allows you to write asynchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everything after Await is placed in an event queue

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkedDog = false;
            if (walkedDog){
                resolve('You walk the dog 🐕');
            } else{
                reject("You didn't walk the dog")
            }
        }, 1500);
    })
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedKitchen = true;
            if (cleanedKitchen){
                resolve('You clean the kitchen🧹');
            } else{
                reject("You didn't clean the kitchen")
            }
        }, 2500)
    })
}

function takeTrashOut() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if (trashTakenOut){
                resolve('You take the trash out♻');
            } else{
                reject("You didn't take the trash out")
            }
        }, 500)
    })

};

async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanedKitchenResult = await cleanKitchen();
        console.log(cleanedKitchenResult);
    
        const takeTrashOutResult = await takeTrashOut();
        console.log(takeTrashOutResult);
    
        console.log('You finished all the chores');
    }
    catch(error){
        console.error(error);
    }
}

doChores()
