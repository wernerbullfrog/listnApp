const path = require("path");
const express = require("express");

const PORT = 8000;

express()
  .use(express.json())
  //ENDPOINTS

  //ENDPOINTS

  .listen(PORT, function () {
    console.info("🌍 Listening on port " + PORT);
  });
