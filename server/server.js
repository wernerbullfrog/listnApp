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
} = require("./handlers/MongoHandlers");
const PORT = 8000;

express()
  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(express.json())
  .use(express.static("public"))
  //ENDPOINTS
  .get("/api/rooms/:roomType", getRooms)
  .get("/api/rooms/", getAllRooms)
  .get("/api/:roomType/:_id", getRoom)
  .post("/api/:roomType", addRoom)
  .patch("/api/rooms", joinRoom)
  .patch("/api/rooms", leaveRoom)

  //ENDPOINTS
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
