const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = 'newtonSchool';

const decodeToken = (req, res, next) => {
  try {
    let { token } = req.body;
    console.log(token);
    const decodedToken = jwt.verify(token, JWT_SECRET);
    res.status(200).json({ payload: decodedToken, status: 'Success' });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      error: err.message,
    });
  }
};

// Function for user signup
const signup = async (req, res, next) => {
  try {
    console.log(req.body)
    const {username,email,password} = req.body;
    const user = new User({
      username,
      email,
      password
    })
    await user.save()
    res.status(201).json({message: 'User created successfully',data:{
      user,
    }})
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      error: err.message,
    });
  }
};

// Function for user login
const login = async (req, res, next) => {
  const {email,password} = req.body;
  if(!email || !password){
    return res.status(400).json({message: 'Please provide both email and password',status:"Error"})
  }
  try {
   const user = await User.findOne({email})
   if(!user){
    return res.status(401).json({message: 'Invalid email or password',status:"Error",
      error:'Invalid credentials'})
   }
   const isValidPassword = await bcrypt.compare(password,user.password);
   if(!isValidPassword){
    return res.status(401).json({message: 'Invalid email or password',status:"Error",
      error:'Invalid Credentials'})
   }
   const token = jwt.sign(
    {userId:user._id, username:user.username,email:user.email},
    JWT_SECRET,
    {
      expiresIn:'1h'
    }
  )
  res.status(200).json({token,status:'Success'})
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      error: err.message,
    });
  }
};

module.exports = { login, signup, decodeToken };
