// This tutorial is of event.emit mai argument dena 
// so before this you must read event module

const EventEmitter = require('events');

// EventEmitter is class so to access of it's member functions we have to create a object
const emitter = new EventEmitter;

// emitter is a instance or object




// Register a listenr

// Below three listener tell ki ek event ho hi different tarkike se kaise use kar sakte h 
emitter.on('messageLogged',(arg)=>{
  console.log(`Hey this is ${arg}`);
  console.log(arg);
});

emitter.on('messageLogged',(arg)=>{
  console.log(`Hey mobile number is ${arg.mobilenumber}`);
});

emitter.on('messageLogged',(arg)=>{
  console.log(`hey his name is ${arg.name}`);
});


// Raise an Event 
emitter.emit('messageLogged',{mobilenumber : 12345678, name : "saini"});   