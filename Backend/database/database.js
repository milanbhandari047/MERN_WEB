const mongoose = require("mongoose");

exports.connectDatabase = async (URI) => {
  try {
    await mongoose.connect(URI);
    console.log("Database connect successfully");
  } catch (error) {
    console.error("Database connection failed");
    process.exit(0);
  }
};
