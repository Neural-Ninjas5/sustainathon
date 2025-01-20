const express = require('express');
const cors = require('cors');
const connectToMongoDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectToMongoDB();


// Routes
app.use('/', productRoutes);

// Communication with FASTAPI
app.post('/calculate-sum', async (req, res) => {
    try {
        
        const response = await axios.post('http://127.0.0.1:8000/sum', {
            x: req.body.x,
            y: req.body.y
        });
        // Send back the sum received from the FastAPI server
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error communicating with the FastAPI server');
    }
});

// Start server
app.listen(5000, () => console.log(`Server running on port ${PORT}`));



