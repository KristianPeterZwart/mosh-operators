// Camel Notation: oneTwoThreeFourFive
// Pascal Notation: OneTwoThreeFour

// Constructor Functions - use Pascal by convention

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);

// Both patterns are equally good - use Factory with Javascript