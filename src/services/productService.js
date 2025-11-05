import fs from 'fs';
import Product from "../models/Product.js"

 const createProduct=async(data,createdBy)=>{
    try{
         const product= await Product.create({...data,createdBy});
        return product;  
    }
    catch(error){
        throw error;
    }

    }

const getProduct = async(query) => {
 
   const products=await Product.find();//.populate("createdBy") 
    return products;
}

const getProductById=async(id)=>{
const product=await Product.findById(id);
    return product;
}

const updateProduct=async(id,data)=>{
    const updatedProduct=await Product.findByIdAndUpdate(id,data,{new:true});
    return updatedProduct;
}
const deleteProduct=async(id)=>{
 await Product.findByIdAndDelete(id);
   
};

export default  {getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct}
