// src/routes/driverRoutes.js
const express = require('express');
const { createDriver, listDrivers } = require('../controllers/driverController');

const router = express.Router();

router.post('/drivers', createDriver);
router.get('/drivers', listDrivers);

module.exports = router;

