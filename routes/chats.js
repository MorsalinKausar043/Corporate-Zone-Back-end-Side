const express = require("express");

const {
  accessChat,
  fetchChats,
  deleteChat,
} = require("../controllers/chatControllers");

const router = express.Router();

router.post("/", accessChat);
router.get("/:id", fetchChats);
router.delete("/:id", deleteChat);

module.exports = router;
