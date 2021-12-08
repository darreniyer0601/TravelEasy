const express = require('express');
const { connect } = require('./util/db');

const userRoutes = require('./routes/user');
const itenaryRoutes = require('./routes/itenaries');
const routeRoutes = require('./routes/route');
const hotelRoutes = require('./routes/hotels');

require('dotenv').config();

const app = express();

// Initialize middleware
app.use(express.json());
app.use(express.urlencoded());

// Register routes
app.use('/api/user', userRoutes);
app.use('/api/itenary', itenaryRoutes);
app.use('/api/route', routeRoutes);
app.use('/api/hotel', hotelRoutes);

connect().then(() => {
    console.log('MySQL Connected...');
    app.listen(5000, () => {
        console.log('Server started on port 5000');
    })
}).catch(err => {
    console.error(err);
}) 
