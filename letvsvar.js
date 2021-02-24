
function start() {
    for (var i = 0; i < 5; i++) {
        if (true) {
            var color = 'red';
        }
        console.log(color);
    }
}

start();

// var start => function-scoped
// ES6 (ES2015): let, const => block-scoped