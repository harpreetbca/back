import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    productname: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
  },
  { timestamps: true }
);

const productmodel = mongoose.model('products', productSchema);
export default productmodel;
