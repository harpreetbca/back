import connection from './backend/config/db.js';
import route from './backend/routes/apiroutes.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const Port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests from frontend
app.use(express.json());

// Routes
app.use("/products", route);

// Start server
app.listen(Port, () => {
    connection();
    console.log(`Server connected on port ${Port}`);
});
