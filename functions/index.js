const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
// stripe follow by (secretKey)
const stripe = require('stripe')('sk_test_51HPxZmJwkWsUqA7G4ufMmMNKHk0KUtI09BObOo6ZyRGg2P2JljYeH01PGspLOERd8HUHsXicoPS7hCvl512EPZnQ00d851B0Sz');

// API

// App config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send('Hello world'))

app.post('/payments/create', async (req, res) => {
	
})

// Listen command
exports.api = functions.https.onRequest(app);

// EMULATE IT IN TERMINAL
// firebase emulators:start

// Example Endpoint
// (http://localhost:5001/clone-cp/us-central1/api)