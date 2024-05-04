// require("dotenv").config();

const express = require("express");
// const bodyParser = require("body-parser");
// const routes = require("./routes");
// const db = require("./db");
const { readFileSync } = require("fs");

const app = express();
const port = 3000;
const doc = readFileSync("./chat.html", "utf-8");
const doc2 = readFileSync("./chat2.html", "utf-8");
// Middleware
app.use(express.json());

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const { Server } = require("socket.io");
const io = new Server(server);
io.on("connection", (socket) => {
  socket.on("chat1", (msg) => {
    console.log(msg)
    io.emit("chat1", msg)
  });
  socket.on("chat2", (msg) => io.emit("chat2", msg));
});

// app.use("/", routes);

app.get("/test", (req, res) => {
  res.send(doc);
});
app.get("/test2", (req, res) => {
  res.send(doc2);
});

// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to database: " + err.stack);
//     return;
//   }
//   console.log("Connected to database");
// });
