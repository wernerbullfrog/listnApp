"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { v4: uuidv4 } = require("uuid");

const { activateConn, deactivateConn, response } = require("./utils");

/////////////////////////////////////////////////////////////////////
// ********************* PUBLIC ROOM HANDLERS *********************//
/////////////////////////////////////////////////////////////////////
const getPublicRooms = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const conn = await activateConn(client, "listn'", "PublicRooms");
    //the commented code below is for pagination
    // const limit = parseInt(req.query.limit);
    // const offset = parseInt(req.query.page) * limit;
    await conn
      .find()
      //the commented code below is for pagination
      //   .skip(offset)
      //   .limit(limit)
      .toArray((err, result) => {
        if (err) {
          response(res, 404, "Data Not Found");
        } else {
          response(
            res,
            200,
            "Successefully retrieved all public rooms!",
            result
          );
        }
        deactivateConn(client);
      });
  } catch (error) {
    response(res, 500, "Server Error");
  }
};

// const getSinglePublicRoom =  async (req, res) => {
//   const client = new MongoClient(MONGO_URI, options);
//   try{
//     const conn = await activateConn(client, "listn'", "PublicRooms");
//   }
// }
////////////////////////////////////////////////////////////////////////
// ********************* Private ROOM HANDLERS **********************//
//////////////////////////////////////////////////////////////////////
const getPrivateRooms = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const conn = await activateConn(client, "listn'", "PrivateRooms");
    //the commented code below is for pagination
    //   const limit = parseInt(req.query.limit)
    //   const offset = parseInt(req.query.page) * limit
    await conn
      .find()
      //the commented code below is for pagination
      //   .skip(offset)
      //   .limit(limit)
      .toArray((err, result) => {
        if (err) {
          response(res, 404, "Data Not Found");
        } else {
          response(
            res,
            200,
            "Successefully retrieved all private rooms!",
            result
          );
        }
        deactivateConn(client);
      });
  } catch (error) {
    response(res, 500, "Server Error");
  }
};
////////////////////////////////////////////////////////////////////////
// ********************* CREATE ROOM HANDLER **********************//
//////////////////////////////////////////////////////////////////////
const addRoom = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db();
    const newRoom = { _id: uuidv4(), ...req.body };
    await db.collection(req.params.roomType).insertOne({ ...newRoom });
    res.status(200).json({ status: 200, Room: newRoom });
  } catch (error) {
    res.status(400).json({ status: 400, message: "server error" });
  } finally {
    client.close();
  }
};

module.exports = {
  getPublicRooms,
  getPrivateRooms,
  addRoom,
};
