// there are two types of process

// 1. Non-blocking =  Asynchronous  (doesn't happen at the same time)
// 2. Blocking =  synchronous (happens at the same time)

// Normally we should use Asynchronus process because if we are using node to build backend then we dont want ki ek user hi saara time le in case dusra use aata h tho wo aage chale jaana chaaiye 
// overrall ek user another user ka kaam pura hona tak ka wait ku karegaa

const fs = require('fs');
// this is synchronus and this object works it show the files in given folder   and main thing is ./ show current folder
var currentfileinfolder = fs.readdirSync('./');

console.log(currentfileinfolder);


// but now we will write  Asynchronous

fs.readdir('./', (err,result)=>{
if(err)
console.log(err);
else
console.log(result);
});


// Asynchronus  mai 2 parameters jaate h ek folder ka  name and second a callback function
// callback k bhi 2 arguments h 1 is error(err) and 2 is results 
// if we get error it will print error
// otherwise it will print result


// Pro tip :: Always use Asynchronus Method