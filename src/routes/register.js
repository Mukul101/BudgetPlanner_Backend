const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields Required" });
  }
  try {
    const existing_user = await User.findOne({username});
    const existing_email = await User.findOne({email});
    if (existing_user || existing_email) {
      return res.status(400).json({ message: "User is already exists" });
    }

    const new_user = new User({ username, email, password });
    await new_user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




module.exports = router;
