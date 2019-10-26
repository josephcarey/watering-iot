const express = require("express");
const logWithDBEntry = require("../modules/logWithDBEntry");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  logWithDBEntry("/ GET", "hit", "");
  res.send("Hello world");
});

router.post("/", (req, res) => {
  console.log("req.query: " + JSON.stringify(req.query));
  logWithDBEntry("/api/remote/ POST", "hit", JSON.stringify(req.query));

  let moistureLevels = [];
  moistureLevels.push(req.query.moisture1 ? req.query.moisture1 : 3);
  moistureLevels.push(req.query.moisture2 ? req.query.moisture2 : 3);
  moistureLevels.push(req.query.moisture3 ? req.query.moisture3 : 3);
  moistureLevels.push(req.query.moisture4 ? req.query.moisture4 : 3);
  // console.log(moistureLevels);

  pool
    .query(
      `
      insert into "plant_soil_moisture_data" (plant, moisture_value)
      values
        (1, $1),
        (2, $2),
        (3, $3),
        (4, $4);
      `,
      [
        moistureLevels[0],
        moistureLevels[1],
        moistureLevels[2],
        moistureLevels[3]
      ]
    )
    .then(results => {
      let response =
        "goalMoisture1 10 goalMoisture2 20 goalMoisture3 30 goalMoisture4 40";
      res.send(response);
    })
    .catch(error => {
      console.log("Error! This sucks.");
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
