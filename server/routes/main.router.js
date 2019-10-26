const express = require("express");
const logWithDBEntry = require("../modules/logWithDBEntry");
const router = express.Router();

router.get("/", (req, res) => {
  logWithDBEntry("/ GET", "hit", "");
  res.send("Hello world");
});

router.post("/", (req, res) => {
  console.log("in post hit:");
  console.log(req);
  console.log("req.body: " + JSON.stringify(req.body));
  console.log("req.query: " + JSON.stringify(req.query));
  console.log("req.params:" + JSON.stringify(req.params.message));
  logWithDBEntry("/ POST", "hit", req.body);
  let response = "Hi Arduiuno";
  // let response = {
  //   message: "Hello Arduiuno",
  //   plantsNeedWatering: [1],
  //   needWater: true
  // };
  res.send(response);
});

module.exports = router;
