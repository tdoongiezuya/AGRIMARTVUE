// require("dotenv").config();

const express = require("express");
// const routes = require("./routes");
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
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.get('/chat-history', (req, res) => {
  db.getConnection((err, conn) => {
    console.log('aaa')
    conn.query('SELECT * FROM chat', (err, result) => {
      res.send(result)
    })
  })
})
io.on("connection", (socket) => {
  socket.on("message", (message) => {
    db.getConnection((err, conn) => {
      conn.query(
        "INSERT INTO chat(receiver_id, sender_id, datetime, message, is_deleted) VALUES (?, ?, ?, ?, ?)",
        [message.receiver_id, message.sender_id, message.datetime, message.message, 0],
        (err, res,) => {
          conn.query(
            "SELECT * FROM chat WHERE chat_id = ? LIMIT 1",
            [res.insertId],
            (err, res) => {
              console.log(message)
              io.emit(`message sent: ${message.sender_id}`, res[0]); 
              io.emit(`${message.receiver_id}`, res[0]);
            }
          );
        }
      );
    });
  });
});

// app.use("/", routes);
