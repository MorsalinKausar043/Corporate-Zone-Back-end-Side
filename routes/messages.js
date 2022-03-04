const express = require("express");
const router = express.Router();
const {
  sendMessage,
  allMessages,
} = require("../controllers/messageControllers");
router.route("/").post(sendMessage);
router.route("/:chatId").get(allMessages);

module.exports = router;
