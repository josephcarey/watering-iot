const pool = require("./pool");

const logWithDBEntry = (caller, message, calledWith) => {
  console.log("[ " + caller + " ]: " + message + " (" + calledWith + ")");
  pool.query(
    `
        INSERT INTO "log" ("caller", "message", "called_with")
        VALUES ($1, $2, $3);
      `,
    [caller, message, calledWith]
  );
};

module.exports = logWithDBEntry;
