import userModule from "../models/users.js";
//create user
const createUser =async (data)=>{
 try{
       const user=await userModule.create(data)
    return user;
 }
 catch(error){
    throw error;
 }
 
};
//get all user(basically read operation)
const getUser= async(query)=>{
   const users= await userModule.find();
   return users;  
}
//get the user as id is provided ( also a read operation)
const getUserById=async(id)=>{
   const users=await userModule.findById(id);
   return users;
}

// UPDATE USER

const updateUser = async (id, data) => {
  const user = await userModule.findByIdAndUpdate(
    id,
    data,
    { new: true, runValidators: true }
  );
  return user;
};


//  DELETE USER

const deleteUser = async (id) => {
  const user = await userModule.findByIdAndDelete(id);
  return user;
};

export default{createUser,getUser,getUserById,deleteUser,updateUser};