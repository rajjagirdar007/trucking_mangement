// src/models/vehicleModel.js
const admin = require('firebase-admin');
const db = admin.firestore();

const addVehicle = async (vehicle) => {
    const vehicleRef = db.collection('vehicles').doc(vehicle.id);
    await vehicleRef.set(vehicle);
    return vehicle;
};

const getVehicles = async () => {
    const snapshot = await db.collection('vehicles').get();
    return snapshot.docs.map(doc => doc.data());
};

module.exports = { addVehicle, getVehicles };

