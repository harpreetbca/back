import productmodel from '../models/products.js';
import mongoose from 'mongoose';

// Get all products
export const getproduct = async (req, res) => {
  try {
    const prodata = await productmodel.find({});
    res.status(200).json({ success: true, data: prodata });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create product
export const createproduct = async (req, res) => {
  const { productname, price, stock } = req.body;
  if (!productname || !price || !stock) {
    return res.status(400).json({ success: false, message: "Please fill all the fields" });
  }

  try {
    const newpro = new productmodel({ productname, price, stock });
    await newpro.save();
    res.status(201).json({ success: true, data: newpro });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update product
export const updateproduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid ID" });
  }

  try {
    const updatedProduct = await productmodel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete product
export const deleteproduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid ID" });
  }

  try {
    await productmodel.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: error.message });
  }
};
