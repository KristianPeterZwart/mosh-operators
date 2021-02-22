
const numbers = [1, -1, 2, 3];

// every() checks to see if every elements in a array matches given criteria
// every() checks to see at least one element that matches the given criteria

const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositive);

// Always pay attention to the name of your variables and functions
// make sure you explain the right thing