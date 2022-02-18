//event module

const EventEmitter = require('events');

// EventEmitter is class so to access of it's member functions we have to create a object
const emitter = new EventEmitter;

// emitter is a instance or object




// Register a listenr
// this take 2 parameter 1 is event name and second argument ki ushe event k hone par kya karna h 
emitter.on('messageLogged',()=>{
  console.log("It means when this event will call this callbackfunciton will run");
});


// Raise an Event 
emitter.emit('messageLogged');   //messageLogged is a event name. it can be anything
// emit means make a noise , and proudce something 
// this noise is the singal event is happening