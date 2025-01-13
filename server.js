const express = require('express');
const path = require('path')

const app = express();

require('dotenv').config();

const port = process.env.PORT || 8008;


app.set('view engine', 'pug');

app.set('views',path.join(__dirname, 'views'));

// const checkavailablehours = (req, res, next) =>{
//     const now =  new Date()
//     const day =now.getDay()
//     const hours = now.getHours()

//     if (day === 0 || day === 6 || hours < 9 || hours >= 17) {
//         return res.render('error',{
//             message : "The web application is only available during working hours (Monday to Friday,  from 9 to 17)."
//         })
//         next()
//     }
// }

// app.use(checkavailablehours)


app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/services', (req, res)=>{
    res.render('services')
})

app.get('/contact', (req, res)=>{
    res.render('contact')
})



app.listen(port, () => {
    console.log(`The server is running, please open your browser at http://localhost:${port}`);
});














