import mongoose from "mongoose";

const CreateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
    Last_Name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
    password: {
        type: String,
        required: true
    },
  
});

// Check if the model already exists before defining it
const User1 = mongoose.models.User || mongoose.model("User", CreateSchema);

export default User1;