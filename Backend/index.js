const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { UserRouter } = require("./routes/user_routes.js");
require("dotenv").config();
const port = process.env.PORT;
const { Hotel } = require("./models/hotelSchema");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use("/user", UserRouter);
app.get("/", (req, res) => {
  res.send({
    message: "API is working fine",
  });
});
//cards
app.get("/images", async (req, res) => {
  try {
    const allData = await Hotel.find({});
    res.json(allData);
  } catch (error) {
    console.log(error);
  }
});
//individual page
app.get(`/images/:id`, async (req, res) => {
  const { id } = req.params;
  res.json(await Hotel.findById(id));
});
//Search

app.get("/homepage", (req, res) => {
  res.json("Success");
});

app.listen(port, async () => {
  try {
    await connection;
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }

  console.log("Server is running on port number", port);
});
