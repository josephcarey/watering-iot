const express = require("express");
const router = express.Router();

const remoteRouter = require("./remote.router");
const webRouter = require("./web.router");

router.use("/remote/", remoteRouter);
router.use("/web/", webRouter);

module.exports = router;
