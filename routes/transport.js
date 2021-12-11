const express = require('express');
const router = express.Router();

const transportController = require('../controllers/transport');
const isAuth = require('../util/isAuth');

router.get('/', isAuth, transportController.getVehicles);

module.exports = router;