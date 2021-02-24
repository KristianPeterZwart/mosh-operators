
const person = {
    firstName: 'Kristian',
    lastName: 'Zwart',
    fullName() {
        return `${person.firstName} ${person.lastName}`;
    }
};

console.log(person.fullName());