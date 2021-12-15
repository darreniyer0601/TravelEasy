const express = require('express');
const router = express.Router();

const cityController = require('../controllers/cities');
const isAuth = require('../util/isAuth');

router.get('/', isAuth, cityController.getCities);

module.exports = router;