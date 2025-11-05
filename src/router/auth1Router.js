import auth1Controller from "../controllers/auth1Controller.js";
import express from 'express'
const auth1Route=express.Router();
auth1Route.post("/register",auth1Controller.regUser)
auth1Route.post("/login",auth1Controller.login1User)

export default auth1Route;