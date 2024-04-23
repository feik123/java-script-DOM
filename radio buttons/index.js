// .checked - if radio button or check box is checked

const checkBoxElement = document.getElementById('myCheckBox');
const visaButtonElement = document.querySelector('#visaBtn')
const mastercardButtonElement = document.querySelector('#masterCardBtn')
const payPalButtonElement = document.querySelector('#payPalBtn')
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult')
const submitButtonElement = document.getElementById('mySubmit');


submitButtonElement.onclick = function(){
    if (checkBoxElement.checked){
        subResult.textContent = 'You are subscribed!';
    } else {
        subResult.textContent = 'You are NOT subscribed!';
    }

    if (visaButtonElement.checked){
        paymentResult.textContent = 'You are paying with Visa'
    } else if (mastercardButtonElement.checked){
        paymentResult.textContent = 'You are paying with MasterCard'
    } else if (payPalButtonElement.checked){
        paymentResult.textContent = 'You are paying with PayPal'
    } else{
        paymentResult.textContent = 'You must select a payment type'
    }
}