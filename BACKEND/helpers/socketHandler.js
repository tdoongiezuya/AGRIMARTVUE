const db = require("../db");

function initializeSocketIO(server) {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("connected");

    socket.on("message", async (message) => {
      const res = await db.query(
        "INSERT INTO chat(receiver_id, sender_id, datetime, message) VALUES (?, ?, ?, ?)",
        [
          message.receiver_id,
          message.sender_id,
          message.datetime,
          message.message,
        ]
      );

      const msg = await db.query(
        "SELECT * FROM chat WHERE chat_id = ? LIMIT 1",
        [res[0].insertId]
      );

      io.emit(`message sent: ${message.sender_id}`, msg[0][0]);
      io.emit(`${message.receiver_id}`, msg[0][0]);
    });
  });
}

module.exports = initializeSocketIO;