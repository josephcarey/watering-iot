const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.sendStatus(500);
});

module.exports = router;
