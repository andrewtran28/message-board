const { Router } = require("express");
const indexRouter = Router();

function getFormattedDate() {
  const date = new Date();

  const options = { month: 'short' };
  const month = new Intl.DateTimeFormat('en-US', options).format(date);
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = date.getHours() < 12 ? 'AM' : 'PM';

  const timezone = new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' })
    .format(date)
    .split(' ')
    .pop();

  return `${month} ${day}, ${year} @ ${hours}:${minutes}${ampm} ${timezone}`;
}

const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: getFormattedDate()
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: getFormattedDate()
  }
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
})

indexRouter.get("/new", (req, res) => {
  res.render("form");
})

indexRouter.post("/new", (req, res) => {
  messages.push( { id: messages.length, text: req.body.text, user: req.body.sender, added: getFormattedDate() });
  res.redirect("/");
})

indexRouter.get("/message/:messageId", (req, res) => {
  const messageDetails = messages.find((message) => message.id == req.params.messageId);
  res.render("message", {title: "User Message", message: messageDetails});
})

module.exports = indexRouter;