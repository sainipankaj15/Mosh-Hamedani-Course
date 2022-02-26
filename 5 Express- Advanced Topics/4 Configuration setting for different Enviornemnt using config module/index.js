
const express = require('express');
const config = require('config');

const app = express();
const port = 3000;


// Configuration
console.log(`Application Name: ${config.get('name')}`);
// here config.get('name') is the key which can come from differenet files depending on the environment
console.log(`Password is Name: ${config.get('password')}`);
// here password ki value app_password1 h aur app_password1 ki value enviorment variable se terminal mai se set kiya h 
// tho abe password public bhi nahi hoga and hum use bhi kar paayaa
// how to set value of app_password1 in terminal (same jaise hum environment variable se set karte h)
// export app_password1=12345;



// we can change enviorment by running
// export NODE_ENV = production
// export NODE_ENV = development


// define requests and responses 
app.get('/',(req,res)=>{

    res.send('Hello World');

})



//listening app 
app.listen(port,()=>{
    console.log('Server is running on port '+port);
}) 