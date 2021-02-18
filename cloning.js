
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// old javascript method

// const another = {};
// for (let key in circle)
// another[key] = circle[key];

another['radius'] = circle['radius'];

console.log(another);