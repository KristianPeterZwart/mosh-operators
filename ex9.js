
const marks = [80, 80, 50];

// Average = 70.

// 01-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: Average

console.log(calculateGrade(marks));

function calculateGrade(marks)  {
    let sum = 0;
    for (let mark of marks)
    sum =+ mark;
    let average = sum / marks.length;
    
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';

    // more simplistic version of below 
    // if (average >= 0 && average <= 59) return 'F';

    // Single responsibility principal


}
