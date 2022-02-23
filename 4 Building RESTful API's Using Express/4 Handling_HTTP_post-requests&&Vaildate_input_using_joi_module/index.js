// In this modul we will learn how to handel HTTP post request
// and with that we also learn how to validate input 
// to validate input we have to install joi module 


const express = require('express');
const Joi = require('joi');

const app = express();
const port = process.env.PORT || 8000 


app.use(express.json()); // enable json object and it is needed
app.use(express.urlencoded()); //   JO Bhi request html se aa rahi h usme usko req.body mai add kar deta h as a object


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



// but if want to add in course then we request a post request to update course array 
app.post('/api/courses',(req,res)=>{

    // we will create a schema using joi to validate our data (means jo data as a request aa raha h wo valid bhi h ya nahi )
    // schema for input validation
    const schema = Joi.object({
     name : Joi.string().min(3).required(),
    });
    // schema has created now



    // now we will check our request body to this schema
    
    // const result =  Joi.validate(req.body,schema);   // this function doest not work anymore in higher versions
    console.log(req.body);
    const result =  schema.validate(req.body);  // alternative of line 76
    
    // result can contains two value either value or error 
    // if we have value then error is null
    // and we have error then value is null
    console.log(result);  // debugging
    

     // if error occured then this function will run
    if(result.error){
        console.log(result.error); //debugging 
        res.status(400).send(result.error.details[0].message);
        return ;
    }
    
    // otherwise
    let coursenew = {
        id : courses.length+1 , // here we are not working with database that's why i am giving manually id but when we will use database we dont need to give id manually databse will handle it by itself
        name : req.body.name

    }

    courses.push(coursenew);
    res.send(coursenew);



});





// Calling server
app.listen(port,()=>{
 console.log(`Hum Jeet gaye Server chal gaya on Port ${port}`)
});


