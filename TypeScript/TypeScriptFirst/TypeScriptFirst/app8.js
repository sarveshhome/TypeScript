var Person2 = (function () {
    function Person2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Person2.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    Person2.prototype.sayHi = function () {
        return "Hi ! My Name is " + this.firstName + " " + this.lastName;
    };
    return Person2;
}());
var JonDoe = new Person2("John", "Doe");
alert(JonDoe.fullName);
//---------------OR----------------
var Person3 = (function () {
    function Person3(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Person3.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    Person3.prototype.sayHi = function () {
        return "Hi ! My Name is " + this.fullName;
    };
    return Person3;
}());
var JonDoe3 = new Person3("John", "Doe");
//alert(JonDoe3.fullName);//Showing error as 'fullName' propery is declared private here,but we cann't use it outside class.
alert(JonDoe3["fullName"]);
//# sourceMappingURL=app8.js.map