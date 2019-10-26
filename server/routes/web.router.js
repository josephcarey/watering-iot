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
      console.log(results.rows);
      res.send(results.rows);
    });
});

module.exports = router;
