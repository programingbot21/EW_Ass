import express from "express";


import Us1 from "../Model/user.js";
// import User1 from "../Model/createuser.js";


const router = express.Router();

// Create User
router.post("/users/create", async (req, res) => {
  try {
    const user = new Us1(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 67e8371a86f868fef8db867d

// Update User
router.put("/users/:userId", async (req, res) => {
  const updatedUser = await Us1.findByIdAndUpdate(req.params.userId, req.body, { new: true });
  res.json(updatedUser);
});

// Delete User
router.delete("/users/:userId", async (req, res) => {
  await Us1.findByIdAndDelete(req.params.userId);
  res.json({ msg: "User deleted" });
});





  

router.get("/", async (req, res) => {
  try {
    const users = await userId.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});




export default router;
