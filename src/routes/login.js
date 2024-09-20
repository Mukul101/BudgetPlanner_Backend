const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt= require("jsonwebtoken");

const JWT_SECRET_KEY=process.env.JWT_SECRET_KEY;

const router = express.Router();
router.post("/", async (req, res) => {
  const {email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields Required" });
  }
  try {
    const user_email = await User.findOne({email});
    if (!user_email ) {
      return res.status(400).json({ message: "Email does not exists" });
    }
    if(user_email.password!==password){
        return res.status(401).json({message: "Invalid Credentials"});
    }

    const token =jwt.sign(
        {
        email:email,
         username:user_email.username
        },
        JWT_SECRET_KEY,
        {expiresIn:"2h"}
    );
    return res.status(200).json({message: " Login Successfull",token});
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports= router;