const express = require("express");
const router = express.Router();
const { AdminData, UserData } = require("../controllers/data-controller");

router.route("/admin").get(AdminData);
router.route("/user").get(UserData);

module.exports = router;
