// 2 ways to define a function


// Function Declaration
function walk() {
    console.log('walk');
}

// Anonymous Function Expression
let run = function() {
    console.log('run');
};
let move = run;
run();
move();
