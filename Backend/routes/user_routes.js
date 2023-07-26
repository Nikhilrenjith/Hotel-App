const express = require("express");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/UserModel");
const { Image } = require("../models/hotelSchema");
const bcrypt = require("bcrypt");

const UserRouter = express.Router();

UserRouter.get("/", (req, res) => {
  res.send("All the users");
});

UserRouter.post("/register", async (req, res) => {
  try {
    const { fname, lname, email, password, address, phone, city } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      fname,
      lname,
      email,
      password: hashedPassword,
      address,
      phone,
      city,
    });

    await newUser.save();

    res.send({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).send({ message: "Registration failed", error });
  }
});

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let option = {
    expiresIn: "15m",
  };

  try {
    let data = await UserModel.find({ email });
    if (data.length > 0) {
      let token = jwt.sign({ userId: data[0]._id }, "Raj", option);
      bcrypt.compare(password, data[0].password, function (err, result) {
        if (err)
          return res.send({ message: "Something went wrong" + err, status: 0 });
        if (result) {
          res.send({
            message: "User logged in successfully",
            token: token,
            status: 1,
          });
        } else {
          res.send({
            message: "Incorrect password",
            status: 0,
          });
        }
      });
    } else {
      res.send({
        message: "User does not exist",
        status: 0,
      });
    }
  } catch (error) {
    res.send({
      message: error.message,
      status: 0,
    });
  }
});
module.exports = { UserRouter };
