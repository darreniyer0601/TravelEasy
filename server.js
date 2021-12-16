const express = require('express');
const cors = require('cors');
const { connect } = require('./util/db');

const userRoutes = require('./routes/user');
const itenaryRoutes = require('./routes/itenaries');
const routeRoutes = require('./routes/route');
const hotelRoutes = require('./routes/hotels');
const vehicleRoutes = require('./routes/transport');

require('dotenv').config();

const app = express();

// Initialize middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.url, req.body);
    next();
})

// Register routes
app.use('/api/user', userRoutes);
app.use('/api/itenary', itenaryRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/vehicles', vehicleRoutes);

connect().then(() => {
    console.log('MySQL Connected...');
    app.listen(5000, () => {
        console.log('Server started on port 5000');
    })
}).catch(err => {
    console.error(err);
}) 
