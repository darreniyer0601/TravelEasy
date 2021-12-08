const express = require('express');
const { connect } = require('./util/db');

const userRoutes = require('./routes/user');

require('dotenv').config();

const app = express();

// Initialize middleware
app.use(express.json());
app.use(express.urlencoded());

// Register routes
app.use('/api/user', userRoutes);

connect().then(() => {
    console.log('MySQL Connected...');
    app.listen(5000, () => {
        console.log('Server started on port 5000');
    })
}).catch(err => {
    console.error(err);
}) 
