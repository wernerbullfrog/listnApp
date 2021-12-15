const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
  getRooms,
  addRoom,
  getRoom,
  getAllRooms,
  joinRoom,
  leaveRoom,
  addSong,
} = require("./handlers/MongoHandlers");
const {
  requestAccessToken,
  requestUserAuth,
  returnAccessToken,
} = require("./handlers/spotifyHandlers");
const PORT = 8000;

express()
  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(express.json())
  .use(express.static("public"))
  //MONGO ENDPOINTS
  .get("/api/rooms/:roomType", getRooms)
  .get("/api/rooms/", getAllRooms)
  .get("/api/:roomType/:_id", getRoom)
  .post("/api/:roomType", addRoom)
  .patch("/api/rooms", joinRoom)
  .patch("/api/addSong", addSong)
  .patch("/api/rooms", leaveRoom)
  //SPOTIFY ENDPOINTS
  .get("/auth/login", requestUserAuth)
  .get("/callback/:code", requestAccessToken)
  .get("/auth/token/:token", returnAccessToken)

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.

  .listen(PORT, () => {
    console.info("🌍 Listening on port " + PORT);
  });
