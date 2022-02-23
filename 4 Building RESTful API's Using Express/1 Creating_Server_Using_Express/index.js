// this is the module how we create server using express   : Altough we can create also using node http module but this is not convient for all. Express make easy it for us

const express = require('express');

const app = express();
const port = process.env.PORT || 8000  //these are 2 parts   one by me or one by server 

// Requests
app.get('/',(req,res)=>{
  
    res.send('Hello');
});
app.get('/api/course',(req,res)=>{
  
    res.send('[1,2,3,4]');
});


// Calling server
app.listen(port,()=>{
 console.log(`Hum Jeet gaye Server chal gaya on Port ${port}`)
});
