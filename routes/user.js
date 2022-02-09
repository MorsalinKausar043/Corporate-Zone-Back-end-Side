const express = require("express");
const router = express.Router();
const { postUser, allUsers } = require("../controllers/userControllers");

// post a user
router.post("/", postUser);

// get all users
router.get("/", allUsers);

module.exports = router;
