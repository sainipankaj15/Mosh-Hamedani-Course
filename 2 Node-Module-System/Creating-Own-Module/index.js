//This is our index file and in node every file in itself is a module but we will see how we can import our own bulid module


console.log("This is index.js file");

// here we import mod module which we created
const acerrr = require('./mod'); 
// here we import mod module in acerrr
// but best pratice is we should import the module by same name for example
// const mod = require('./mod');    This is the best pratice 



// #note
// here mod module has come in form of acerrr
// so we can access everything which mod module is exporting


console.log(acerrr.avr([2,3,4,5])); // by this we use avr functionn of mod module 

console.log(acerrr.name); // by this we use name of mod module 
console.log(acerrr.standa); // by this we use standa of mod module 
console.log(acerrr.c); // by this we use c of mod module 

console.log(acerrr); // this thing will print ki kon kon si cheez mod module export kar raha h apni side se

const a = 5;

console.log(a);