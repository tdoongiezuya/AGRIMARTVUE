const db = require("../db");

async function insertChatMessage(message) {
  const res = await db.query(
    "INSERT INTO chat(receiver_id, sender_id, datetime, message) VALUES (?, ?, ?, ?)",
    [
      message.receiver_id,
      message.sender_id,
      message.datetime,
      message.message,
    ]
  );

  return res[0].insertId;
}

async function getChatMessageById(chatId) {
  const msg = await db.query(
    "SELECT * FROM chat WHERE chat_id = ? LIMIT 1",
    [chatId]
  );

  return msg[0][0];
}

module.exports = {
  insertChatMessage,
  getChatMessageById,
};
