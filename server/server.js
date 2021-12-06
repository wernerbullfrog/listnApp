const express = require("express");
const { getPublicRooms, getPrivateRooms } = require("./handlers/MongoHandlers");
const PORT = 8000;

express()
  .use(express.json())
  //ENDPOINTS
  .get("/api/rooms/public", getPublicRooms)
  .get("/api/rooms/private", getPrivateRooms)
  // .post("/api/rooms/", createRoom)

  //ENDPOINTS

  .listen(PORT, function () {
    console.info("🌍 Listening on port " + PORT);
  });
