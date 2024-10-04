var Student = /** @class */ (function () {
    function Student(firstName, lastName, middleInitial) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitial = middleInitial;
        this.fullName = "".concat(firstName, " ").concat(middleInitial, " ").concat(lastName);
    }
    return Student;
}());
function greeter(person) {
    return "Hello ".concat(person.firstName, " ").concat(person.lastName);
}
var user = new Student('Johh', 'Doe', 'M');
document.body.textContent = greeter(user);
