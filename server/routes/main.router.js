const express = require("express");
const pool = require("../modules/pool");
const logWithDBEntry = require("../modules/logWithDBEntry");
const router = express.Router();

router.get("/", (req, res) => {
  logWithDBEntry("/ GET", "hit", "");
  res.send("Hello world");
});

router.post("/:message", (req, res) => {
  console.log("in post hit:");
  console.log(req);
  console.log("req.body: " + req.body);
  console.log("req.params:" + req.params.message);
  logWithDBEntry("/ POST", "hit", req.body);
  let response = {
    message: "Hello Arduiuno",
    plantsNeedWatering: [1],
    needWater: true
  };
  res.send(response);
});

module.exports = router;
