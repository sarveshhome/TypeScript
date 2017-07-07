function sum(a, b) {
    if (typeof a === "string") {
        a = parseInt(a, 10);
    }
    if (typeof b === "string") {
        b = parseInt(b, 10);
    }
    return a + b;
}
sum(1, 2);
sum("1", 2);
sum(1, "2");
sum("1", "2");
var messenger = {
    message: "Hello, World",
    start: function () {
        var that = this;
        setTimeout(function () { alert(that.message); }, 1000);
    }
};
//Or we can write code using fat arrow(=>) as below. In fact we should.
var messenger = {
    message: "Hello, World",
    start: function () {
        var _this = this;
        setTimeout(function () { alert(_this.message); }, 1000);
    }
};
//Fat arrow(=>) is used to preserve the value 
//# sourceMappingURL=app2.js.map