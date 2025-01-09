const express = require('express');

require('dotenv').config()

const port = process.env.PORT || 8008

const app = express()

// app.get("/",(req,res)=>{
//     res.end('Hello World from index');
// })

// app.get("/home",(req,res)=>{
//     res.end('Hello World from home page');
// })

// app.get("/services",(req,res)=>{
//     res.end('Hello World from srvices page');
// })
// app.get("/contact",(req,res)=>{
//     res.end('Hello World from contact');
// })
// app.get("*",(req,res)=>{
//     res.end('404 not found');
// })

app.listen(port,()=>{
    console.log(`The server is running,please, open your browser at http://localhost:${port}`);
})