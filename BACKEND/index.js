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

app.get('/chat-history', (req, res) => {
  db.getConnection((err, conn) => {
    conn.query('SELECT * FROM chat', (err, result) => {
      res.send(result)
    })
  })
})
io.on("connection", (socket) => {
  console.log('connected')
  socket.on("message", (message) => {
    console.log(message)
    db.getConnection((err, conn) => {
      conn.query(
        "INSERT INTO chat(receiver_id, sender_id, datetime, message) VALUES (?, ?, ?, ?)",
        [message.receiver_id, message.sender_id, message.datetime, message.message, 0],
        (err, res,) => {
          console.log(err + 'fffff')
          conn.query(
            "SELECT * FROM chat WHERE chat_id = ? LIMIT 1",
            [res.insertId],
            (err, res) => {
              console.log(err)
              io.emit(`message sent: ${message.sender_id}`, res[0]); 
              io.emit(`${message.receiver_id}`, res[0]);
            }
          );
        }
      );
    });
  });
});
