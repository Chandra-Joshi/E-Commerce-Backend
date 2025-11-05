/*
import User from "../models/users.js";

import bcrypt from 'bcryptjs';

const registerUser = async ({ name, email, phone, password, role = 'customer' }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, phone, password: hashedPassword, role });
  return await user.save();
};



// const loginUser = async(data)=>{
//  const user= await User.findOne({phone:data.phone});

//  const isPasswordMatch= bcrypt.compareSync(data.password,user.password);
//  if (!isPasswordMatch){
//     throw {message:"incorrect email or password"};
//  }
//  return user;
// }

const loginUser = async (data) => {
  // Step 1: find the user
  const user = await User.findOne({ phone: data.phone });

  // Step 2: if user not found
  if (!user) {
    throw new Error("User not found with this phone number");
  }

  // Step 3: check password
  const isPasswordMatch = bcrypt.compareSync(data.password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Incorrect phone or password");
  }

  // Step 4: return user data (you may exclude password)
  return user;
};



export default {
  registerUser,loginUser
};
*/

import User from "../models/users.js";
import bcrypt from "bcryptjs";

// REGISTER
const registerUser = async ({ name, email, phone, password, role = "customer" }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, phone, password: hashedPassword, role });
  return await user.save();
};

// LOGIN
const loginUser = async (data) => {
  const user = await User.findOne({ phone: data.phone });
  if (!user) {
    throw new Error("User not found with this phone number");
  }

  const isPasswordMatch = bcrypt.compareSync(data.password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Incorrect phone or password");
  }

  return user;
};

export default {
  registerUser,
  loginUser,
};
