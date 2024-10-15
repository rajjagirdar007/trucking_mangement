// src/models/driverModel.js
const admin = require('firebase-admin');
const db = admin.firestore();

const addDriver = async (driver) => {
    const driverRef = db.collection('drivers').doc(driver.id);
    await driverRef.set(driver);
    return driver;
};

const getDrivers = async () => {
    const snapshot = await db.collection('drivers').get();
    return snapshot.docs.map(doc => doc.data());
};

module.exports = { addDriver, getDrivers };

