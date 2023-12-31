const express = require("express");
const app = express();

const { connectDatabase } = require("./database/database");
const authRoute = require("./routes/auth/authRoute");
const contactRoute = require("./routes/contact/contactRoute")
const errorMiddleware = require("./middlewares/errorMiddleware");

require("dotenv").config();

//Database connection
connectDatabase(process.env.MONGO_URI);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", authRoute);
app.use("/api/form",contactRoute)

app.use(errorMiddleware)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
