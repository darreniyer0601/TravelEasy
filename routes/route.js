const express = require('express');
const router = express.Router();

const routeController = require('../controllers/route');
const isAuth = require('../util/isAuth');

router.post('/', isAuth, routeController.addRoute);

module.exports = router;