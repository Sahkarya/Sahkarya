require("dotenv").config();
const express = require("express");
const connectDB = require("./utilities/db");

const app = express();

const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
});


