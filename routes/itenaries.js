const express = require('express');
const router =  express.Router();

const itenaryController = require('../controllers/itenaries');
const isAuth = require('../util/isAuth');

router.get('/', isAuth, itenaryController.getItenaries);

router.post('/', isAuth, itenaryController.addItenary);

router.delete('/:id', isAuth, itenaryController.deleteItenary);

module.exports = router;