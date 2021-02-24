
const color = 'red'; // avoid defining global variables or constants

function start() {
const message = 'hi';
const color = 'blue'; // local variables or constants take precendent
console.log(color);
}

function stop() {
    const message = 'bye';
}

start();

