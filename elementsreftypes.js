
const courses = [
{ id: 1, name: 'a' },
{ id: 2, name: 'b' },
];

const course = courses.findIndex(function(course) {
    return course.name === 'xyz';
});

console.log(course);
