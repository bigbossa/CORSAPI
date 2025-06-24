// app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');     
const app = express();

app.use(cors({
  credentials: true, // Allow credentials
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  origin: ['http://localhost:8080', 'http://192.168.1.177:8080'] // Adjust the origin as needed
}));  

app.get('/', (req, res) => {
  res.send('Welcome to the Stripe API');
});

app.use(express.json());

const stripeRoutes = require('./routes/stripe');
app.use('/stripe', stripeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
