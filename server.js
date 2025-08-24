import connection from './backend/config/db.js'; 
import route from './backend/routes/apiroutes.js'; 
import express from 'express'; 
import dotenv from 'dotenv'; 
dotenv.config(); 
const app = express(); 
const Port = process.env.PORT || 5000; 
app.use(express.json()); 
app.use("/products", route); 
app.listen(Port , () => { 
    connection(); 
    console.log(`server connected on port ${Port}`); });