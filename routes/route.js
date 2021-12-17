const express = require('express');
const router = express.Router();

const routeController = require('../controllers/route');

router.post('/', routeController.addRoute);

router.get('/', routeController.getLastRoute);

module.exports = router;