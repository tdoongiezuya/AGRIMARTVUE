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

// Multer configuration
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Adjust the destination directory as needed
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Apply the Multer upload middleware to all routes
app.use(upload.any());

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
