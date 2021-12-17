const express = require('express');
const router = express.Router();

const cityController = require('../controllers/cities');

router.get('/', cityController.getCities);

module.exports = router;