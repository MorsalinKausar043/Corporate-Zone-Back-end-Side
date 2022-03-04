const Chat = require("../models/chatModel");
const { User } = require("../models/userModel");
const mongoose = require("mongoose");

//@description     Create or fetch One to One Chat
//@route           POST /api/chat/
//@access          Protected
const accessChat = async (req, res) => {
  const { receiverId, senderId } = req.body;

  if (!receiverId || !senderId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }

  var isChat = await Chat.find({
    $and: [
      { users: { $elemMatch: { $eq: senderId } } },
      { users: { $elemMatch: { $eq: receiverId } } },
    ],
  })
    .populate("users", "username photoURL email")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "username photoURL email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      users: [senderId, receiverId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "username photoURL email"
      );
      res.status(200).json(FullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
};

//@description     Fetch all chats for a user
//@route           GET /api/chat/
//@access          Protected
const fetchChats = async (req, res) => {
  const id = req.params.id;
  try {
    Chat.find({ users: { $elemMatch: { $eq: id } } })
      .populate("users", "username photoURL email")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "username photoURL email",
        });
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
};

const deleteChat = async (req, res) => {
  const id = req.params.id;
  const result = await Chat.findByIdAndDelete({
    _id: mongoose.Types.ObjectId(id),
  });
  res.json(result);
};

module.exports = {
  accessChat,
  fetchChats,
  deleteChat,
};
