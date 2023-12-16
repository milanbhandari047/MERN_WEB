const express = require("express");
const app = express();

const { connectDatabase } = require("./database/database");
const router = require("./routes/auth/authRoute");

require("dotenv").config();

//Database connection
connectDatabase(process.env.MONGO_URI);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", router);




const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
