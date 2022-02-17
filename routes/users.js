const express = require("express");
const router = express.Router();
const { postUser, allUsers } = require("../controllers/userControllers");

// get all users
router.get("/", allUsers);

// post a user
router.post("/", postUser);

module.exports = router;
