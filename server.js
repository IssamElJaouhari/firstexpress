const express = require('express');
require('dotenv').config();

const port = process.env.PORT || 8008;
const app = express();


app.set('view engine', 'pug');

app.set('views','./views');

app.get("/", (req, res)=>{
    res.render('first_view');
})

app.get('/first_template', (req, res)=>{

    res.render('Home');
 
 });

 app.get('/contact', (req, res)=>{

    res.render('contact');
 
 });


 app.get('/services', (req, res)=>{

    res.render('services');
 
 });

app.listen(port, () => {
    console.log(`The server is running, please open your browser at http://localhost:${port}`);
});














