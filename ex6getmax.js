
const numbers = [1, 2, 3, 4];

const max = getMax([1, 2, 3, 3, 4]);

console.log(max);

function getMax(array) {
    if (array.length === 0) return udefined;

    // let max = array[0];
// 
    // for (let i = 1; i <array.length; i++)
    // if (array[i] > max)
    // max = array[i];
// 
    // return max;
}

array.reduce((accumulator, current) => {
if (current > accumulator) return current;
return accummulator;

return (current > accumulator) ? current : accumulator;
});
}

// reduce method 
// return array.reduce((a, b) => (a > b) ? a : b);
