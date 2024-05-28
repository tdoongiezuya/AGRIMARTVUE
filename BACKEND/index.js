require("dotenv").config();
const express = require("express");
const mysql = require('mysql2/promise');
const routes = require("./routes");
const db = require("./db");
const { readFileSync } = require("fs");
const app = express();
const cors = require("cors");
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' })); // Increase the JSON payload limit

// Multer configuration
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // Adjust the destination directory as needed
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // Adjust the file size limit as needed (10MB in this example)
});

// Apply the Multer upload middleware to all routes
app.use(upload.any());

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/", routes);

// Import and initialize Socket.io
const initializeSocketIO = require("./helpers/socketHandler");
initializeSocketIO(server);

app.get("/chat-history", async (req, res) => {
  const result = await db.query("SELECT * FROM chat");
  console.log(result);
  res.send(result[0]);
});