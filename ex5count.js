
const numbers = [1, 2, 3, 4, 1];

const count = countOccurences(numbers, -1);

console.log(count);

function countOccurences(array, searchElement) {
    // let count = 0;
    // for (let element of array)
    // if (element === searchElement)
    // count++;
    // return count;

    array.reduce((accumulator, current) => {
    const occurrence - (current === searchElement) ? 1 : 0;
    console.log
    return accumulator + occurrrence;
    }, 0);
}