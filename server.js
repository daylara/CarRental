const express = require('express')
const app = express()
require("dotenv").config()
const port = process.env.PORT || 5000
const dbConnection =require('./db')
app.use(express.json())



app.get('/',(req,res) => res.send('Hello world!'))
app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))
// API rotası
/*
const carsRoute = require("./routes/carsRoute");

app.use('/api/cars', carsRoute);
*/
//const router =require("./routes")
//app.use('/api/cars', router);
//app.use('/api/cars', router);
app.use('/api/users', require('./routes/usersRoute'));
app.use('/api/cars', require('./routes/carsRoute'));

