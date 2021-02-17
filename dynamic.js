// Cannot reassign the constant 
// but can always change the circle objects by adding or removing properties

const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function() {}

delete circle.color;
delete circle.draw;

console.log(circle)