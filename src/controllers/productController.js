import productService from "../services/productService.js";
const productControl=async (req,res)=>{
    // console.log(req.user)
   try{

    const filterProduct=await productService.getProduct();
    res.status(200).json(filterProduct);   
   }
   catch(error){
    res.status(500).json({ message: "Error creating product", error: error.message });

   }
}
const postRequest=async(req,res)=>{
    try{
    // Ensure createdBy uses the authenticated user's ObjectId
    const createdBy = req.user?._id || req.user?.id || req.user?.userId; 
    const data=await productService.createProduct(req.body, createdBy);
    res.status(201).json(data);
    }
    catch(error){
        // res.status(500).json({message:"error in creating product",error:error.message});
        res.status(500).send(error.message);
    }
}




const getsProductById=async(req,res)=>{
const id=req.params.id;
const productById=await productService.getProductById(id);
// res.send(`the id is ${id}`);
res.status(201).json(productById);
}


const updatesProductsById=async(req,res)=>{
const id=req.params.id;
try{
    const updatedData=await productService.updateProduct(id,req.body);
res.status(201).json(updatedData);
}
catch(error){
  res.status(500).send(error.message);  
}
}

const deleteProductsById=async(req,res)=>{
    const id=req.params.id;
    try{
        await productService.deleteProduct(id)
        res.send(`data deleted successfully having id : ${id}`)
    }
    catch(error){
        res.status(500).send(error.message);    
    }
}
export default {postRequest,
    productControl,
    getsProductById,
    updatesProductsById,
    deleteProductsById};


// const putRequest=(req,res)=>{
//     res.send("showing one product");
// }




// export default {productControl,putRequest,getProductById,createProduct};
