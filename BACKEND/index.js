require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const chatRoutes = require("./routes/chatRoutes"); // Import chat routes
const { initializeSocketIO } = require("./controllers/chatController");
const db = require("./db");
const app = express();
const cors = require("cors");
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

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
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
initializeSocketIO(io);