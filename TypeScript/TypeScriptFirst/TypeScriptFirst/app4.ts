class PersonTemp {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHi() {
        return "Hi! My name is" + this.firstName + " " + this.lastName;
    }
}
//----------------
//Or we can write class in following way. And actually we should
class Person1 {
    constructor(public firstName: string, public lastName: string) {
    }
    sayHi() {
        return "Hi! My name is" + this.firstName + " " + this.lastName;
    }
}