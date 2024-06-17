
function solve(product, quantity){
    const totalPrice = getProductPrice(product) * quantity;
    return totalPrice.toFixed(2)

    function getProductPrice(product){
        switch(product){
            case 'coffee':
                return 1.5;
            case 'water':
                return 1;
            case 'coke':
                return 1.4;
            case 'snacks':
                return 2
        }
        
    }
};

console.log(solve("water", 5));
