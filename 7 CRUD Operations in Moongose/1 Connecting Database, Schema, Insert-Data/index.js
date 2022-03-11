// .env file mai username and password likhna hota h mongodb ka jaha par xxxxxx likkha hua h waha par
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json({ limit: "30mb", extended: true }))
app.use(cors());


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database is connected");
        app.listen(PORT, () => console.log(`The server is running on port: ${PORT}`))
    })
    .catch((error) => {
        console.log("Database is not connected");
        console.log(error.message);
    });


// this is how we define a schema means document mai jo value aayagei wo kis tarah se aane wali h (kis type ki aane wali h)
// schema = overall it is shape of document 
const courseschema = new mongoose.Schema({
   name : String,
   author : String,
   tags : [ String ],
   date : {type : Date , default: Date.now()},
   ispublish : Boolean

});

// till now we have define schema now we have to create a model 
// why we need a model ,,to understand this thing i give u a simple example 
// when we create a class we need object : object is a instance of a class
// same like
// when we create a schema we need model : model is a instance of a schema
// human and pankaj : pankaj is a instance of human
// that's why we need model




// this is how we create a model
const Course = mongoose.model('Course',courseschema);
//Note: Course is a class (pahle wala Course)
// here  we created a model and it's name is Course(baad wala Course h ) and it's type is courseschema

// abe ishe Course class ka ek object banayge aur uske through hi database mai entry save kargee


async function createcourse(){

    const course = new Course({
    name : "Op1Course",
    author : "Saini1",
    tags : [ "DP1", "Array1" ],
    ispublish : true
});

const result = await course.save();
console.log(result.id);
}

createcourse();






