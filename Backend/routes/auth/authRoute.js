const express = require("express");
const { home, register } = require("../../controller/auth/authController");

const router = express.Router();

router.route("/").get(home);

router.route("/register").post(register);

module.exports = router;
