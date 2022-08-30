const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    // author:{ type: String, required: true },
    // artistId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "artist",
    //   required: true,
    // },
    songname: { type: String, required: true },
    DOR: { type: String, required: true },
    cover: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("song", songSchema);
