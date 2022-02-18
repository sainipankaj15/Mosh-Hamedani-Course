console.log("This is mod.js file");

// we will use this file as a module 

// created a function 
function acer(arr){
   
   let sum = 0;
   arr.forEach(element => {
       sum+=element;
   });

   return sum/arr.length;
}

// which things we want export 
// sometime we want to export only few things which is important 
// i give a example like in TV remote you see only few button but inside the TV remote there are a lot of things which we covered and hidden from us just because they are useless for us

// Here i m exporting things  by writing module.export
module.exports = {
    avr : acer,
    name : "pankaj",
    standa : "royal",  
 
};

var caste = "saini";

// This is also a method of export when we have to export one thing
module.exports.c = caste;
// above line means you export caste variable as c 
// so anyone can access this caste variable in your own just by writting modulename.c(ya wo obejct jisme usne module ko import kiya h )