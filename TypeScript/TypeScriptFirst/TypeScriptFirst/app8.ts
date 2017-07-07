class Person2 {
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    constructor(public firstName: string, public lastName: string) {
    }
    sayHi() {
        return "Hi ! My Name is " + this.firstName + " " + this.lastName;
    }
}
var JonDoe = new Person2("John", "Doe");
alert(JonDoe.fullName);
//---------------OR----------------
class Person3 {
    private get fullName() { //See we make this property private. In typescript everythig public by default
        return this.firstName + " " + this.lastName;
    }
    constructor(public firstName: string, public lastName: string) {
    }
    sayHi() {
        return "Hi ! My Name is " + this.fullName;
    }
}
var JonDoe3 = new Person3("John", "Doe");
//alert(JonDoe3.fullName);//Showing error as 'fullName' propery is declared private here,but we cann't use it outside class.
alert(JonDoe3["fullName"]);