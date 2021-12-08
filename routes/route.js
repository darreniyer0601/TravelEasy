const express = require('express');
const router = express.Router();

const routeController = require('../controllers/route');

router.post('/', routeController.addRoute);

module.exports = router;