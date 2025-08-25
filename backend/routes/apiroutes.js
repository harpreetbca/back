import { getproduct, createproduct, updateproduct, deleteproduct } from "../controller/products.controllers.js";
import express from "express";

const route = express.Router();

route.get("/getproduct", getproduct);
route.post("/createproduct", createproduct);
route.put("/updateproduct/:id", updateproduct);
route.delete("/deleteproduct/:id", deleteproduct);

export default route;
