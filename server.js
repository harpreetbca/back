import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/apiroutes.js";
import connection from "./config/db.js";

dotenv.config();
const app = express();
const Port = process.env.PORT || 5000;

app.use(express.json());

// ✅ Add CORS here, before routes
app.use(
  cors({
    origin: "https://frontend-3wn7.onrender.com", // your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);


app.use("/products", route);


app.listen(Port, () => {
  connection();
  console.log(`Server connected on port ${Port}`);
});
