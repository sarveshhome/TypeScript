var PersonTemp = (function () {
    function PersonTemp(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonTemp.prototype.sayHi = function () {
        return "Hi! My name is" + this.firstName + " " + this.lastName;
    };
    return PersonTemp;
}());
//----------------
//Or we can write class in following way. And actually we should
var Person1 = (function () {
    function Person1(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person1.prototype.sayHi = function () {
        return "Hi! My name is" + this.firstName + " " + this.lastName;
    };
    return Person1;
}());
//# sourceMappingURL=app4.js.map