const { UserModel } = require("../model/UserModel");
const {createSecretToken} = require("../util/SecretToken");


const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists",success: false });
    }
    const user = await UserModel.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: false,
      secure: true,        // required for SameSite: None
      sameSite: "none",
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user : user.username });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await UserModel.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
      httpOnly: false, 
      secure: true,
       sameSite: "none",
     });
     res.status(201).json({ message: "User logged in successfully", success: true ,username:user.username}); 
     next()
  } catch (error) {
    console.error(error);
  }
};

module.exports.Logout = (req, res) => {
  res.cookie("token", "", {
    httpOnly: false,
    secure: true,
    sameSite: "none",
    expires: new Date(0), // expires immediately
  });
  res.status(200).json({ success: true, message: "Logged out successfully" });
};

