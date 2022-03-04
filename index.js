const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const { connectDB } = require("./config/connect");
dotenv.config();
const port = process.env.PORT || 4030;

const app = express();

const server = http.createServer(app);

// all routes
const users = require("./routes/users");
const jobs = require("./routes/jobs");
const appliedJobs = require("./routes/appliedJobs");
const chats = require("./routes/chats");
const messages = require("./routes/messages");

// connect with database
connectDB();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/users", users);
app.use("/jobs", jobs);
app.use("/appliedJobs", appliedJobs);
app.use("/chats", chats);
app.use("/messages", messages);

// error handling middleware
const errorHandler = (err, req, res, next) => {
  if (err.headerSent) {
    return next();
  }
  res.status(500).json(err.message);
};

app.use(errorHandler);

app.get("/", (req, res) => {
  res.json("CorporateZone - where meet Professionals");
});

const io = require("socket.io")(server, {
  pingTimeout: 6000,
  cors: {
    origin: "https://corporate-zone-clitent.vercel.app/",
  },
});

io.on("connection", (socket) => {
  console.log(`Connected to socket.io`);

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User joined room", room);
  });

  socket.on("new message", (newMessageReceived) => {
    var chat = newMessageReceived.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id === newMessageReceived.sender._id) return;

      socket.in(user._id).emait("message received", newMessageReceived);
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`);
});
