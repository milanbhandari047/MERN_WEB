const express = require("express");
const { contactForm } = require("../../controller/contact/contactController");
const router = express.Router();

router.route("/contact").post(contactForm);

module.exports = router;
