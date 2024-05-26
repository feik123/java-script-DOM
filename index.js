const myButton = document.getElementById('myBtn');
const myImage = document.getElementById('myImg');

myButton.addEventListener('click', event => {
    
    // ----if we don't want to reserve space for the picture
    // if (myImage.style.display === 'none'){
    //     myImage.style.display = 'block';
    //     myButton.textContent = 'Hide'
    // } 
    // else {
    //     myImage.style.display = 'none';
    //     myButton.textContent = 'Show'     
    // }

    // if we reserve space for the picture
    if (myImage.style.visibility === 'hidden'){
        myImage.style.visibility = 'visible';
        myButton.textContent = 'Hide'
    } 
    else {
        myImage.style.visibility = 'hidden';
        myButton.textContent = 'Show'     
    }


})