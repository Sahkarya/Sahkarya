const User = require("../models/user-models");

// Registration Logic
const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }
    const userCreated = await User.create({
      name,
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

module.exports = { register };
