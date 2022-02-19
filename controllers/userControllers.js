const mongoose = require("mongoose");
const { User } = require("../models/userModel");

// get all users
const allUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get a user by email
const getUser = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    const user = await User.findOne(query);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// create a new user
const postUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { postUser, allUsers, getUser };
