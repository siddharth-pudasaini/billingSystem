//Importing modules
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config({ path: './config.env' });

//Importing route middlewares
const customerRoutes = require('./routes/customerRoute');
const roomRoutes = require('./routes/roomRoutes');

//Initializing App
const app = express();

//Serving static files
app.use(express.static('public'));
app.get('/checkIn', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/checkIn.html'));
});
app.get('/loginPage', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/login.html'));
});
app.get('/bill', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/bill.html'));
});
app.get('/addRoom', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/addRoom.html'));
});

//Middlewares
app.use(bodyParser.json());
app.use(morgan('dev'));

//Using route middlewares
app.use('/api/customer', customerRoutes);
app.use('/api/room', roomRoutes);

//Declaring port
const port = process.env.PORT || 8000;

//Database connection
mongoose.connect(
    process.env.DATABASE,
    {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log(`Database connected`);
    }
);

//Initializing server
app.listen(port, async () => {
    console.log(`App running on port ${port}`);
});
