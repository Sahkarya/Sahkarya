const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate-registration-middleware");
const registrationSchema = require("../validators/registration-validator");
const authController = require("../controllers/auth-controller");

router
  .route("/register")
  .post(validate(registrationSchema), authController.register);

module.exports = router;
