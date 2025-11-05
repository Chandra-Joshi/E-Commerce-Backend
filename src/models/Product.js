import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"product name must be required"],
    } ,
   category:{
        type:String,
        required:[true,"product category must be required"],
    },
    brand:String,
    price:{
        type:Number,
        required:[true,"product number must be required"],
        min:[1, "the price must be in positive"],
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    stock:{
        type:Number,
        default:1,
        // default:[1,"default no of product in the stock must be 1"],
        required:[true, "no the product in stock is required"],
        max:[100,"max number of product in stock should be 100"],
    },
    Image:{
        type:[String], 
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,"created by user id is required"],
    }
})
const Product=mongoose.model("Product",productSchema);
export default Product;