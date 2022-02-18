//this is module about what if we use emit in module which made by use

// const EventEmitter = require('events');

// const emitter = new EventEmitter;
// we dont need line no 5 because we already have this functionality

// add a listner




// emitter.emit('messagelogged')

const Logger = require('./mod');

// Logger class h jo ushe mod module se aayi h 
// aur mod module mai likha h(Line no 7) ki Logger class k pass wo sab functionality h jo EventEmitter k pass h  


// now we will create a object of Logger class
const logger = new Logger;
// logger ek object h 


logger.on('messagelogged',()=>{
    console.log("This is a listener")
});


logger.log("Pankaj")