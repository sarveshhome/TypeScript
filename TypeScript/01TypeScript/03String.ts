let Country:string = 'India';
console.log(Country);

Country = "United kingdom";
console.log(Country);


// template strings
/**  template strings is span multiple lines and have embedded expressions. */
/**  strings are surrounded by the backtick/backquote (`) character */
/**  embedded expressions are of the form ${ expr }  */

let fullName:string = "jon smith";
let age:number = 40;
let address ="Epping Road North Ryde, NSW 21898";
let details= `Hello, I am ${fullName} , ${age} 

and my address is ${address}`

console.log('Details ' + details);
