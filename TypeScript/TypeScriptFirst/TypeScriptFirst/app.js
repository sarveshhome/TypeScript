var foo = function (x) {
    return x + 10;
};
function bar(x) {
    return x + 10;
}
var baa = function (x) {
    return x + 10;
};
//OR we can write
var boo = function (x) { return x + 10; };
//-----------------------------------
function baz(fn) {
    fn(10);
}
function baf(fn) {
    var faz = fn(10);
}
function bat(fn) {
    fn(10);
}
baz(foo);
baf(foo);
bat(foo);
//# sourceMappingURL=app.js.map