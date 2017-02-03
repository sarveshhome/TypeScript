var Country = 'India';
console.log(Country);
Country = "United kingdom";
console.log(Country);
// template strings
/**  template strings is span multiple lines and have embedded expressions. */
/**  strings are surrounded by the backtick/backquote (`) character */
/**  embedded expressions are of the form ${ expr }  */
var fullName = "jon smith";
var age = 40;
var address = "Epping Road North Ryde, NSW 21898";
var details = "Hello, I am " + fullName + " , " + age + " \n\nand my address is " + address;
console.log('Details ' + details);
