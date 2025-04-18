import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js"

import createAuthRoutes from "./routes/createAuth.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api", createAuthRoutes);





mongoose
  .connect(process.env.MONGO_URI) // Removed deprecated options
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(7001, () => {
  console.log("Server running on port 7001");
});




// MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB Connected"))
// .catch((err) => console.log(err));

// app.listen(7001, () => {
//   console.log("Server running on port 7001");
// });

