// require("dotenv").config();

const express = require("express");
// const bodyParser = require("body-parser");
// const routes = require("./routes");
// const db = require("./db");
const { readFileSync } = require("fs");
const app = express();
const cors = require('cors')
const port = 3000;
// Middleware
app.use(cors())
app.use(express.json());

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const io = require("socket.io")(server, {
  cors: {
    origin: "*"
  },
});
io.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log(message)
    io.emit(message.receiver_id, message)
  })
});

// app.use("/", routes);


// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to database: " + err.stack);
//     return;
//   }
//   console.log("Connected to database");
// });
