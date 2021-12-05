const express = require('express');
const mysql = require('mysql');

const app = express();

// Initialize middleware
app.use(express.json());
app.use(express.urlencoded());

const connection = mysql.createConnection({
    socketPath: '/cloudsql/traveleasy-334218:us-central1:traveleasy',
    user: 'root',
    password: 'cs348traveleasy',
    database: 'travel_easy'
});

connection.connect((err) => {
    if (err) console.log(err);
    console.log('connected');
})