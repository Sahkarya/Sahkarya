const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate-registration-middleware");
const registrationSchema = require("../validators/registration-validator");
const authController = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-middleware");

router
  .route("/register")
  .post(validate(registrationSchema), authController.register);

router.route("/login").post(authController.login);

router.route("/user").get(authMiddleware, authController.user);

module.exports = router;
