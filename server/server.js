require("dotenv").config();
const express = require("express");
const connectDB = require("./utilities/db");
const concernRoute = require("./routers/concern-router");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("The server is Working");
});

app.use("/api/form", concernRoute);

const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
});
