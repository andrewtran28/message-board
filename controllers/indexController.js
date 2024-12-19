const asyncHandler = require("express-async-handler");

const getMessageById = asyncHandler(async (req, res, next) => {
  const messageId = req.params.messageId;
  const messageDetails = messages.find((message) => message.id === messageId)
  res.render("message", {title: "User Message", messageDetails});
})

module.exports = { getMessageById };