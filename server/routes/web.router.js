const express = require("express");
const logWithDBEntry = require("../modules/logWithDBEntry");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  logWithDBEntry("/api/web/ GET", "hit", "");
  pool
    .query(
      `
        select distinct on (3) * from plant_soil_moisture_data order by plant, creation_date desc
      `
    )
    .then(results => {
      res.send(results.rows);
    });
});

router.post("/", (req, res) => {
  console.log(JSON.stringify(req.body));
  logWithDBEntry("/api/web/ POST", "hit", JSON.stringify(req.body));
  pool
    .query(
      `
      insert into plant_goal_moisture (plant, goal_moisture)
      values
        (1, $1),
        (2, $2),
        (3, $3),
        (4, $4)
      `,
      [
        req.body.goalMoisture1,
        req.body.goalMoisture2,
        req.body.goalMoisture3,
        req.body.goalMoisture4
      ]
    )
    .then(results => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log("An error occurred.");
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
