const { Router } = require("express");
const indexRouter = Router();
// const indexController = require("../controllers/indexController");

const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
  res.render("index", {title: "Mini Messageboard", messages: messages});
})

indexRouter.get("/new", (req, res) => {
  res.render("form");
})

indexRouter.post("/new", (req, res) => {
  messages.push( { id: messages.length, text: req.body.text, user: req.body.sender, added: new Date() });
  res.redirect("/");
})

indexRouter.get("/message/:messageId", (req, res) => {
  const messageDetails = messages.find((message) => message.id == req.params.messageId);
  res.render("message", {title: "User Message", message: messageDetails});
})

module.exports = indexRouter;