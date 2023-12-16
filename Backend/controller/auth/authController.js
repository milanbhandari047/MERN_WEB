const User = require("../../model/userModel");
const bcrypt = require("bcryptjs");

//Home page
exports.home = async (req, res) => {
  try {
    res.status(200).send("Welcome to home page");
  } catch (error) {
    console.log(error);
  }
};

//Registration Logic
exports.register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    await User.create({ username, email, phone, password });

    res.status(200).json({ message: "User register successfully" });
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};
