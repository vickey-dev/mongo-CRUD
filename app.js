'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

mongoose.connect('mongodb://localhost:27017/local-db',{
	useNewUrlParser: true
}).then(()=>{
    console.log('Connection Established Successfully')
}).catch(err=>{
    console.log('DB connection failed')
})

let connection = mongoose.connection;

connection.on('connected', () => {
	console.log('Server connected with MongoDB');
});

connection.on('error', (err) => {
	console.log('Server disconnected with MongoDB...', err);
});

require('./router')(app);

app.listen(9116);