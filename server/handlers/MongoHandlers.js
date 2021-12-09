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
// ********************* getROOMSBYID HANDLERS **********************//
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
// ********************* getROOMS HANDLERS **********************//
//////////////////////////////////////////////////////////////////////
const getRoom = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const conn = await activateConn(client, req.params.roomType);
    const _id = req.params._id;
    const result = await conn.findOne({ _id });
    res.status(200).json({ status: 200, result });
  } catch (error) {
    res.status(404).json({ status: 404, message: "no room Found" });
  }
  deactivateConn(client);
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
      (room) => room.roomName.toLowerCase() === req.body.roomName.toLowerCase()
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
////////////////////////////////////////////////////////////////////////
// ********************* JOIN ROOM HANDLER **********************//
//////////////////////////////////////////////////////////////////////
const joinRoom = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const conn = await activateConn(client, req.body.roomType);
    const roomQuery = { _id: req.body._id };
    const newRoomUser = {
      $addToSet: {
        roomUsers: req.body.currentUser,
      },
    };
    const result = await conn.updateOne(roomQuery, newRoomUser);
    res.status(200).json({ status: 200, updatedRoom: result });
    console.log(result);
  } catch (error) {
    res.status(400).json({ status: 400, message: " server Error " });
  } finally {
    deactivateConn(client);
  }
};

////////////////////////////////////////////////////////////////////////
// ********************* LEAVE ROOM HANDLER **********************//
//////////////////////////////////////////////////////////////////////

const leaveRoom = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const conn = await activateConn(client, req.body.roomType);
    const roomQuery = { _id: req.body._id };
    const newRoomUser = {
      $unSet: {
        roomUsers: req.body.currentUser,
      },
    };
    const result = await conn.updateOne(roomQuery, newRoomUser);
    res.status(200).json({ status: 200, updatedRoom: result });
  } catch (error) {
    res.status(400).json({ status: 400, message: " server Error " });
  } finally {
    deactivateConn(client);
  }
};

module.exports = {
  getRooms,
  getRoom,
  getAllRooms,
  addRoom,
  joinRoom,
  leaveRoom,
};
