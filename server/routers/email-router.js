const express = require("express");
const router = express.Router();
const email= require("../utilities/email");

router.route("/send").post(email);

module.exports = router;