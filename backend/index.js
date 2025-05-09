const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { mongoose } = require('./config/db.js');
var employeeRoutes = require('./routes/employeeRoutes.js');
var app = express();

// Configuration CORS
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.listen(3000,()=>console.log('server is running at port :3000'));
app.use('/', employeeRoutes);