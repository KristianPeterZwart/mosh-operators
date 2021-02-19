
let address = createAddress('calle camino', 'madrid', '28232');

console.log(address);

// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street, 
        city, 
        zipCode
    };
}