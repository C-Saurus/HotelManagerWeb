const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const bookingRoute = require("./routes/booking");
const roomRouter = require("./routes/room");
const PORT = process.env.PORT || 8000;
dotenv.config();

// Connect to the database
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB");
});

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("common"));

app.use("/user", userRoute);
app.use("/bookings", bookingRoute);
app.use("/rooms", roomRouter);
app.listen(PORT, () => {
  console.log("Server listening on port 8000");
});
