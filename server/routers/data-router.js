const express = require("express");
const router = express.Router();
const data = require("../controllers/data-controller");

router.route("/admin").get(data);

module.exports = router;
