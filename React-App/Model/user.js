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
const Us1 = mongoose.models.reactus || mongoose.model("reactus", CreateSchema);

export default Us1;


