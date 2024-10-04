class Student {
    fullName: string;
    constructor (
        public firstName: string,
        public lastName: string,
        public middleInitial: string
    ) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}

let user = new Student ('Johh', 'Doe', 'M');

document.body.textContent = greeter(user);