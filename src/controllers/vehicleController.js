// src/controllers/vehicleController.js
const { addVehicle, getVehicles } = require('../models/vehicleModel');

const createVehicle = async (req, res) => {
    try {
        const vehicle = req.body;
        const newVehicle = await addVehicle(vehicle);
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listVehicles = async (req, res) => {
    try {
        const vehicles = await getVehicles();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createVehicle, listVehicles };

