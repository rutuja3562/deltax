const express = require("express");
const User = require("../models/user.models");

const router = express.Router();

router.get("/", async (req, res) => {
  const user = await User.find().lean().exec();
  res.status(200).send({ user });
});
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).lean().exec();
  res.status(200).send({ user });
});


router.post("", async (req, res) => {
  const master = await User.create(req.body);
  res.send({ master });
});

module.exports = router;
