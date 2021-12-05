const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();

// Initialize middleware
app.use(express.json());
app.use(express.urlencoded());

const connection = mysql.createConnection({
    host: '34.123.24.170',
    user: 'darren',
    database: 'travel_easy'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected');
})