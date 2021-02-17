// Objects are collections of key value pairs

// Object-oriented Programming (OOP) Style to 
// see a program as a collection of objects 
// that talk to each other to perform functionality.

// Factory Functions

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
           
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

