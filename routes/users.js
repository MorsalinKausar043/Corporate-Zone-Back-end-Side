const express = require("express");
const router = express.Router();
const {
  postUser,
  allUsers,
  getUserById,
  deleteUserById,
} = require("../controllers/userControllers");

// get all users
router.get("/", allUsers);

// get a user
router.get("/:email", getUser);

// post a user
router.post("/", postUser);

// all review

// router.post("/", review)

// get user by id
router.get("/:id", getUserById);

// delete
router.delete("/:id", deleteUserById);

module.exports = router;
