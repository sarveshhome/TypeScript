var foo = function (x: number) {
    return x + 10;
}
function bar(x: number) {
    return x + 10;
}

var baa = (x: number) => {
    return x + 10;
}

//OR we can write

var boo = (x: number) => x + 10;

//-----------------------------------

function baz(fn: (x: number) => void) {
    fn(10);
}

function baf(fn: (x: number) => number) {
  var faz =  fn(10);
}

function bat(fn: (x: number) => number) {
     fn(10);
}



baz(foo);
baf(foo);
bat(foo);



