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

////////////////////////////////////////////////////////////////////////
// ********************* getROOMS HANDLERS **********************//
//////////////////////////////////////////////////////////////////////
const getRooms = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const conn = await activateConn(client, req.params.roomType);
    //the commented code below is for pagination
    //   const limit = parseInt(req.query.limit)
    //   const offset = parseInt(req.query.page) * limit
    const result = await conn
      .find()
      //the commented code below is for pagination
      //   .skip(offset)
      //   .limit(limit)
      .toArray();

    res.status(200).json({ status: 200, rooms: result });

    deactivateConn(client);
  } catch (error) {
    response(res, 500, "Server Error");
  }
};

////////////////////////////////////////////////////////////////////////
// ********************* getAllROOMS HANDLERS **********************//
//////////////////////////////////////////////////////////////////////
const getAllRooms = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const privateConn = await activateConn(client, "private");
    const punlicConn = await activateConn(client, "public");
    //the commented code below is for pagination
    //   const limit = parseInt(req.query.limit)
    //   const offset = parseInt(req.query.page) * limit
    let privateResult = await privateConn
      .find()
      //the commented code below is for pagination
      //   .skip(offset)
      //   .limit(limit)
      .toArray();
    let publicResult = await punlicConn
      .find()
      //the commented code below is for pagination
      //   .skip(offset)
      //   .limit(limit)
      .toArray();
    res.status(200).json({
      status: 200,
      privateRooms: privateResult,
      publicRooms: publicResult,
    });
    deactivateConn(client);
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
    const conn = await activateConn(client, req.params.roomType);
    const newRoom = {
      _id: uuidv4(),
      ...req.body,
    };
    const rooms = await conn.find().toArray();
    let roomAlreadyExists = rooms.find(
      (room) => room.Name.toLowerCase() === req.body.Name.toLowerCase()
    );
    if (roomAlreadyExists) {
      res.status(400).json({
        status: 400,
        message: `the room name:${roomAlreadyExists.Name} is already taken`,
      });
    } else {
      await conn.insertOne({ ...newRoom });
    }
    res.status(200).json({ status: 200, Room: newRoom });
  } catch (error) {
    res.status(400).json({ status: 400, message: "server error" });
  } finally {
    deactivateConn(client);
  }
};

module.exports = {
  getRooms,
  getAllRooms,
  addRoom,
};
