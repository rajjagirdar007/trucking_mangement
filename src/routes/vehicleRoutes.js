// src/routes/vehicleRoutes.js
const express = require('express');
const { createVehicle, listVehicles } = require('../controllers/vehicleController');

const router = express.Router();

router.post('/vehicles', createVehicle);
router.get('/vehicles', listVehicles);

module.exports = router;

