const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send({ message: "data stored successfully", user });
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("", async (req, res) => {
  try {
    const data = await User.find();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
