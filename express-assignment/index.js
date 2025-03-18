require('dotenv').config(); // Load environment variables at the top

const express = require('express');
const connectDB = require('./config/db'); // MongoDB connection file
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 5000; // Access PORT from .env

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/users', require('./routes/userRoutes'));
app.use('/products', require('./routes/productRoutes'));

// Start Server
app.listen(PORT, () => {
    console.log( 'Server running on port ${PORT}');
});