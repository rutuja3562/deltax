const express = require("express");
const User = require("../models/artist.models");

const router = express.Router();

router.get("/", async (req, res) => {
  const artist = await User.find().lean()
    .exec();
  res.status(200).send({ artist });
});
// .populate({ path: "userId", select: { name: 1, _id: 0 } })
router.get("/:id", async (req, res) => {
  const artist = await User.findById(req.params.id).lean().exec();
  res.status(200).send({ artist });
});

router.post("", async (req, res) => {
  const artist = await User.create(req.body);
  res.send({ artist });
});

module.exports = router;
