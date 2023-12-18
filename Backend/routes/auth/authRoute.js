const express = require("express");
const authControllers = require("../../controller/auth/authController");
const validate = require("../../middlewares/validateMiddleware");
const signupSchema = require("../../validators/authValidator");
// const loginSchema = require("../../validators/authValidator");

const router = express.Router();

router.route("/").get(authControllers.home);

router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);
router.route("/login").post( authControllers.login);

module.exports = router;
