const express = require("express");

const app = express();
const bodyParser = require("body-parser");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route includes
const mainRouter = require("./routes/main.router");

console.log("Successfully Loaded.");

/* Routes */
app.use("/", mainRouter);

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
