import mongoose from "mongoose";
import { ADMIN, MERCHANT, USER } from "../constants/roles.js";


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"user name must be required"],
    },
    phone:{
        type:String,
        required:[true,"phone number must be required"],
        unique:[true,"phone number must be unique"],
    },
    password:{
       type:String,
       required:[true,"password must be required"],
       minLength:[6,"password length must be more 6 letter"],
       
      
    },
    roles:{
        type:[String],
        default:[USER],
        enum:[USER,ADMIN,MERCHANT],
    },
    imageurl:{
        types:String,
    },
      createdAt:{
        type:Date,
        default:Date.now(),
    },
    
})

const User=mongoose.model("User",userSchema);
export default User;