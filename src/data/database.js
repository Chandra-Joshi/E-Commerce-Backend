import mongoose from "mongoose"
import config from "../config/config.js";
// using  .then() and .catch()

// const connectdb =function connect (){
//     mongoose.connect("mongodb://localhost:27017/merndata").then(()=>{
//     console.log("database connected")
// }).catch((error)=>console.log(error))
// }


//using async and await method 
async function connectDb(){
    try{
        await mongoose.connect(config.mongoUri)
        // console.log(`mongodb connected:${status.connection.host}`)
        }
        catch(error){
            console.log(error)
        }}
    

export default connectDb;