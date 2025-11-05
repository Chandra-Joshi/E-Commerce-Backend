import auth1Services from "../services/auth1Services.js";
import jwt1 from "../utils/jwt1.js";

const login1User= async(req,res)=>{
    const input=req.body;
    // if(!input.name){
    //     res.status(500).send("name is required");
    // }
    if(!input.phone){
        res.status(500).send("phone number is required");
    }
    if(!input.password){
        res.status(500).send("password  is required");
    }
   try{
    const data= await auth1Services.loginUserss(req.body);

    //generate webtoken
    // const tokens=jwt.sign(JSON.stringify(data),"secret"); this is not a good practice to write this code in controller, for this make a folder util, and make js file called jwt.js write that token related code there.
    // console.log(tokens);// utils folder contain that kinds of the code which can just copy and paste to the another project without changing anything in the code.
        // const token = jwt1.createtoken(data);
        // Optional: verify to confirm it's valid (for debugging only)
//         try {
//             const result = await jwt1.verifyToken(token);
//             console.log( result);
//         } catch (e) {
//             console.log("token verify failed:", e.message);
//         }
//         res.status(201).json({ data, token });
//    }


const token = jwt1.createtoken(data);
res.cookie("token",token,{maxAge:60*60*1000});
res.json(data);
   }
   catch(error){
     res.status(error.statuscode || 500).send(error.message);
   }
};

   

const regUser= async(req,res)=>{
    const input=req.body;
    if(!input.password){
        res.status(500).send("password is required");
    }
    if(!input.confirmPassword){
        res.status(500).send("confirmPassword is required");
    }
    if(input.confirmPassword!=input.password){
        res.status(500).send("your password do not match");
    }

    try{
        const user=await auth1Services.registerUser1(req.body);
       
    
        const token = jwt1.createtoken(req.body);
        res.cookie("token",token,{maxAge:60*60*1000});
         res.status(201).json(user);
         console.log(token)
      
    }
    catch(error){
    
       res.status(500).send(error.message);
    }
    
};



export default{regUser,login1User};