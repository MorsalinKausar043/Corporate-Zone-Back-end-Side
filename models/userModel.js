const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
  },
  companyName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  photoURL: {
    type: String,
  },
  companyWebsite: {
    type: String,
    trim: true,
  },
  experienceInHiring: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
  },
  post: {
    type: String,
    require: true,
  },
  role: {
    type: String,
  },
  location: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
