const mongoose = require("mongoose");

const URL = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    mongoose.connect(URL);
    console.log("Database Connection successful");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(0);
  }
};

module.exports = connectDB;
