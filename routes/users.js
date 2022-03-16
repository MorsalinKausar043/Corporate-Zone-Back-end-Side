const express = require("express");
const router = express.Router();
const {
  postUser,
  allUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/userControllers");

// get all users
router.get("/", allUsers);

// get a user
router.get("/signleUser/:email", getUser);

// post a user
router.post("/register", postUser);

// delete user
router.delete("/delete/:id", deleteUser);

// put a user
router.put("/:email", updateUser);

module.exports = router;
