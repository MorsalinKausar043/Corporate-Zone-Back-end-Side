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

// crete review

// const review = async (req,res) =>{
//   try {
//     const newReview = new newReview(req.body);
//     const result = await newReview.save();
//     res.json(result);

//   } catch (err) {
//     res.status(500).json({message:err.message})
//   }
// }

// get all users
const allUsers = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    const updateDoc = { $set: req.body };
    console.log(updateDoc);
    const options = { upsert: true };
    const result = await User.findOneAndUpdate(query, updateDoc, options);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get user by id
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: mongoose.Types.ObjectId(id) };
    const result = await User.findOne({ query: query });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// delete users
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: mongoose.Types.ObjectId(id) };
    const result = await User.findOneAndDelete(query);
    console.log(result);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { postUser, allUsers, getUserById, deleteUserById };
