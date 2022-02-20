const express = require("express");
const router = express.Router();
const { postUser, allUsers, review } = require("../controllers/userControllers");

// get all users
router.get("/", allUsers);

// post a user
router.post("/", postUser);

// all review

router.post("/", review)

module.exports = router;
