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

// User Registration Logic
exports.register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const userCreated = await User.create({ username, email, phone, password });

    res.status(201).json({
      message: "User register successfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

//User Login Logic

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if the email is already exist or not

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        message: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(400).json({
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};
