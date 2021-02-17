// Objects are collections of key value pairs

// Object-oriented Programming (OOP) Style to 
// see a program as a collection of objects 
// that talk to each other to perform functionality.

const circle = {
     radius: 1,
     location: {
         x: 1,
         y: 1,
     },
     isVisible: true,
     draw: function() {
         console.log('draw');
     }
};

circle.draw(); // calling the Draw Method