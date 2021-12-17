const express = require('express');
const router =  express.Router();

const itenaryController = require('../controllers/itenaries');

router.get('/', itenaryController.getItenaries);

router.post('/', itenaryController.addItenary);

router.post('/vehicleroute', itenaryController.addVehicleRoute);

router.delete('/:id', itenaryController.deleteItenary);

module.exports = router;