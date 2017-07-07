interface IPerson {
    firstName: string;
    lastName: string;
    sayHi: () => void;
}

var person: IPerson = {
    firstName: "John",
    lastName: "Doe",
    sayHi: function () { }
};

function doSomethingWith(person: IPerson) {
    //person.sayHi();
}

doSomethingWith(person);