const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  try {
    const { name, email, password, mobile } = req.body;
    if (!name || !email || !password || !mobile) {
      return res.status(400).json({ message: "Something Missong" });
    }

    const isExist = await User.findOne({ email: email });
    if (isExist) {
      return res.status(409).json({
        message: "User Already Exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password , 10);

    const userData = new User({
      name,
      email,
      password : hashedPassword,
      mobile,
    });

    await userData
      .save()
      .then(() => res.json({ message: "User Register Succesfully" }))
      .catch(() => res.json({ message: "resgistration failed" }));
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "Server Issue" });
  }
};



// Login 

const loginUser = async (req, res) => {
    try{
    const {email , password} = req.body;
    const isExist = await User.findOne({ email });
    if (!isExist) {
        return res.status(404).json({
          message: "Invalid Credentials!!",
          });
    }
    const hashedPassword = await bcrypt.compare(password , isExist.password)
  
    if (!hashedPassword) {
      return res.status(404).json({
          message: "Invalid Credentials!!",
        });
  }

  const token =  jwt.sign({userId : isExist._id} , process.env.SECRET_CODE , {expiresIn : "60h"})
  res.status(200).json({message : "User Logged in Succesfully!! " , token : token , name: isExist.name})

    
}
catch(err){
  console.log(err)
    return res.status(500).json({
        message: "Server Issue",
      });
}
}


module.exports = { registerUser , loginUser};
