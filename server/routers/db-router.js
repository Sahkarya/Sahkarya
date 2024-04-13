const express = require("express");
const router = express.Router();
const status = require("../controllers/db-controller");

router.route("/status").post(status);

module.exports = router;