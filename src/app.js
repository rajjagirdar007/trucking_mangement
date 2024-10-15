const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const dotenv = require('dotenv');
const driverRoutes = require('./routes/driverRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');

const initializeApp = require('firebase/app');

const getAnalytics = require('firebase/analytics');
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAlS5xvXvb-oawbMNbeHxWtILMGA7rgzc",
  authDomain: "transport-40347.firebaseapp.com",
  projectId: "transport-40347",
  storageBucket: "transport-40347.appspot.com",
  messagingSenderId: "1094555613233",
  appId: "1:1094555613233:web:286dd165f74506ec903d10",
  measurementId: "G-ZLYPGM2Q4T"
};

// Initialize Firebase
const app1 = initializeApp(firebaseConfig);
const analytics = getAnalytics(app1);
dotenv.config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Trucking Management API');
});

app.use('/api', driverRoutes);
app.use('/api', vehicleRoutes);

