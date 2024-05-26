// eventListener = Listen for specific events to create interactive web pages
//                  events: keydown, keyup
//                  document.addEventListener(event, callback)

const myBox = document.getElementById('myBox')
const movement = 20;
let x = 0;
let y = 0;

document.addEventListener('keydown', event => {
    if (event.key.startsWith('Arrow')){

        event.preventDefault();
        switch(event.key){
            case 'ArrowUp':
                y -= movement;
                break;
            case 'ArrowDown':
                y += movement;
                break;
            case 'ArrowLeft':
                x -= movement;
                break
            case 'ArrowRight':
                x += movement;
                break;
        }

        document.addEventListener('keydown', event => {
            myBox.textContent = '😲';
            myBox.style.backgroundColor = 'red'
            console.log(`Key down = ${event.key}`);
        });
        
        document.addEventListener('keyup', event => {
            myBox.textContent = '😀';
            myBox.style.backgroundColor = 'lightblue'
            console.log(`Key down = ${event.key}`);
        });

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;

    }
})

