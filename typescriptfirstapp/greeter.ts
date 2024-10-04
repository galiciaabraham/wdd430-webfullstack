function greeter(person : string) {
    return 'Hello' + person;
}

let user = 'John';
document.body.textContent = greeter(user);