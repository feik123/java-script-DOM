//  class = better way to work with objects compared to 
//   traditional constructor functions

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }

}

const salesTax = 0.2;

const product1 = new Product('umbrella', 10.00);
const product2 = new Product('blanket', 20.00);
const product3 = new Product('shoes', 43.00);

product2.displayProduct();
totalPrice = product3.calculateTotal(salesTax);

console.log(`Total price including tax: ${totalPrice.toFixed(2)}`);