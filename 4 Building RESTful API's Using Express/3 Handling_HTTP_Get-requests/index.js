// In this modul we will learn how to handel HTTP get request


const express = require('express');

const app = express();
const port = process.env.PORT || 8000 


// declaring a array variable named course
const courses = [
    { id : 1, name : "Physics"},
    { id : 2, name : "Math"},
    { id : 3, name : "Chemistry"},
];

// Requests
app.get('/',(req,res)=>{
  
    res.send('Hello');
});


// it will return whole course array
app.get('/api/courses',(req,res)=>{
  
    res.send(courses);
});




//  but what if want only 1 course from specify id
app.get('/api/courses/:id',(req,res)=>{
    //  req.params.id  = iska means h ki req karne par paramenter mai jo id aa rahi h

    // abe jo id aa gayi h firsly we will check ki wo id exist bhi karti h ya nahi 

    // so for that i will write 
    let cours = courses.find(c  => c.id === parseInt(req.params.id))
    // parseInt ek global function jo aane wali cheez ki int mai change kar deta h kykoi req.param.id se ek string aa rahi hogi usko int mai change karne ka kaam yahi function kargaa

    //  abe yadi course id exist nahi karti h tho cours mai zero value hogi so 
    if(!cours)
    res.status(404).send("This course does not exist");

 
   // otherwise we will send cours 
    res.send(cours);
    
});





// Calling server
app.listen(port,()=>{
 console.log(`Hum Jeet gaye Server chal gaya on Port ${port}`)
});


