const express = require("express");
const logWithDBEntry = require("../modules/logWithDBEntry");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  logWithDBEntry("/ GET", "hit", "");
  pool
    .query(
      `
          select distinct on (3) * from plant_goal_moisture order by plant, creation_date desc;
        `
    )
    .then(selectResults => {
      const rows = selectResults.rows;
      const goalMoisture1 = String(rows[0].goal_moisture).padStart(2, "0");
      const goalMoisture2 = String(rows[1].goal_moisture).padStart(2, "0");
      const goalMoisture3 = String(rows[2].goal_moisture).padStart(2, "0");
      const goalMoisture4 = String(rows[3].goal_moisture).padStart(2, "0");

      let response = `goalMoisture1 ${goalMoisture1} goalMoisture2 ${goalMoisture2} goalMoisture3 ${goalMoisture3} goalMoisture4 ${goalMoisture4}`;
      res.send(response);
    });
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
      pool
        .query(
          `
          select distinct on (3) * from plant_goal_moisture order by plant, creation_date desc;
        `
        )
        .then(selectResults => {
          const rows = selectResults.rows;
          const goalMoisture1 = String(rows[0].goal_moisture).padStart(2, "0");
          const goalMoisture2 = String(rows[1].goal_moisture).padStart(2, "0");
          const goalMoisture3 = String(rows[2].goal_moisture).padStart(2, "0");
          const goalMoisture4 = String(rows[3].goal_moisture).padStart(2, "0");

          let response = `goalMoisture1 ${goalMoisture1} goalMoisture2 ${goalMoisture2} goalMoisture3 ${goalMoisture3} goalMoisture4 ${goalMoisture4}`;
          res.send(response);
        });
    })
    .catch(error => {
      console.log("Error! This sucks.");
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
