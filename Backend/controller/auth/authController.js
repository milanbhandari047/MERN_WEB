const User = require("../../model/userModel");


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

    const userCreated = await User.create({ username, email, phone, password });

    res.status(201).json({
      message: "User register successfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString()
    });
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};
