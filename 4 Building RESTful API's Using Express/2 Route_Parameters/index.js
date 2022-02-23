// In this modul we will learn how to give in parameters in route 
// route matalb wo url jo browserr mai hota h , hum usme hi parameters dena chaate h 

const express = require('express');

const app = express();
const port = process.env.PORT || 8000 


// Requests
app.get('/',(req,res)=>{
  
    res.send('Hello');
});
app.get('/api/course',(req,res)=>{
  
    res.send('[1,2,3,4]');
});

// now we will see how to respond when we get route parameter
// like 
// /api/course     is normal 
// but /api/course/1  is route parameter



//  :(colon likhne se pata lagata h yeh route parameters h)
app.get('/api/course/:id',(req,res)=>{
    //  req.params.id  = iska means h ki req karne par paramenter mai jo id aa rahi h
    console.log(req.params.id);  //debuggging
   console.log('Hello boys');  //debuggging 
    res.send(req.params.id);
    
});


// here 2 route parameters
app.get('/api/course/:year/:month',(req,res)=>{
    //  req.params.id  = iska means h ki req karne par paramenter mai jo id aa rahi h
    console.log(req.params);  //debuggging
   console.log('Hello boys');  //debuggging 
    res.send(req.params);
    
});

// Note : we also can give a query parameter like result ko asscending and descending order mai show karoo but these are optional but point is we can do it 


// Calling server
app.listen(port,()=>{
 console.log(`Hum Jeet gaye Server chal gaya on Port ${port}`)
});


