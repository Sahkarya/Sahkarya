const express = require("express");
const concernForm = require("../controllers/concern-controller");
const router = express.Router();

router.route("/concern").post(concernForm);

module.exports = router;
