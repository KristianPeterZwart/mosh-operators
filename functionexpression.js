// What is hoisting in Javascript?
// Moving function declarations to the top of the file
// done automatially by Javascript engine




function walk() {
    console.log('walk');
}

// 2 ways to define a function


// Function Declaration
walk();





// Anonymous Function Expression
run()''

let run = function() {
    console.log('run');
};
let move = run;
run();
move();
