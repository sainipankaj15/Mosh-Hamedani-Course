const express = require('express');
const pug = require('pug');
const path = require('path');
const app = express(); 

//pug stuff
app.set('view engine', 'pug'); //set template engine as a pug
app.set('views', path.join(__dirname, 'views')); // set the views folder


app.get('/', (req, res) => {
    res.render('index.pug',{title : 'Pankaj-Express-App', message : 'Hello World'});
})


const port = process.env. PORT || 3000;
app.listen(port, ()=>{
    console. log(`Listening on port ${port}`)
});
