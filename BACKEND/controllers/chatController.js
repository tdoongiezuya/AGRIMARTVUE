const { insertChatMessage, getChatMessageById } = require("../models/Chat");
const db = require("../db");

function initializeSocketIO(io) {
  io.on("connection", (socket) => {
    console.log("connected");

    socket.on("message", async (message) => {
      const chatId = await insertChatMessage(message);
      const msg = await getChatMessageById(chatId);

      // Emit to a room named after the receiver_id
      io.to(`room_${message.receiver_id}`).emit('message', msg);
    });
  });
}

async function getChatHistory(req, res) {
  try {
    const result = await db.query("SELECT * FROM chat");
    res.send(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function sendMessage(req, res) {
  const { receiver_id, sender_id, datetime, message } = req.body;

  try {
    const chatId = await insertChatMessage({ receiver_id, sender_id, datetime, message });
    const msg = await getChatMessageById(chatId);

    res.status(201).json(msg);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function receiveMessage(req, res) {
    const { chat_id } = req.query;
  
    if (!chat_id) {
      return res.status(400).json({ error: "Missing chat_id parameter" });
    }
  
    try {
      const message = await getChatMessageById(chat_id);
  
      if (!message) {
        return res.status(404).json({ error: "Message not found" });
      }
  
      // Send the received message data as the response
      return res.status(200).json(message);
    } catch (error) {
      console.error("Error receiving message:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
  initializeSocketIO,
  getChatHistory,
  sendMessage,
  receiveMessage,
};