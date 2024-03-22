require("dotenv").config();
const express = require("express");
const connectDB = require("./utilities/db");
const concernRoute = require("./routers/concern-router");
const authRoute = require("./routers/auth-router");
const cors = require("cors");

const app = express();
app.use(express.json());

// Handling cors
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("The server is Working");
});

app.use("/api/form", concernRoute);
app.use("/api/auth", authRoute);

const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
});
