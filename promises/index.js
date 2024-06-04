// Promise = An Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code}) 

//  DO THESE CHORES IN ORDER

//  1. WALK THE DOG
//  2. CLEAN THE KITCHEN
//  3. TAKE THE TRASH OUT

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('You walk the dog 🐕');
        }, 1500);
    })
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('You clean the kitchen🧹');
        }, 2500)
    })
}

function takeTrashOut() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('You take the trash out♻');
        }, 500)
    })

};



walkDog().then(value => {console.log(value); return cleanKitchen()
    .then(value => {console.log(value); return takeTrashOut()
        .then(value => {console.log(value); console.log('You finished all the chores!');})
    })
})