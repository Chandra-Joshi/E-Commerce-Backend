import User from "../models/users.js";
import bcrypt from "bcryptjs";

const loginUserss=async(data)=>{
    const user= await User.findOne({phone:data.phone});
    const isPasswordMatched=bcrypt.compareSync(data.password,user.password);
    if(!isPasswordMatched) throw{statuscode:400,message:"incorrect phone or password"
    }
    return user;
}

const registerUser1=async(data)=>{
    const hashedPassword=bcrypt.hashSync(data.password);
    return await User.create({
        name:data.name,
        phone:data.phone,
        password:hashedPassword,
    });
}
export default{registerUser1,loginUserss};