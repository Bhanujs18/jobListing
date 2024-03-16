const User = require("../models/user");

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

    const userData = new User({
      name,
      email,
      password,
      mobile,
    });

    await userData
      .save()
      .then(() => res.json({ message: "User Register Succesfully" }))
      .catch(() => res.json({ message: "resgistration failed" }));
  } catch (err) {
    return res.status(500).json({ message: "Server Issue" });
  }
};



// Login 

const loginUser = async (req, res) => {
    try{
    const {email , password} = req.body;
    const isExist = await User.findOne({ email , password});
    if (!isExist) {
        return res.status(404).json({
            message: "No User Found",
          });
    }
  
    
}
catch(err){
    return res.status(500).json({
        message: "Server Issue",
      });
}
}

module.exports = { registerUser , loginUser};
