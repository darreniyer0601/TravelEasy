const express = require('express');
const router = express.Router();

const hotelController = require('../controllers/hotels');
const isAuth = require('../util/isAuth');

router.get('/', hotelController.getHotels);

module.exports = router;