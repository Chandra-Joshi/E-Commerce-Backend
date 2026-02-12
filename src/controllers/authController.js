/*
import authService from '../services/authServices.js';

const regUserController = async (req, res) => {
    const input=req.body;
    if(!input.password){
        return res.status(400).send("password is required");
    }
    if(!input.confirmPassword){
        return res.status(400).send("confirmPassword is required");
    }

    if (input.password!==input.confirmPassword){
        return res.status(400).send("password do not match");
    }
  try {
    const data = await authService.registerUser(req.body);                                  
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const loginUser=async (req,res)=>{
    try{
        const input=req.body;
     if(!input){
       return res.status(400).send("messing value , data must be required");  
     }
    if(!input.phone){
        return res.status(400).send("phone number  is required");
    }
    if(!input.password){
        return res.status(400).send("Password is required");
    }
    const data=await authService.loginUser(input);
    res.status(201).json(data);
    }
    catch(error){
     res.status(500).send(error.message);   
    }
}

export default { regUserController,loginUser };

*/

import { json } from "express";
import authService from "../services/authServices.js";
import jwtToken from "../utils/jwt.js"
import config from "../config/config.js";

// REGISTER CONTROLLER
const regUserController = async (req, res) => {
  const input = req.body;

  if (!input.password) {
    return res.status(400).send("Password is required");
  }

  if (!input.confirmPassword) {
    return res.status(400).send("Confirm Password is required");
  }

  if (input.password !== input.confirmPassword) {
    return res.status(400).send("Passwords do not match");
  }

  try {
    const data = await authService.registerUser(input);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// LOGIN CONTROLLER
const loginUser = async (req, res) => {
  try {
    const input = req.body;

    if (!input.phone) {
      return res.status(400).send("Phone number is required");
    }
    if (!input.password) {
      return res.status(400).send("Password is required");
    }

    const data = await authService.loginUser(input);
    //  const token= jwt.sign(data.toObject(),"secret");
//     const token = jwt.sign(
//   { id: data._id, phone: data.phone }, // only store necessary info
//   "secret",
//   { expiresIn: "1h" } // optional expiry
// );
// now this whole code is place in jwt.js 

    // const token = jwt.sign("hello","secret"); this is the one way. not working properly 
    // const token= jwt.sign(JSON.stringify(data),"secret"); // this is working...

    const tokens=jwtToken.createToken(data);

    res.cookie(config.cookieName, tokens, { maxAge: config.cookieMaxAgeMs });
    res.json(data);
    // const result=await jwtToken.verifyToken(tokens)
    // console.log(tokens);
    // res.status(200).json({message:"login successfully",data:data,token:tokens});


  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  regUserController,
  loginUser,
};
