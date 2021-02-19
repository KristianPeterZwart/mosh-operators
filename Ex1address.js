// street
// city
// zipcode
// showAddress(address)

let address = {
    street: 'calle camino',
    city: 'Madrid',
    zipcode: '28232',
};

function showAddress(address) {
    for (let key in address)
    console.log(key, address[key]);
}

showAddress(address);




