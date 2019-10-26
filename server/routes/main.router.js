const express = require("express");
const pool = require("../modules/pool");
const logWithDBEntry = require("../modules/logWithDBEntry");
const router = express.Router();

router.get("/", (req, res) => {
  logWithDBEntry("/ GET", "hit", "");
  res.send("Hello world");
});

router.post("/", (req, res) => {
  logWithDBEntry("/ POST", "hit", req.body);
  res.sendStatus(200);
});

module.exports = router;
