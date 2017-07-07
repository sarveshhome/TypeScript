function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHi() = function () {
    return "Hi! My name is " + this.firsName + " " + this.lastName;
}

var JohnDoe = new Person("John", "Doe");