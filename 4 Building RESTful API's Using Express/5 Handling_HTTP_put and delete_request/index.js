// In this modul we will learn how to handel HTTP put request
// put means you can understand upadte a thing


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


// i removed some code here but if you want to reference checkout previous folder code

app.put('/api/courses/:id',(req,res)=>{
   
  // for updating a data we have to do following steps
  // step 1 :first check it exist or not 
  // step 2 : after that checking is coming input is valid or not
  // step 3 : if all conditons statisfied then update it
 


//   step 1 :
  let cours = courses.find(c  => c.id === parseInt(req.params.id))
  if(!cours)
  {
    res.status(404).send("This course does not exist");
    return ;
  }

  // step 2 :
  const schema = Joi.object({
    name : Joi.string().min(3).required(),
   });
   // schema has created now

   const result =  schema.validate(req.body); 
   
   // if error occured then this function will run
   if(result.error){
       console.log(result.error); //debugging 
       res.status(400).send(result.error.details[0].message);
       return ;
   }


   //step 3 : if step 1 and step 2 is okay then just update the course name
   cours.name = req.body.name ;
   res.send(cours);
});










// delete course name for a specice id     delete request
app.delete('/api/courses/:id',(req,res)=>{
   
  // for delete a data we have to do following steps
  // step 1 :first check it exist or not 
  // step 2 :if yes then delete it 
 
//   step 1 :
  let cours = courses.find(c  => c.id === parseInt(req.params.id))
  if(!cours)
  {
    res.status(404).send("This course does not exist");
    return ;
  }

   //step 2: delte it
  // abe yadi yaha tak code aaya tho abe hum index dekhnge ushe cours ka kykoi wo exist karta h
   const index = courses.indexOf(cours);
   console.log(index);
   courses.splice(index,1); // this will delete the index of courses array  means is at index remove 1 item

   res.send(cours);
});





// Calling server
app.listen(port,()=>{
 console.log(`Hum Jeet gaye Server chal gaya on Port ${port}`)
});


