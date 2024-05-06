require("dotenv").config();

const express = require("express");

const routes = require("./routes");

const db = require("./db");
const { readFileSync } = require("fs");
const app = express();
const cors = require("cors");
const port = 3000;
// Middleware
app.use(cors());
app.use(express.json());

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use("/", routes);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.get("/chat-history", async (req, res) => {
  const result = await db.query("SELECT * FROM chat");
  console.log(result);
  res.send(result[0]);
});
io.on("connection", (socket) => {
  console.log("connected");
  db;
  socket.on("message", async (message) => {
    const res = await db.query(
      "INSERT INTO chat(receiver_id, sender_id, datetime, message) VALUES (?, ?, ?, ?)",
      [
        message.receiver_id,
        message.sender_id,
        message.datetime,
        message.message,
        0,
      ]
    );
    const msg = await db.query("SELECT * FROM chat WHERE chat_id = ? LIMIT 1", [res[0].insertId]);
    console.log(msg)
    io.emit(`message sent: ${message.sender_id}`, msg[0][0]);
    io.emit(`${message.receiver_id}`, msg[0][0]);
    (err, res) => {
      console.log(err + "fffff");
    };
  });
});
