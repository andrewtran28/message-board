const asyncHandler = require("express-async-handler");
const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const renderMessages = asyncHandler(async (req, res, next) => {
  const allMessages = await db.getMessages();
  res.render("index", { messages: allMessages });
});

const renderForm = asyncHandler(async (req, res, next) => {
  res.render("form");
});

const submitForm = asyncHandler(async (req, res, next) => {
  const messageData = req.body;
  await db.addMessage(messageData.sender, messageData.text);
  res.redirect("/");
});

const getMessageById = asyncHandler(async (req, res, next) => {
  const messageId = req.params.messageId;
  const messageDetails = await db.getMessageId(messageId);

  if(!messageDetails) {
    throw new CustomNotFoundError("Message was not found or does not exist.");
  }

  res.render("message", { message: messageDetails });
})

module.exports = { renderMessages, renderForm, submitForm, getMessageById };