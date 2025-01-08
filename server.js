const express = require('express');

require('dotenv').config()


const port = process.env.PORT

const app = express()

app.get('/',(req, res)=>{
    res.end('Hello World from homepage')
})


app.get('/home', (req, res)=>{
    res.end('Hello World from second home page')
})

app.get('/services', (req, res)=>{
    res.end('Hello World from services ')
})

app.get('/contact', (req, res)=>{
    res.end('Hello World contact section ')
})

app.get('*', (req, res)=>{
    res.end('404 not found ')
})

app.listen(port,()=>{
    console.log('The server is running, please, open your browser at http://localhost:%s',port);
})

