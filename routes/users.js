const express = require("express");
const router = express.Router();
const {
  postUser,
  allUsers,
  getUser,
  updateUser,
} = require("../controllers/userControllers");

// get all users
router.get("/", allUsers);

// get a user
router.get("/:email", getUser);

// post a user
router.post("/", postUser);

// put a user
router.put("/:email", updateUser);

module.exports = router;
