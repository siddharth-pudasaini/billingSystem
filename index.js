const express = require('express')
const path = require('path');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config({path:'./config.env'})

const app = express()

app.use(express.static('public'))

const customerRoutes=require('./routes/customerRoute')


const port=process.env.PORT || 8000


mongoose.connect(process.env.DATABASE,
    {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    }, () => {
    console.log(`Database connected`)
})


app.use(bodyParser.json())
app.use('/api/customer',customerRoutes)


app.get('/checkIn', (req, res) => {
    res.sendFile(path.join(__dirname+"/public/checkIn.html"))
})


app.listen(port,() => {
    console.log(`App running on port ${port}`)
})