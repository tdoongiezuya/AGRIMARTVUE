const express = require("express");
const router = express.Router();
const { getChatHistory, sendMessage, receiveMessage } = require("../controllers/chatController");

// Route for retrieving chat history
router.get("/history", getChatHistory);

// Route for sending a message
router.post("/send", sendMessage);

// Route for receiving a message
router.get("/receive", receiveMessage);

module.exports = router;