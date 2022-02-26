// some time we need to figure out in which enviournment we are running (development or production)
// and then we need to figure out which configuration file we need to use
// we can do this by checking the NODE_ENV environment variable
// if it is not set we will use the development configuration
// if it is set to production we will use the production configuration
// we can do this by checking the NODE_ENV environment variable


const express = require('express');

const app = express();
const port = 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'development';  // this is how we set the environment variable
app.get('env'); // by default it will be development
// line no 14 = line no 15

// we can also set the environment variable in the command line by using the 
// export NODE_ENV = production 
// export NODE_ENV = development

// so now we want some peace of code to run in development mode then we will write like this 

if(app.get('env') === 'development') {
 // development code    
 // this peace of code will run only in development mode
 console.log('we are in devlopment mode ')
}


if(app.get('env') === 'production') {
 // production code
 // this peace of code will run only in production mode
 console.log('we are in produciton mode ')
}


// this is all about how we can run a specific code in a specific environment


// define requests and responses 
app.get('/',(req,res)=>{

    res.send('Hello World');

})



//listening app 
app.listen(port,()=>{
    console.log('Server is running on port '+port);
}) 