import mongoose from "mongoose"; 
const connection = async() => { 
  try { 
    const conn = await mongoose.connect(process.env.MONGODB_URL); 
    console.log("mongoDB connected") } 
    catch(error) { 
      console.error(`Error : ${error.message}`); } }; 
      
      export default connection;