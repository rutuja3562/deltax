const express = require("express");

const songsController = require("./controllers/songs.controllers");
const userController = require("./controllers/user.controllers");
const artistController = require("./controllers/artist.controllers");
const artistsongController=require("./controllers/artistsong.controller")
const app = express();

app.use(express.json());

app.use("/songs", songsController);
app.use("/user", userController);
app.use("/artist", artistController);
app.use("/artistsong",artistsongController)
module.exports = app;
