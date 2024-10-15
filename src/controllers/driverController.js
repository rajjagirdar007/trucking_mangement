// src/controllers/driverController.js
const { addDriver, getDrivers } = require('../models/driverModel');

const createDriver = async (req, res) => {
    try {
        const driver = req.body;
        const newDriver = await addDriver(driver);
        res.status(201).json(newDriver);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listDrivers = async (req, res) => {
    try {
        const drivers = await getDrivers();
        res.status(200).json(drivers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createDriver, listDrivers };

