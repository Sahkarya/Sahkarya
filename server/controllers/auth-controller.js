const User = require("../models/user-models");
const bcrypt = require("bcryptjs");

// Registration Logic
const register = async (req, res, next) => {
  try {
    const { name, identity, phone, email, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }
    const userCreated = await User.create({
      name,
      identity,
      phone,
      email,
      password,
    });
    res.status(201).json({
      msg: "User Successfully registered",
      token: await userCreated.generateToken(),
      userId: userCreated.id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

// Login Logic
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    const passwordValid = await userExist.comparePassword(password);
    if (passwordValid) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
  }
};

// Send User data
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

module.exports = { register, login, user };
