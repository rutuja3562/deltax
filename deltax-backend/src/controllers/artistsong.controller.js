const express = require("express");
const ArtistSongs = require("../models/artistsong.models");

const router = express.Router();

router.get("/", async (req, res) => {
  const bookauthor = await ArtistSongs.find()
    .populate({path:"artistId",select:{name:1,DOB:1,bio:1,_id:0}})
    .populate({
      path: "songId",
    select: { firstName: 1, DOR:1,songname:1,cover:1, _id: 0 },
    })
    .lean()
    .exec();
  res.status(200).send({ bookauthor });
});

router.post("", async (req, res) => {
  const master = await ArtistSongs.create(req.body);
  res.send({ master });
});

module.exports = router;
