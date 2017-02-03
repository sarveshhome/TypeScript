var City;
(function (City) {
    City[City["delhi"] = 0] = "delhi";
    City[City["Goa"] = 1] = "Goa";
    City[City["Mumbai"] = 2] = "Mumbai";
})(City || (City = {}));
;
var c = City.Goa;
console.log('City ' + c);
