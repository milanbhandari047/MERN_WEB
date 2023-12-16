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
    console.log(req.body);
    res.status(200).json({ message: req.body });
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};
