const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/:indexId", (req, res) => {
  const {indexId} = req.params;
  res.send(`Index ID: ${IndexId}`);
})

module.exports = indexRouter;