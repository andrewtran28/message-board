const asyncHandler = require("express-async-handler");

const getMessageById = asyncHandler(async (requestAnimationFrame, res, next) => {
  const messageId = req.params.messageId;
  res.render("message", {title: "User Message: ", message});
})

module.exports = { getMessageById };