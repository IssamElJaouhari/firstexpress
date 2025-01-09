const express = require('express');
require('dotenv').config();

const port = process.env.PORT || 8008;
const app = express();

app.get("/", (req, res) => {
    res.send('Hello World from index using get');
});

app.get("/home", (req, res) => {
    res.send('Hello World from profile');

});

app.get("/profile", (req, res)=>{
    res.send('Hello World from profile');
})

app.all("/new", (req, res)=>{
    res.send('Hello World from nw repository');
})

app.get("/services", (req, res) => {
    res.send('Hello World from services page');
});

app.get("/contact", (req, res) => {
    res.send('Hello World from contact');
});

app.get("*", (req, res) => {
    res.status(404).send('404 not found');
});

app.listen(port, () => {
    console.log(`The server is running, please open your browser at http://localhost:${port}`);
});














