const express = require("express");
const logWithDBEntry = require("../modules/logWithDBEntry");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  logWithDBEntry("/ GET", "hit", "");
  res.send("Hello world");
});

router.post("/", (req, res) => {
  console.log("in / POST hit:");
  console.log("req.query: " + JSON.stringify(req.query));
  logWithDBEntry("/ POST", "hit", req.body);

  let moistureLevels = [];
  moistureLevels.push(req.query.moisture1);
  moistureLevels.push(req.query.moisture2);
  moistureLevels.push(req.query.moisture3);
  moistureLevels.push(req.query.moisture4);

  pool.query(
    `
        INSERT INTO "plant_soil_moisture_data" (creation_date, plant, value)
        VALUES
          (now(), 1, $1),
          (now(), 2, $2),
          (now(), 3, $3),
          (now(), 4,$4)
      `,
    [moistureLevels[0], moistureLevels[1], moistureLevels[2], moistureLevels[3]]
  );

  let response = "Hi Arduiuno";
  res.send(response);
});

module.exports = router;
