
import productmodel from '../models/products.js';
import mongoose from 'mongoose';

export const getproduct = async(req,res) =>
{
    try{
         const prodata = await productmodel.find({});
         res.status(200).json({success: true, data: prodata})
    }
    catch(error)
    {
       console.log(`error : ${error.message}`);
       res.status(500).json({success:false, message : error.message });
    }
};


export const createproduct = async (req,res) =>
    {
        const product = req.body;
        if(!product.productname || !product.price || !product.stock)
            {
                return res.status(400).
                json({mesaage: false ,  message: "Please fill all the fields" });
            }   
        const newpro = new productmodel(product);
        try{
          await newpro.save();
          res.status(200).json({success: true, message: newpro});

        }   
        catch(error)
        {
res.status(500).json({success:false, message : error.message });
        }
    } ;


export const updateproduct = async (req,res) =>
    {
        const {id} = req.params;
        const product = req.body;

        if(!mongoose.Types.ObjectId.isValid(id))
        {
           return res.status(400).
            json({success: false, meassge: "input valid id"});
        }

        try{
const updatepro = await productmodel.findByIdAndUpdate(id, product, {new: true});
res.status(200).json({success: true, message: updatepro});
        }
        catch(error)
        {
res.status(500).json({success:false, message : error.message });
        }
    };     


export const deleteproduct = async (req,res) =>
    {
        const {id} = req.params;
        

        if(!mongoose.Types.ObjectId.isValid(id))
        {
           return res.status(400).
            json({success: false, meassge: "input valid id"});
        }

        try{
await productmodel.findByIdAndDelete(id);
res.status(200).json({success: true, message: "data deleted"});
        }
        catch(error)
        {
res.status(500).json({success:false, message : error.message });
        }
    };      