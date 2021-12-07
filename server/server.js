const express = require("express");
const morgan = require("morgan");
const {
  getPublicRooms,
  getPrivateRooms,
  addRoom,
} = require("./handlers/MongoHandlers");
const PORT = 8000;

express()
  .use(morgan("tiny"))
  .use(express.json())
  .use(express.static("public"))
  //ENDPOINTS
  .get("/api/rooms/public", getPublicRooms)
  .get("/api/rooms/private", getPrivateRooms)
  .post("/api/:roomType", addRoom)

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
