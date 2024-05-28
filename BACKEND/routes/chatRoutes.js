const express = require("express");
const router = express.Router();
const { getChatHistory, sendMessage, receiveMessage } = require("../controllers/chatController");

router.get("/history", getChatHistory);
router.post("/send", sendMessage);
router.get("/receive", receiveMessage);

module.exports = router;