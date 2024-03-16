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
    });
  } catch (error) {
    res.status(500).json("internal server error");
    next(error);
  }
};

// Login Logic
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    const passwordValid = await userExist.comparePassword(password);
    if (passwordValid) {
      res.status(200).json({ msg: "Login Successful" });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, login };
