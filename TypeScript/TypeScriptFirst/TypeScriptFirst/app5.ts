class Person {

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    constructor(public firstName: string, public lastName: string) {
    }

    sayHi(): string;
    sayHi(name: string): string;
    sayHi(person: Person): string;
    sayHi(obj?: any) {
        var predicate = "! My name is " + this.fullName;

        if (typeof obj === "string") {
            return "Hi, " + obj + predicate;
        } else if (obj instanceof Person) {
            return "Hi, " + obj.fullName + predicate;
        }


        return "Hi" + predicate;
    }

    //sayHi() {
    //    return "Hi! My name is " + this.fullName;
    //}
}

var johnDoe = new Person("John", "Doe");
var janeDoe = new Person("Jane", "Doe");

alert(johnDoe.sayHi());
alert(johnDoe.sayHi("Jeremy"));
alert(johnDoe.sayHi(janeDoe));
