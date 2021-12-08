const express = require('express');
const router = express.Router();

const hotelController = require('../controllers/hotels');

router.get('/', hotelController.getHotels);

module.exports = router;