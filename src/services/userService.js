import userModule from "../models/users.js";

const createUser =async (data)=>{
 try{
       const user=await userModule.create(data)
    return user;
 }
 catch(error){
    throw error;
 }
 
};

const getUser= async(query)=>{
   const users= await userModule.find();
   return users;  
}
const getUserById=async(id)=>{
   const users=await userModule.findById(id);
   return users;
}

export default{createUser,getUser,getUserById};