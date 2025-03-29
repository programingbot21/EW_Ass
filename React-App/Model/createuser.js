import mongoose from "mongoose";
// import TransactionSchema from "./transaction.js";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        uniqe: true,
        require: true,

    },

   

    password:{
        type: String,
        require: true
    },

   
  
 
  


}, {timestamps:true})

const User = mongoose.model('task', userSchema)

export default User;
