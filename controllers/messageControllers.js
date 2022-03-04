const Chat = require("../models/chatModel");
const Message = require("../models/messageModel");
const { User } = require("../models/userModel");

const allMessages = async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "username photoURL email")
      .populate("chat");
    res.json(messages);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
};

const sendMessage = async (req, res) => {
  const { content, chatId, senderId } = req.body;

  if (!content || !chatId || !senderId) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

  const newMessage = {
    sender: senderId,
    content: content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);

    message = await message.populate("sender", "username photoURL email");
    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "username photoURL email",
    });

    await Chat.findByIdAndUpdate(req.body.chatId, {
      latestMessage: message,
    });

    res.json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { sendMessage, allMessages };
