// Basically this module all about debug module

// many times we need to debug our code using console.log() and we have to write and remove again ang agian 
// so avoid this situation we use enviroenment variable to debug our code
// we can set this variable in our terminal   by export DEBUG=debug


const debug = require('debug')('app:debug'); //'app:debug' is the argument we pass to debug module 
const dbDebugger = require('debug')('app:database'); // if we have something in database



// Here debug and debugger are two debugging functions
// but in real world sceniro we dont need two functions so we can use line no 8 only 

// to use about both 
// we have to set environemnt varaiable in our terminal
// export DEBUG=app:debug,app:database
// ya for all we can write export DEBUG=app:*              ////important line
                  
const express = require('express');
const app = express(); 

if(app.get('env') === 'development') {
    debug('this is a debug message');
    // here debug work like a console.log()
    // which we can handle it from terminal
}

// Db work...
dbDebugger ('Connected to the database...');





// and now let suppose we want to remove all the debug messages(means jo console.log() h) tho me terminal mai 
// export DEBUG=
// above command run kar dunga


// aur yadi again chaaiye tho again 
// export DEBUG=app:debug 
//use kar lunga

const port = process.env. PORT || 3000;
app.listen(port, ()=>{
    console. log(`Listening on port ${port}`)
});
