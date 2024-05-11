require("dotenv").config();
const express = require("express");
const connectDB = require("./utilities/db");
const concernRoute = require("./routers/concern-router");
const authRoute = require("./routers/auth-router");
const cors = require("cors");
const dataRoute = require("./routers/data-router");
const dbRoute = require("./routers/db-router");
const emailRoute = require("./routers/email-router");
const mqtt = require("mqtt");
const app = express();
// Import required modules
const http = require("http");
const Server = require("socket.io");
const server = http.createServer(app);
const ioPORT = 4000;
// const io = new Server(server);

const io = Server(server, {
  cors: {
    origin: "*",
  },
});
// const socketPort = 8083;
io.on("connection", (socket) => {
  console.log("New client is connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
io.emit("message", "bye");
try {
  server.listen(ioPORT, () => {
    console.log(`Connected successfully on port ${ioPORT}`);
  });
} catch (error) {
  console.error(`Error occurred: ${error.message}`);
}

app.use(express.json());

// Handling cors
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

const protocol = "mqtt";
const host = "broker.emqx.io";
const port = "1883";
const clientId = `esp32-client-`;

const connectUrl = `${protocol}://${host}:${port}`;

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: "emqx",
  password: "public",
  reconnectPeriod: 1000,
});
const topic_fire = "emqx/esp32/fire";
const topic_water = "emqx/esp32/water";
const topic_bin = "emqx/esp32/bin";
client.on("connect", () => {
  console.log("Connected");
  client.subscribe([topic_fire], () => {
    console.log(`Subscribe to topic '${topic_fire}'`);
  });
  client.subscribe([topic_water], () => {
    console.log(`Subscribe to topic '${topic_water}'`);
  });
  client.subscribe([topic_bin], () => {
    console.log(`Subscribe to topic '${topic_bin}'`);
  });
});

function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

client.on("message", (topic_fire, payload) => {
  console.log("Received Message:", topic_fire, payload.toString());

  if (isJsonString(payload.toString())) {
    io.emit("message", payload.toString());
  }
});

client.on("message", (topic_water, payload) => {
  console.log("Received Message :", topic_water, payload.toString());

  if (isJsonString(payload.toString())) {
    io.emit("message", payload.toString());
  }
});

client.on("message", (topic_bin, payload) => {
  console.log("Received Message :", topic_bin, payload.toString());

  if (isJsonString(payload.toString())) {
    io.emit("message", payload.toString());
  }
});

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("The server is Working");
});
app.post;

app.use("/api/form", concernRoute);
app.use("/api/auth", authRoute);
app.use("/api/data", dataRoute);
app.use("/api/db", dbRoute);
app.use("/api/email", emailRoute);
const PORT = 80;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
});
