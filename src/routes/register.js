const express = require("express");
const bcrypt = require("bcryptjs");
const user = require("../models/user");

const router=express.Router();
router.get("/mukul",async(req,res) => {
    console.log("abcdg");
 
})

router.post("/register",async(req,res) => {
    console.log("abcdg");
    const {username,email,password}= req.body;
    console.log(username,email,password);
})

module.exports=router;