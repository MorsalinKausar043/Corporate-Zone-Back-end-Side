const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/connect");
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

// all routes
const users = require("./routes/users");
const jobs = require("./routes/jobs");

// connect with database
connectDB();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/users", users);
app.use("/jobs", jobs);

// error handling middleware
const errorHandler = (err, req, res, next) => {
  if (err.headerSent) {
    return next();
  }
  res.status(500).json(err.message);
};

app.use(errorHandler);

app.get("/", (req, res) => {
  res.json("CorporateZone-where meet professionals");
});






app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`);
});
