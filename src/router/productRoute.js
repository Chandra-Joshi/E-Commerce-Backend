import express from 'express'
import productController from '../controllers/productController.js';
import auth from '../middlewares/auth.js'
import roleBasedAuth from '../middlewares/roleBasedAuth.js';
import { MERCHANT } from '../constants/roles.js';
const route= express.Router();
route.post("/",auth,roleBasedAuth(MERCHANT),productController.postRequest);
route.get("/",productController.productControl);
route.get("/:id",productController.getsProductById);
route.put("/:id",auth,roleBasedAuth(MERCHANT),productController.updatesProductsById)
route.delete("/:id",auth,roleBasedAuth(MERCHANT),productController.deleteProductsById)

export default route;
// route.get("/:id",productController.getProductById);

// route.get("/", (req,res)=>{
//     res.send("showing all product");
// });

// route.put("/one",productController.putRequest);
