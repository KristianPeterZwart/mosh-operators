// Camel Notation: oneTwoThreeFourFive
// Pascal Notation: OneTwoThreeFour

// Constructor Functions - use Pascal by convention

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle1 = new Function('radius'), `
this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`);

Circle.call({}, 1)
Circle.apply({}, [1, 2, 3]);

const circle = newCircle1(1);

const another = new Circle(1);

// Both patterns are equally good - use Factory with Javascript

let x = {};

// let x = new Object();

new String(); // ''. "", `` // 
new Boolean(); // true, false - boolean literals
new Number(); // 1, 2, 3, ...

// in Javascript Functions are Objects