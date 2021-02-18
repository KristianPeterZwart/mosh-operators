
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

// another['radius'] = circle['radius'];

// better code to do the same as above

const another = Object.assign({}, circle);

console.log(another);