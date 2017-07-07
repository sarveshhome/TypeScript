function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Object.defineProperty(Person.prototype, "fullName", {
    get: function () {
        return this.firstName + " " + this.lastName;
    },
    enumerable: true,
    configurable: true
});

Person.prototype.sayHi = function (obj) {
    var predicate = "! My name is " + this.fullName;

    if (typeof obj === "string") {
        return "Hi, " + obj + predicate;
    } else {
        if (obj instanceof Person) {
            return "Hi, " + obj.fullName + predicate;
        }
    }

    return "Hi" + predicate;
};