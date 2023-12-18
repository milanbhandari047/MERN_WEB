const express = require("express");
const authControllers = require("../../controller/auth/authController");

const router = express.Router();

router.route("/").get(authControllers.home);

router.route("/register").post(authControllers.register);
router.route("/login").post(authControllers.login)

module.exports = router;
