const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
// const messagesRouter =  require("./routes/messagesRouter");
const path = require("node:path")

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", indexRouter);
// app.use("/new", messagesRouter);

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get("/", (req, res) => {
  res.render("index", {title: "Mini Messageboard", messages: messages});
})

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express Server App started. Listening on port http://localhost:${PORT}.`);
})