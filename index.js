// classList = Element property in JavaScript used to interact
//              with an element's list of classes (CSS Classes)
//              Allows you to make reusable classes for any elements
//              across your website

//  add()
//  remove()
//  toggle() = Remove if present, Add if not
//  replace(oldClass, newClass)
//  contains()

let buttons = document.querySelectorAll('.myButtons');

buttons.forEach(button => {
    button.classList.add('enabled');
});

buttons.forEach(button => {
    button.addEventListener('mouseover', event => {
        event.target.classList.toggle('hover')
    })
});

buttons.forEach(button => {
    button.addEventListener('mouseout', event => {
        event.target.classList.toggle('hover')
    })
});

buttons.forEach(button => {
    button.addEventListener('click', event => {
        if (event.target.classList.contains('disabled')){
            event.target.textContent += '🤬'
        } else{
            event.target.classList.replace('enabled', 'disabled')
        }
    })
})
