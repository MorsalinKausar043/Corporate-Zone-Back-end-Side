const express = require("express");
const router = express.Router();
const { postUser, allUsers,deleteUserById, getUserById } = require("../controllers/userControllers");

// get all users
router.get("/", allUsers);

// post a user
router.post("/", postUser);

// delete
router.post("/:id", deleteUserById);

// get user by id
router.get("/:id", getUserById);

module.exports = router;
