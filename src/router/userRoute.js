import express from 'express'
import userController from '../controllers/userController.js'
const routes= express.Router();
routes.post("/",userController.postUser)
routes.get("/",userController.getUsers)


export default routes;