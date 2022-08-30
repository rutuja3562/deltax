const express = require("express");

const Songs = require("../models/songs.models");

// const { uploadFiles } = require("../middlewares/uploads");
const upload = require("../middlewares/uploads")

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const songs = await Songs.find().lean().exec();

    return res.status(200).send(songs);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
// .populate({ path: "artistId", select: { name: 1, _id: 0 } })
      
router.post("", upload.single("cover"), async (req, res) => {
  try {
    //   const user = await Songs.create(req.body)
    const songs = await Songs.create({
      firstName: req.body.firstName,
      songname: req.body.songname,
      // artistId: req.body.artistId,
      DOR: req.body.DOR,
      cover: req.file.path,
    });
    return res.status(200).send(songs);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/multiple", upload.any("cover"), async (req, res) => {
  try {
    const filePaths = req.files.map((file) => {
      return file.path;
    });

    const songs = await Songs.create({
      firstName: req.body.firstName,
      songname: req.body.songname,
      // artistId: req.body.artistId,
      DOR: req.body.DOR,
      cover: filePaths,
    });

    return res.status(200).send(songs);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// --- Refactor code ------
// router.post("", uploadFiles("profilePic", "single"), async (req, res) => {
//   try {
//     //   const user = await Songs.create(req.body)
//     const user = await User.create({
//       firstName: req.body.firstName,
//       profilePic: req.file.path,
//     });
//     return res.status(200).send(user);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

// router.post(
//   "/multiple",
//   uploadFiles("profilePic", "multiple"),
//   async (req, res) => {
//     try {
//       const filePaths = req.files.map((file) => {
//         return file.path;
//       });

//       const user = await User.create({
//         firstName: req.body.firstName,
//         profilePic: filePaths,
//       });

//       return res.status(200).send(user);
//     } catch (err) {
//       return res.status(500).send({ message: err.message });
//     }
//   }
// );

module.exports = router;
